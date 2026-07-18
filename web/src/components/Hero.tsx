"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useSite } from "@/components/LanguageProvider";

const HeroCanvas = dynamic(
  () =>
    import("@/components/animation/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false },
);

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const site = useSite();
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: easeOut },
        };

  return (
    <section
      id="atas"
      className="relative min-h-[100dvh] overflow-x-clip pt-20 pb-14 sm:pt-24 sm:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src={site.moods.wash}
          alt=""
          fill
          priority
          className="object-cover opacity-[0.16] contrast-125 dark:opacity-[0.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(165deg,var(--color-paper)_0%,color-mix(in_srgb,var(--color-paper)_68%,transparent)_48%,var(--color-paper)_100%)]" />
        <div className="absolute -right-16 top-16 h-80 w-80 rounded-full bg-[var(--color-accent)]/12 blur-3xl" />
        <div className="absolute bottom-8 left-0 h-64 w-64 rounded-full bg-[var(--color-forest)]/12 blur-3xl" />
      </div>

      <HeroCanvas />

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
        <div className="min-w-0 pb-2">
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-paper)]/90 px-3 py-1.5 shadow-[var(--shadow-card)] backdrop-blur-sm"
            {...item(0.05)}
          >
            <span
              className={`h-2 w-2 rounded-full bg-[var(--color-accent)] ${
                reduce ? "" : "animate-pulse"
              }`}
            />
            <span className="text-xs font-semibold tracking-wide text-[var(--color-ink-soft)]">
              {site.hero.availability}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-[clamp(2.55rem,5.8vw,4.4rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[var(--color-ink)]"
            {...item(0.12)}
          >
            <span className="block">{site.name.split(" ")[0]}</span>
            <span className="mt-1 block text-[var(--color-accent)]">
              {site.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 inline-block border-l-4 border-[var(--color-forest)] pl-3 text-lg font-semibold text-[var(--color-ink)] sm:text-xl"
            {...item(0.18)}
          >
            {site.role}
          </motion.p>

          <motion.p
            className="mt-5 max-w-[40ch] text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg"
            {...item(0.24)}
          >
            {site.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            {...item(0.32)}
          >
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-on-accent)] shadow-[0_12px_32px_-12px_rgb(184_79_28/0.5)] transition-[transform,background] hover:bg-[var(--color-accent-hover)] active:translate-y-px"
            >
              {site.hero.ctaPrimary}
              <ArrowUpRight size={16} weight="bold" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-paper)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
            >
              {site.hero.ctaSecondary}
            </a>
            <a
              href={site.cv}
              download="CV-Rendi-Setiawan.pdf"
              className="inline-flex min-h-11 items-center rounded-full bg-[var(--color-forest)] px-6 py-3 text-sm font-semibold text-[var(--color-on-forest)] transition-opacity hover:opacity-90"
            >
              {site.cta.cv}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 28, scale: 0.98 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { duration: 0.7, delay: 0.2, ease: easeOut },
              })}
        >
          {/* Soft glow behind collage */}
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_40%_30%,color-mix(in_srgb,var(--color-accent)_16%,transparent),transparent_62%)]"
            aria-hidden
          />

          {/* Asymmetric photo collage */}
          <div className="relative grid grid-cols-12 grid-rows-[auto_auto] gap-3">
            <div className="image-tile hc-photo photo-vignette relative col-span-7 row-span-2 overflow-hidden rounded-[1.5rem] border-2 border-[var(--color-ink)] bg-[var(--color-paper-2)]">
              <Image
                src={site.photo}
                alt={`${site.ui.photoAlt} ${site.name}`}
                width={640}
                height={800}
                priority
                className="image-tile__media aspect-[3/4] h-auto w-full object-cover object-[center_12%]"
              />
            </div>

            <div className="image-tile group relative col-span-5 aspect-square overflow-hidden rounded-[1.25rem] border border-[var(--color-border-strong)] shadow-[var(--shadow-card)]">
              <Image
                src={site.moods.reel}
                alt=""
                fill
                className="image-tile__media object-cover"
                sizes="220px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(18_22_20/0.35)] to-transparent" />
            </div>

            <div className="image-tile group relative col-span-5 min-h-[128px] overflow-hidden rounded-[1.25rem] border border-[var(--color-forest)] bg-[var(--color-forest)] shadow-[var(--shadow-card)]">
              <Image
                src={site.moods.brand}
                alt=""
                fill
                className="image-tile__media object-cover opacity-90"
                sizes="220px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-forest)] via-[var(--color-forest)]/70 to-transparent p-3 pt-8">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-on-forest)]">
                  Social · Content
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className={`absolute -bottom-4 -left-2 z-10 hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-paper)] px-4 py-3 shadow-[var(--shadow-card)] sm:block ${
              reduce ? "" : "hero-float"
            }`}
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, x: -12 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.55, duration: 0.5, ease: easeOut },
                })}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Focus
            </p>
            <p className="text-sm font-semibold text-[var(--color-ink)]">
              Digital Marketing
            </p>
          </motion.div>

          <motion.div
            className={`absolute -right-1 top-5 z-10 hidden flex-col gap-1.5 sm:flex lg:-right-3 ${
              reduce ? "" : "hero-float-delayed"
            }`}
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, x: 12 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.62, duration: 0.5, ease: easeOut },
                })}
          >
            {["Feed", "Reels", "Story"].map((label, i) => (
              <span
                key={label}
                className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wide shadow-[var(--shadow-card)] ${
                  i === 1
                    ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                    : i === 0
                      ? "bg-[var(--color-forest)] text-[var(--color-on-forest)]"
                      : "border border-[var(--color-border-strong)] bg-[var(--color-paper)] text-[var(--color-ink)]"
                }`}
              >
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
