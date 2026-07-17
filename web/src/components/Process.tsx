"use client";

import { useSite } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

export function Process() {
  const site = useSite();

  return (
    <section
      id="proses"
      className="border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2
            id="process-heading"
            className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            {site.process.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
            {site.process.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.steps.map((s) => (
            <StaggerItem key={s.step}>
              <article className="hc-card h-full rounded-[var(--radius-card)] border border-[var(--color-border-strong)] bg-[var(--color-paper-2)] p-6 transition-transform duration-300 hover:-translate-y-0.5">
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--color-accent)]">
                  {s.step}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {s.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
