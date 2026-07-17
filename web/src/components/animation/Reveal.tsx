"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  delayChildren = 0.06,
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
