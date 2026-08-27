"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { OAuthAuthorizationDetails, User } from "@supabase/supabase-js";
import { Logo } from "@/components/ui/logo";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: string;
  is_active: boolean;
};

type ViewState =
  | { kind: "loading" }
  | { kind: "signed-out" }
  | { kind: "consent"; details: OAuthAuthorizationDetails; member: TeamMember }
  | { kind: "error"; message: string };

// Supabase authorization request identifiers are opaque URL-safe values, not
// UUIDs. Keep a strict alphabet and bounded length without assuming a format
// that the authorization server does not guarantee.
const AUTHORIZATION_ID = /^[A-Za-z0-9_-]{20,128}$/;

const scopeLabels: Record<string, string> = {
  openid: "Kimliğinizi doğrulama",
  email: "E-posta adresinizi görme",
  profile: "Temel profil bilgilerinizi görme",
  offline_access: "Oturumu güvenli biçimde yenileme",
};

function safeClientHost(uri: string): string | null {
  try {
    const parsed = new URL(uri);
    return parsed.protocol === "https:" ? parsed.hostname : null;
  } catch {
    return null;
  }
}

function safeRedirectHost(uri: string): string | null {
  try {
    const parsed = new URL(uri);
    const loopback = parsed.protocol === "http:" && ["127.0.0.1", "localhost", "[::1]"].includes(parsed.hostname);
    return parsed.protocol === "https:" || loopback ? parsed.host : null;
  } catch {
    return null;
  }
}

