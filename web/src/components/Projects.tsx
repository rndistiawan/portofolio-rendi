import { site } from "@/content/site";
import { Reveal } from "@/components/animation/Reveal";
import { ProjectsPin } from "@/components/animation/ProjectsPin";

export function Projects() {
  return (
    <section
      id="proyek"
      className="border-t border-[var(--color-border)] bg-[var(--color-paper)]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <h2
            id="projects-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            {site.projects.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
            {site.projects.intro}
          </p>
          <p className="mt-2 hidden text-sm text-[var(--color-ink-muted)] lg:block">
            Di layar lebar: geser horizontal dengan scroll.
          </p>
        </Reveal>
      </div>

      {/* GSAP: max 1 pin section on the whole site */}
      <ProjectsPin />

      <div className="pb-16 sm:pb-20" aria-hidden />
    </section>
  );
}
