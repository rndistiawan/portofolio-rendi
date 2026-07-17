"use client";

import { useSite } from "@/components/LanguageProvider";
import { Reveal } from "@/components/animation/Reveal";

export function QuoteBand() {
  const site = useSite();

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-forest)] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <Reveal>
          <blockquote>
            <p className="font-[family-name:var(--font-display)] text-xl font-medium leading-relaxed text-[var(--color-on-accent)] sm:text-2xl">
              “{site.quoteBand.text}”
            </p>
            <footer className="mt-6 text-sm font-medium text-[var(--color-on-accent)]/75">
              — {site.quoteBand.by}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
