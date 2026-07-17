"use client";

import { useSite } from "@/components/LanguageProvider";

export function MoodMarquee() {
  const site = useSite();
  const items = [...site.marquee, ...site.marquee];

  return (
    <div
      className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-paper-2)] py-3"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-8 pr-8">
        {items.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="whitespace-nowrap text-sm font-medium tracking-wide text-[var(--color-ink-soft)]"
          >
            {label}
            <span className="ml-8 text-[var(--color-accent)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
