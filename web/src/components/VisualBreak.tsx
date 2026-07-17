"use client";

import Image from "next/image";
import { useSite } from "@/components/LanguageProvider";
import { Reveal } from "@/components/animation/Reveal";

/** Mood gallery — content studio imagery matched to portfolio themes */
export function VisualBreak() {
  const site = useSite();
  const tiles = [
    {
      src: site.moods.desk,
      className: "sm:col-span-2 sm:row-span-2",
      label: "Content desk",
    },
    {
      src: site.moods.linen,
      className: "",
      label: "Brand mood",
    },
    {
      src: site.moods.leaves,
      className: "",
      label: "Calm service",
    },
    {
      src: site.moods.bokeh,
      className: "sm:col-span-2",
      label: "Studio light",
    },
  ];

  return (
    <section
      className="border-t border-[var(--color-border)] bg-[var(--color-paper-2)] py-16 sm:py-24"
      aria-label="Mood visual"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Visual
          </p>
          <p className="mb-8 max-w-md font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            Suasana kerja & konten
          </p>
        </Reveal>
        <div className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4 sm:gap-4">
          {tiles.map((t) => (
            <div
              key={t.src + t.className}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-strong)] ${t.className}`}
            >
              <Image
                src={t.src}
                alt={t.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width:640px) 50vw, 25vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(20_24_22/0.55)] via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold tracking-wide text-[var(--color-on-accent)]">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
