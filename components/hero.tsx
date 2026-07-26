"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="mesh grid-bg relative flex min-h-screen items-center overflow-hidden px-5 pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg)]" />

      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--muted)]"
          >
            <Sparkles size={15} className="text-violet-400" />
            Open to software engineering and technology co-op opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl"
          >
            Building intelligent software that turns{" "}
            <span className="text-gradient">
              real problems into useful products.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]"
          >
            I&apos;m Yosef Mekonnen, a Computer Science Co-op student at the
            University of Prince Edward Island with a minor in Mathematics.
            I&apos;m building my skills across software engineering, full-stack
            development, backend systems, and artificial intelligence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.21 }}
            className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]"
          >
            I enjoy turning complex ideas into clear, dependable software
            through strong technical foundations, thoughtful product decisions,
            and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="focus-ring rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
            >
              View projects
              <ArrowRight className="ml-2 inline" size={17} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="glass focus-ring rounded-xl px-5 py-3 font-semibold"
            >
              <Download className="mr-2 inline" size={17} />
              Resume
            </a>

            <a
              href="#contact"
              className="focus-ring rounded-xl border border-[var(--line)] px-5 py-3 font-semibold"
            >
              Contact me
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[var(--muted)]">
            <MapPin size={15} />
            Charlottetown, PE, Canada
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="glass relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2.2rem] p-3"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative h-full overflow-hidden rounded-[1.6rem]">
            <Image
              src="/profile.jpg"
              alt="Yosef Mekonnen"
              fill
              priority
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6 text-center">
              <p className="font-medium text-white">Yosef Mekonnen</p>

              <p className="mt-1 text-sm text-white/80">
                Computer Science Co-op Student
              </p>

              <p className="mt-1 text-sm text-white/80">
                Software Engineer · Full-Stack Developer · AI Builder
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
