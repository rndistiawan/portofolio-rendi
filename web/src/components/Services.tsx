"use client";

import { useSite } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

function spanClass(index: number, total: number): string {
  if (index === 0) return "sm:col-span-2 lg:col-span-7";
  if (index === 1) return "lg:col-span-5";
  if (total === 5 && index >= 2) return "lg:col-span-4";
  return "lg:col-span-6";
}

export function Services() {
  const site = useSite();
  const total = site.services.items.length;

  return (
    <section
      id="layanan"
      className="border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2
            id="services-heading"
            className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            {site.services.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
            {site.services.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {site.services.items.map((item, i) => {
            const wide = i === 0;
            return (
              <StaggerItem key={item.title} className={spanClass(i, total)}>
                <article
                  className={`flex h-full flex-col justify-between rounded-[var(--radius-card)] border p-6 sm:p-8 ${
                    wide
                      ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-[var(--color-on-accent)]"
                      : "hc-card border-[var(--color-border-strong)] bg-[var(--color-paper-2)]"
                  }`}
                >
                  <div>
                    <p
                      className={`text-xs font-semibold tracking-wide ${
                        wide
                          ? "text-[var(--color-on-accent)]/70"
                          : "text-[var(--color-accent-deep)]"
                      }`}
                    >
                      {item.hint}
                    </p>
                    <h3
                      className={`mt-3 font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl ${
                        wide
                          ? "text-[var(--color-on-accent)]"
                          : "text-[var(--color-ink)]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-md text-sm leading-relaxed sm:text-base ${
                        wide
                          ? "text-[var(--color-on-accent)]/85"
                          : "text-[var(--color-ink-soft)]"
                      }`}
                    >
                      {item.body}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
