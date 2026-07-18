"use client";

import { useSite } from "@/components/LanguageProvider";

export function MoodMarquee() {
  const site = useSite();
  const items = [...site.marquee, ...site.marquee];

  return (
    <div
      className="group/marquee relative overflow-hidden border-y-2 border-[var(--color-forest)] bg-[var(--color-forest)] py-3.5"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-[var(--color-forest)] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-[var(--color-forest)] to-transparent sm:w-16" />
      <div className="marquee-track flex w-max gap-8 pr-8 transition-[animation-play-state] group-hover/marquee:[animation-play-state:paused]">
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
