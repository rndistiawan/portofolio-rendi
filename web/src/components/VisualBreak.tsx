"use client";

import Image from "next/image";
import { useSite } from "@/components/LanguageProvider";
import { Reveal } from "@/components/animation/Reveal";

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

/** Asymmetric mood gallery — content-studio imagery for digital marketing portfolio */
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
          <p className="mb-8 max-w-md font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            {visualBreak.title}
          </p>
        </Reveal>
        <div className="grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-4 sm:gap-4">
          {visualBreak.tiles.map((t) => (
            <div
              key={`${t.key}-${t.label}`}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-strong)] ${spanClass(t.span)}`}
            >
              <Image
                src={site.moods[t.key]}
                alt={t.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width:640px) 50vw, 25vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(20_24_22/0.6)] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 rounded-md bg-[var(--color-ink)]/80 px-2 py-1 text-xs font-semibold tracking-wide text-[var(--color-paper)]">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
