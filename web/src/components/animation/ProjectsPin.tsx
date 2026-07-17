"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSite } from "@/components/LanguageProvider";
import type { SiteContent } from "@/content/site";
import { Stagger, StaggerItem } from "@/components/animation/Reveal";

gsap.registerPlugin(ScrollTrigger);

type Project = SiteContent["projects"]["items"][number];

function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={`group flex h-full min-h-[360px] flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[0_18px_50px_-32px_oklch(0.3_0.04_150/0.35)] ${className}`}
    >
      <div className="relative h-44 shrink-0">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:1024px) 100vw, 28vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-deep)]">
          {project.tag}
        </span>
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-[var(--color-ink)]">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
          {project.summary}
        </p>
        <ul className="mt-5 space-y-1.5 border-t border-[var(--color-border)] pt-4 text-sm text-[var(--color-ink-soft)]">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/**
 * Phase 3: ONE ScrollTrigger pin only.
 * Desktop: horizontal scrub through project cards.
 * Mobile / reduced-motion: static staggered grid (no pin).
 */
export function ProjectsPin() {
  const site = useSite();
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce || !desktop) return;
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 64);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      ScrollTrigger.refresh();
    }, wrap);

    return () => {
      ctx.revert();
    };
  }, [reduce, desktop]);

  // Mobile / reduced-motion fallback — no GSAP pin
  if (reduce || !desktop) {
    return (
      <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
        {site.projects.items.map((project) => (
          <StaggerItem
            key={project.title}
            className={project.span === "wide" ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    );
  }

  return (
    <div ref={wrapRef} className="relative mt-10">
      <div className="flex h-[100dvh] items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-6 px-8 will-change-transform"
        >
          {site.projects.items.map((project) => (
            <div
              key={project.title}
              className="w-[min(78vw,420px)] shrink-0"
            >
              <ProjectCard project={project} className="h-full" />
            </div>
          ))}
          <div className="flex w-[min(40vw,280px)] shrink-0 items-center pr-8">
            <p className="max-w-[16rem] text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {site.contact.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
