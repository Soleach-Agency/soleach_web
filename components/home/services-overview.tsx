import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export function ServicesOverview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const { servicesIntro } = dict.home;

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          subtitle={servicesIntro.subtitle}
        />

        <div className="mt-14 space-y-14">
          {dict.serviceGroups.map((group) => {
            const services = dict.services.filter((s) => s.group === group.key);

            return (
              <section key={group.key} aria-labelledby={`${group.key}-title`}>
                <div className="mb-7 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {group.eyebrow}
                    </p>
                    <h3
                      id={`${group.key}-title`}
                      className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl"
                    >
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {group.summary}
                    </p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-semibold text-accent">
                    {group.audience}
                  </span>
                </div>

                <Stagger
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  stagger={0.1}
                >
                  {services.map((s) => (
                    <StaggerItem key={s.key} className="h-full">
                      <TiltCard className="h-full">
                        <Link
                          href={`${base}/${dict.routes.services}#${s.key}`}
                          className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-surface p-8"
                        >
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                            <ServiceIcon icon={s.icon} className="h-6 w-6" />
                          </span>
                          <h4 className="mt-6 text-xl font-semibold text-foreground">
                            {s.title}
                          </h4>
                          <p className="mt-2 text-sm font-medium text-accent">
                            {s.tagline}
                          </p>
                          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                            {s.summary}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                            {dict.nav.services}
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                        </Link>
                      </TiltCard>
                    </StaggerItem>
                  ))}
                </Stagger>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
