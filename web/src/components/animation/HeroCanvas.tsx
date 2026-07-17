"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import {
  createSoftParticles,
  type SoftParticlesHandle,
} from "@/lib/three/createSoftParticles";

/**
 * Ambient soft particle field behind hero.
 * pointer-events none; pauses on reduced-motion / offscreen / hidden tab.
 */
export function HeroCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<SoftParticlesHandle | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const host = hostRef.current;
    if (!host) return;

    // Skip if WebGL unavailable
    try {
      const test = document.createElement("canvas");
      const gl =
        test.getContext("webgl") || test.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    let handle: SoftParticlesHandle | null = null;
    let observer: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;

    const onMove = (e: PointerEvent) => {
      if (!handleRef.current || !host) return;
      const rect = host.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      handleRef.current.setPointer(
        Math.max(-1, Math.min(1, nx)),
        Math.max(-1, Math.min(1, ny)),
      );
    };

    const isDesktop =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(min-width: 768px)").matches;

    handle = createSoftParticles(host, {
      particleCount: isDesktop ? 120 : 42,
      color: "#5a8a6e",
      colorSecondary: "#a8c9b4",
    });
    handleRef.current = handle;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!handleRef.current) return;
        if (entry.isIntersecting) handleRef.current.resume();
        else handleRef.current.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(host);

    ro = new ResizeObserver(() => handleRef.current?.resize());
    ro.observe(host);

    if (isDesktop) {
      window.addEventListener("pointermove", onMove, { passive: true });
    }

    return () => {
      if (isDesktop) window.removeEventListener("pointermove", onMove);
      observer?.disconnect();
      ro?.disconnect();
      handle?.dispose();
      handleRef.current = null;
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      ref={hostRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-50"
      aria-hidden
    />
  );
}
