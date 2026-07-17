import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/animation/Reveal";

export function About() {
  return (
    <section
      id="tentang"
      className="border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2
            id="about-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            {site.about.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)]">
                <Image
                  src={site.moods.bokeh}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)]">
                <Image
                  src={site.moods.linen}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-forest)]">
                <Image
                  src={site.moods.leaves}
                  alt=""
                  fill
                  className="object-cover opacity-80"
                  sizes="200px"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:pl-6" delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-[1.05rem]">
              {site.about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <p className="pt-2 text-sm text-[var(--color-ink-muted)]">
                {site.education.line}
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {site.about.values.map((v) => (
                <li
                  key={v.title}
                  className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper-2)] p-4"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
