"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";

const HeroCanvas = dynamic(
  () =>
    import("@/components/animation/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false },
);

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
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
      className="relative min-h-[100dvh] overflow-x-clip pt-20 pb-12 sm:pt-24 sm:pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Mood photo wash under particles */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src={site.moods.wash}
          alt=""
          fill
          priority
          className="object-cover opacity-[0.18] dark:opacity-[0.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-paper)_0%,color-mix(in_oklab,var(--color-paper)_75%,transparent)_45%,var(--color-paper)_100%)]" />
      </div>

      {/* Three.js soft particles */}
      <HeroCanvas />

      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="min-w-0 pb-2">
          <motion.p
            className="mb-3 text-sm font-medium text-[var(--color-accent-deep)]"
            {...item(0.05)}
          >
            {site.hero.availability}
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)]"
            {...item(0.12)}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="mt-2 text-lg font-medium text-[var(--color-accent-deep)] sm:text-xl"
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
            className="mt-7 flex flex-wrap items-center gap-3"
            {...item(0.32)}
          >
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-on-accent)] transition-[transform,background] hover:bg-[var(--color-accent-hover)] active:translate-y-px"
            >
              {site.hero.ctaPrimary}
              <ArrowUpRight size={16} weight="bold" />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-paper)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-2)]"
            >
              {site.hero.ctaSecondary}
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
          <div className="grid grid-cols-[1fr_0.72fr] gap-3 sm:gap-4">
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper-2)] shadow-[0_24px_60px_-32px_oklch(0.3_0.04_150/0.4)] transition-transform duration-300 hover:-translate-y-0.5">
              <Image
                src={site.photo}
                alt={`Foto ${site.name}`}
                width={640}
                height={800}
                priority
                className="aspect-[4/5] h-auto w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)]">
                <Image
                  src={site.moods.leaves}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)]">
                <Image
                  src={site.moods.desk}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
