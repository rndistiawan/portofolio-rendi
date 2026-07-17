"use client";

import { useSite } from "@/components/LanguageProvider";

export function MoodMarquee() {
  const site = useSite();
  const items = [...site.marquee, ...site.marquee];

  return (
    <div
      className="overflow-hidden border-y-2 border-[var(--color-forest)] bg-[var(--color-forest)] py-3.5"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-8 pr-8">
        {items.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="whitespace-nowrap text-sm font-semibold tracking-wide text-[var(--color-on-forest)]"
          >
            {label}
            <span className="ml-8 font-bold text-[var(--color-accent)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