export function ConsentClient() {
  const searchParams = useSearchParams();
  const authorizationId = searchParams.get("authorization_id") ?? "";
  const socialCode = searchParams.get("code");
  const [state, setState] = useState<ViewState>({ kind: "loading" });
  const [submitting, setSubmitting] = useState<"approve" | "deny" | "github" | null>(null);

  const loadAuthorization = useCallback(async () => {
    if (!AUTHORIZATION_ID.test(authorizationId)) {
      setState({ kind: "error", message: "Geçerli bir yetkilendirme isteği bulunamadı." });
      return;
    }

    try {
      const supabase = getSupabaseBrowserClient();
      if (socialCode) {
        const { error } = await supabase.auth.exchangeCodeForSession(socialCode);
        if (error) throw error;
        const cleaned = new URL(window.location.href);
        cleaned.searchParams.delete("code");
        window.history.replaceState({}, "", cleaned.toString());
      }

      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData.user) {
        setState({ kind: "signed-out" });
        return;
      }

      const user: User = userData.user;
      const { data: memberData, error: memberError } = await supabase
        .from("team_members")
        .select("id,name,email,role,is_active")
        .eq("id", user.id)
        .eq("is_active", true)
        .maybeSingle<TeamMember>();
      if (memberError) throw memberError;
      if (!memberData) {
        setState({ kind: "error", message: "Bu hesap aktif bir Soleach ekip üyesine bağlı değil." });
        return;
      }

      const { data, error } = await supabase.auth.oauth.getAuthorizationDetails(authorizationId);
      if (error) throw error;
      if (!data) throw new Error("Yetkilendirme ayrıntıları alınamadı.");
      if ("redirect_url" in data) {
        window.location.assign(data.redirect_url);
        return;
      }
      setState({ kind: "consent", details: data, member: memberData });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Yetkilendirme isteği yüklenemedi.";
      setState({ kind: "error", message });
    }
  }, [authorizationId, socialCode]);

  useEffect(() => {
    void loadAuthorization();
  }, [loadAuthorization]);

  const requestedScopes = useMemo(
    () => (state.kind === "consent" ? state.details.scope.split(/\s+/).filter(Boolean) : []),
    [state],
  );

  async function signInWithGitHub() {
    setSubmitting("github");
    try {
      const supabase = getSupabaseBrowserClient();
      const redirectTo = new URL("/oauth/consent", window.location.origin);
      redirectTo.searchParams.set("authorization_id", authorizationId);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: { redirectTo: redirectTo.toString() },
      });
      if (error) throw error;
    } catch (error) {
      setSubmitting(null);
      setState({ kind: "error", message: error instanceof Error ? error.message : "GitHub girişi başlatılamadı." });
    }
  }

  async function decide(action: "approve" | "deny") {
    if (state.kind !== "consent") return;
    setSubmitting(action);
    try {
      const supabase = getSupabaseBrowserClient();
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData.user || userData.user.id !== state.member.id) {
        throw new Error("Oturum doğrulanamadı. Lütfen yeniden giriş yapın.");
      }
      const { data: activeMember, error: memberError } = await supabase
        .from("team_members")
        .select("id")
        .eq("id", userData.user.id)
        .eq("is_active", true)
        .maybeSingle();
      if (memberError || !activeMember) throw new Error("Soleach ekip üyeliğiniz aktif değil.");

      const response =
        action === "approve"
          ? await supabase.auth.oauth.approveAuthorization(authorizationId, { skipBrowserRedirect: true })
          : await supabase.auth.oauth.denyAuthorization(authorizationId, { skipBrowserRedirect: true });
      if (response.error) throw response.error;
      if (!response.data?.redirect_url) throw new Error("İstemci dönüş adresi alınamadı.");
      window.location.assign(response.data.redirect_url);
    } catch (error) {
      setSubmitting(null);
      setState({ kind: "error", message: error instanceof Error ? error.message : "İşlem tamamlanamadı." });
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div className="pointer-events-none absolute inset-0 brand-glow" />
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />

      <section className="relative w-full max-w-lg rounded-[2rem] border border-border bg-background/90 p-6 shadow-2xl shadow-accent/10 backdrop-blur-xl sm:p-9">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Logo priority />
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
            Güvenli bağlantı
          </span>
        </div>

        {state.kind === "loading" && (
          <div className="py-12 text-center" role="status">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
            <p className="text-sm text-muted">Yetkilendirme isteği doğrulanıyor…</p>
          </div>
        )}

        {state.kind === "signed-out" && (
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Soleach Remote MCP</p>
            <h1 className="text-balance text-3xl font-semibold">Ekip hesabınızla giriş yapın</h1>
            <p className="mt-4 leading-7 text-muted">
              Codex veya Hermes’in Soleach’in salt-okunur araçlarına erişebilmesi için GitHub hesabınızı doğrulayın.
            </p>
            <button
              type="button"
              onClick={() => void signInWithGitHub()}
              disabled={submitting !== null}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#24292f] px-5 py-3.5 font-semibold text-white transition hover:bg-black disabled:cursor-wait disabled:opacity-60"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.96 10.96 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
              </svg>
              {submitting === "github" ? "GitHub’a yönlendiriliyor…" : "GitHub ile devam et"}
            </button>
            <p className="mt-5 text-center text-xs leading-5 text-muted">
              GitHub hesabı tek başına erişim vermez. Aktif Soleach ekip üyeliği ayrıca doğrulanır.
            </p>
          </div>
        )}

        {state.kind === "consent" && (
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Erişim isteği</p>
            <h1 className="text-balance text-3xl font-semibold">
              {state.details.client.name || "Bir MCP istemcisi"} bağlanmak istiyor
            </h1>
            {safeClientHost(state.details.client.uri) && (
              <p className="mt-2 font-mono text-xs text-muted">{safeClientHost(state.details.client.uri)}</p>
            )}
            {safeRedirectHost(state.details.redirect_uri) && (
              <p className="mt-2 text-xs text-muted">
                Dönüş adresi: <span className="font-mono">{safeRedirectHost(state.details.redirect_uri)}</span>
              </p>
            )}

            <div className="mt-7 rounded-2xl border border-border bg-surface/70 p-5">
              <p className="text-sm font-semibold">İzin verilecek işlemler</p>
              <ul className="mt-3 space-y-3 text-sm text-muted">
                <li className="flex gap-3"><Check />Soleach’in 21 salt-okunur MCP aracını kullanma</li>
                <li className="flex gap-3"><Check />İş, trafik, brief ve doküman özetlerini okuma</li>
                {requestedScopes.map((scope) => (
                  <li key={scope} className="flex gap-3"><Check />{scopeLabels[scope] ?? `Standart OAuth izni: ${scope}`}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-border px-5 py-4 text-sm">
              <p className="font-semibold">{state.member.name}</p>
              <p className="mt-1 text-muted">{state.member.email} · {state.member.role}</p>
            </div>

            <p className="mt-5 text-xs leading-5 text-muted">
              Bu erişim generic SQL, yazma, yayınlama, dosya sistemi, shell, deploy veya servis yeniden başlatma yetkisi vermez.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => void decide("deny")}
                disabled={submitting !== null}
                className="rounded-2xl border border-border px-5 py-3 font-semibold transition hover:bg-surface disabled:opacity-60"
              >
                {submitting === "deny" ? "Reddediliyor…" : "Reddet"}
              </button>
              <button
                type="button"
                onClick={() => void decide("approve")}
                disabled={submitting !== null}
                className="rounded-2xl brand-gradient px-5 py-3 font-semibold text-white shadow-lg shadow-accent/20 transition hover:scale-[1.01] disabled:opacity-60"
              >
                {submitting === "approve" ? "Onaylanıyor…" : "Erişime izin ver"}
              </button>
            </div>
          </div>
        )}

        {state.kind === "error" && (
          <div role="alert">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Bağlantı tamamlanamadı</p>
            <h1 className="text-3xl font-semibold">Yetkilendirme hatası</h1>
            <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-900 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-200">
              {state.message}
            </p>
            <button
              type="button"
              onClick={() => { setState({ kind: "loading" }); void loadAuthorization(); }}
              className="mt-6 w-full rounded-2xl border border-border px-5 py-3 font-semibold transition hover:bg-surface"
            >
              Yeniden dene
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-accent">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.59l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}
