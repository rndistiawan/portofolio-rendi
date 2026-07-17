"use client";

import { useSite } from "@/components/LanguageProvider";
import { Reveal } from "@/components/animation/Reveal";

export function Platforms() {
  const site = useSite();

  return (
    <section
      className="border-t border-[var(--color-border)] py-16 sm:py-20"
      aria-labelledby="platforms-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="platforms-heading"
                className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl"
              >
                {site.platforms.title}
              </h2>
              <p className="mt-2 max-w-md text-sm text-[var(--color-ink-soft)]">
                {site.platforms.intro}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 sm:justify-end">
              {site.platforms.items.map((p) => (
                <li
                  key={p.name}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-paper-2)] px-4 py-2 text-sm"
                >
                  <span className="font-medium text-[var(--color-ink)]">
                    {p.name}
                  </span>
                  <span className="text-[var(--color-ink-muted)]">
                    {" · "}
                    {p.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
