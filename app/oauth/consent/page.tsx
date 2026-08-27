import { Suspense } from "react";
import type { Metadata } from "next";
import { ConsentClient } from "@/components/oauth/consent-client";

export const metadata: Metadata = {
  title: "Soleach MCP Yetkilendirme",
  robots: { index: false, follow: false },
};

export default function OAuthConsentPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-background" />}>
      <ConsentClient />
    </Suspense>
  );
}
