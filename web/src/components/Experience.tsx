"use client";

import Image from "next/image";
import { useSite } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger, StaggerItem } from "@/components/animation/Reveal";

export function Experience() {
  const site = useSite();

  return (
    <section
      id="pengalaman"
      className="relative overflow-hidden border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={site.moods.bokeh}
          alt=""
          fill
          className="object-cover opacity-[0.18] dark:opacity-[0.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-paper)_0%,color-mix(in_srgb,var(--color-paper)_88%,transparent)_40%,var(--color-paper)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          id="experience-heading"
          eyebrow="Experience"
          title={site.experience.title}
          intro={site.experience.intro}
          variant="plain"
        />

        <Stagger className="relative mt-14 space-y-0 pl-0 sm:pl-8">
          <div
            className="absolute bottom-4 left-[0.7rem] top-4 hidden w-px bg-[var(--color-border-strong)] sm:block"
            aria-hidden
          />
          {site.experience.items.map((job, i) => (
            <StaggerItem key={job.company + job.period}>
              <article className="relative grid gap-4 border-b border-[var(--color-border)] py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10 sm:pl-10 last:border-b-0">
                <div
                  className="absolute left-0 top-10 hidden h-3.5 w-3.5 -translate-x-[0.35rem] rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-paper)] sm:block"
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")} · {job.period}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-ink)]">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-accent-deep)]">
                    {job.role}
                  </p>
                </div>
                <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--color-ink-soft)] sm:pt-1">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
