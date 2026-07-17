"use client";

import { useSite } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

export function Platforms() {
  const site = useSite();

  return (
    <section
      className="border-t border-[var(--color-ink)] bg-[var(--color-ink)] py-16 sm:py-20"
      aria-labelledby="platforms-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Stack
              </p>
              <h2
                id="platforms-heading"
                className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-on-accent)] sm:text-3xl"
              >
                {site.platforms.title}
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[var(--color-on-accent)]/65">
              {site.platforms.intro}
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.platforms.items.map((p, i) => (
            <StaggerItem key={p.name}>
              <div
                className={`flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 transition-colors ${
                  i % 3 === 0
                    ? "border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10"
                    : i % 3 === 1
                      ? "border-[var(--color-on-accent)]/15 bg-[var(--color-on-accent)]/5"
                      : "border-[var(--color-on-accent)]/20 bg-transparent"
                }`}
              >
                <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-on-accent)]">
                  {p.name}
                </span>
                <span className="text-xs font-medium tracking-wide text-[var(--color-on-accent)]/55">
                  {p.note}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
