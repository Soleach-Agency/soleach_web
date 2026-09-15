import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

/** Soleach's own service wordmark; not a TikTok-issued certification badge. */
export function LiveServicePanel({
  locale,
  dict,
  showDetails = false,
  expanded = false,
}: {
  locale: Locale;
  dict: Dictionary;
  showDetails?: boolean;
  expanded?: boolean;
}) {
  const live = dict.live;
  const service = dict.services.find((item) => item.key === "tiktok-live");
  return (
    <section
      id="tiktok-live"
      aria-labelledby="tiktok-live-heading"
      className="live-panel relative isolate scroll-mt-24 overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-surface via-surface to-surface-2 p-6 text-foreground shadow-xl shadow-accent/10 sm:p-10 lg:p-12"
    >
      <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Image
            src="/brand/soleach-live-partner.svg"
            alt="Soleach LIVE — TikTok LIVE Partner"
            width={600}
            height={180}
            className="hidden h-auto w-full max-w-[340px] dark:block"
          />
          <Image
            src="/brand/soleach-live-partner-dark.svg"
            alt="Soleach LIVE — TikTok LIVE Partner"
            width={600}
            height={180}
            className="h-auto w-full max-w-[340px] dark:hidden"
          />
          <p className="mt-5 text-base font-medium text-accent">
            {live.partnerLabel}
          </p>
          {showDetails && (
            <Link
              href={`/${locale}/${dict.routes.services}#tiktok-live`}
              className="mt-5 inline-flex text-sm font-semibold text-foreground underline decoration-accent/40 underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {live.details} <span className="ml-1" aria-hidden>↗</span>
            </Link>
          )}
        </div>
        <div>
          <h2 id="tiktok-live-heading" className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {live.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {live.summary}
          </p>
          <div className="mt-6 rounded-2xl border border-accent/20 bg-background/60 p-5">
            <p className="text-base font-semibold text-foreground">{live.feeTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{live.feeBody}</p>
          </div>
        </div>
      </div>
      <section aria-labelledby="live-contact-heading" className="mt-10 border-t border-border pt-9">
        <h3 id="live-contact-heading" className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
          {live.contactTitle}
        </h3>
        <div className="mx-auto mt-7 grid max-w-4xl items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_6rem_minmax(0,1fr)]">
          <article aria-labelledby="live-email-heading" className="flex flex-col items-center rounded-2xl border border-foreground/20 bg-foreground p-6 text-center text-background shadow-lg shadow-background/10 sm:p-8">
            <h4 id="live-email-heading" className="text-xl font-semibold">{live.emailLabel}</h4>
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(live.emailSubject)}`}
              className="mt-5 inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full bg-background px-6 py-3 text-center text-sm font-bold text-foreground transition-colors hover:bg-background/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
            >
              {live.cta}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-background/80">{live.contactHint}</p>
          </article>
          <div className="flex w-full items-center justify-center gap-2 self-center px-2 py-1 text-xs font-semibold tracking-wider text-muted">
            <span aria-hidden className="h-px flex-1 bg-current opacity-50" />
            <span>{live.orLabel}</span>
            <span aria-hidden className="h-px flex-1 bg-current opacity-50" />
          </div>
          <article aria-labelledby="live-tiktok-heading" className="flex flex-col items-center rounded-2xl border border-foreground/20 bg-foreground p-6 text-center text-background shadow-lg shadow-background/10 sm:p-8">
            <h4 id="live-tiktok-heading" className="text-xl font-semibold">{live.tiktokLabel}</h4>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-center text-sm font-bold text-foreground transition-colors hover:bg-background/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
            >
              {live.tiktokCta} <span aria-hidden>↗</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-background/80">{live.tiktokHint}</p>
          </article>
        </div>
      </section>
      {expanded && service && (
        <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{live.audienceTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{live.audienceBody}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{live.supportTitle}</h3>
            <ul className="mt-4 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <ol className="mt-10 grid gap-7 border-t border-border pt-8 sm:grid-cols-3">
        {live.steps.map((step, i) => (
          <li key={step.title}>
            <p className="text-base font-semibold">
              <span className="mr-2.5 font-mono text-accent">0{i + 1}</span>
              {step.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
