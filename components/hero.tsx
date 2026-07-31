"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center px-5 pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="container">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-start sm:gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.p variants={item} className="eyebrow">
              Yosef Mekonnen
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.625rem] lg:text-[3.25rem]"
            >
              I build backend systems that power practical AI products.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]"
            >
              Computer Science major at UPEI,
              <br />
              with a minor in Mathematics.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <a
                href="/resume.pdf"
                download
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
              >
                <Download size={15} aria-hidden="true" />
                Resume
              </a>

              <a
                href="#projects"
                className="focus-ring inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
              >
                View Projects
                <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-shrink-0 flex-col items-start gap-6 sm:mt-56"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl sm:h-40 sm:w-40">
              <Image
                src="/profile.jpg"
                alt="Yosef Mekonnen"
                fill
                priority
                sizes="(min-width: 640px) 160px, 112px"
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Currently
              </p>

              <p className="flex items-center gap-2 text-sm text-[var(--text)]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"
                />
                Building BuildLens AI
              </p>

              <p className="text-sm text-[var(--muted)]">
                Fall 2026 Co-op
              </p>

              <p className="text-sm text-[var(--muted)]">
                Charlottetown, PEI
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
