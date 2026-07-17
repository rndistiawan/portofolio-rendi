"use client";

import { useSite } from "@/components/LanguageProvider";
import { ProjectsPin } from "@/components/animation/ProjectsPin";
import { Reveal } from "@/components/animation/Reveal";

export function Projects() {
  const site = useSite();

  return (
    <section
      id="proyek"
      className="border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2
            id="projects-heading"
            className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            {site.projects.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
            {site.projects.intro}
          </p>
        </Reveal>
      </div>
      <ProjectsPin />
    </section>
  );
}
