"use client";

import Image from "next/image";
import { useSite } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

export function Experience() {
  const site = useSite();

  return (
    <section
      id="pengalaman"
      className="relative border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]">
        <Image
          src={site.moods.bokeh}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2
            id="experience-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            {site.experience.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
            {site.experience.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 space-y-4">
          {site.experience.items.map((job) => (
            <StaggerItem key={job.company + job.period}>
              <article className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)]/95 p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
                      {job.company}
                    </h3>
                    <p className="text-sm font-medium text-[var(--color-accent-deep)]">
                      {job.role}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-[var(--color-ink-muted)]">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
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
