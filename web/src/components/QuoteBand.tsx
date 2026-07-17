"use client";

import { useSite } from "@/components/LanguageProvider";
import { Reveal } from "@/components/animation/Reveal";

export function QuoteBand() {
  const site = useSite();

  return (
    <section className="relative overflow-hidden border-t border-[var(--color-forest)] bg-[var(--color-forest)] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_30%_20%,var(--color-accent)_0%,transparent_55%)]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-8">
        <Reveal>
          <blockquote>
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold leading-relaxed tracking-tight text-[var(--color-on-forest)] sm:text-2xl md:text-[1.75rem]">
              “{site.quoteBand.text}”
            </p>
            <footer className="mt-8 text-sm font-bold tracking-wide text-[var(--color-accent)]">
              — {site.quoteBand.by}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
