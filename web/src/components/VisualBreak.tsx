"use client";

import Image from "next/image";
import { useSite } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

function spanClass(span?: "hero" | "wide" | "tall" | "square"): string {
  switch (span) {
    case "hero":
      return "sm:col-span-2 sm:row-span-2";
    case "wide":
      return "sm:col-span-2";
    case "tall":
      return "sm:row-span-2";
    default:
      return "";
  }
}

/** Asymmetric mood gallery - content-studio imagery for digital marketing portfolio */
export function VisualBreak() {
  const site = useSite();
  const { visualBreak } = site;

  return (
    <section
      className="border-t border-[var(--color-border)] bg-[var(--color-paper-2)] py-16 sm:py-24"
      aria-label={visualBreak.title}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {visualBreak.eyebrow}
          </p>
          <p className="mb-10 max-w-md font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            {visualBreak.title}
          </p>
        </Reveal>

        <Stagger className="grid auto-rows-[132px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4 sm:gap-4">
          {visualBreak.tiles.map((t) => (
            <StaggerItem
              key={`${t.key}-${t.label}`}
              className={`image-tile group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-strong)] shadow-[var(--shadow-card)] ${spanClass(t.span)}`}
            >
              <Image
                src={site.moods[t.key]}
                alt={t.label}
                fill
                className="image-tile__media object-cover"
                sizes="(max-width:640px) 50vw, 25vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(18_22_20/0.72)] via-[rgb(18_22_20/0.12)] to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="caption-chip absolute bottom-3 left-3 rounded-md border border-white/10 bg-[var(--color-ink)]/75 px-2.5 py-1 text-xs font-semibold tracking-wide text-[var(--color-paper)]">
                {t.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
