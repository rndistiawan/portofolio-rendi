"use client";

import { useSite } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger, StaggerItem } from "@/components/animation/Reveal";

export function Process() {
  const site = useSite();

  return (
    <section
      id="proses"
      className="relative border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--color-ink) 12%, transparent) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          id="process-heading"
          eyebrow="Process"
          title={site.process.title}
          intro={site.process.intro}
          index="01"
          variant="index"
        />

        <Stagger className="relative mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.steps.map((s, i) => (
            <StaggerItem key={s.step} className="relative">
              {i < site.process.steps.length - 1 ? (
                <div
                  className="pointer-events-none absolute right-0 top-10 z-10 hidden h-px w-full translate-x-1/2 bg-[var(--color-border-strong)] lg:block"
                  aria-hidden
                />
              ) : null}
              <article className="relative h-full border border-[var(--color-border-strong)] bg-[var(--color-paper)] p-6 sm:border-r-0 sm:last:border-r lg:border-y lg:border-l-0 lg:first:border-l lg:first:rounded-l-[var(--radius-card)] lg:last:rounded-r-[var(--radius-card)] rounded-[var(--radius-card)] lg:rounded-none">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-forest)] font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-on-accent)]">
                  {s.step}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--color-ink)]">
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
