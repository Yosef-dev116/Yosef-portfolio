"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, Mail, MapPin, Sparkles } from "lucide-react";

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.371 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9H7.12v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function GitHubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

const stackLogos = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1.3" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24">
        <path
          d="M12 2c-3.6 0-3.4 1.6-3.4 1.6l.004 1.66h3.46v.5H7.2S5 5.5 5 9.1s1.9 3.5 1.9 3.5h1.15V10.9s-.06-1.9 1.87-1.9h3.24s1.76.03 1.76-1.7V4.4S15.2 2 12 2Z"
          fill="#3776AB"
        />
        <path
          d="M12 22c3.6 0 3.4-1.6 3.4-1.6l-.004-1.66h-3.46v-.5h4.86S19 17.5 19 13.9s-1.9-3.5-1.9-3.5h-1.15v2.7s.06 1.9-1.87 1.9H10.8s-1.76-.03-1.76 1.7v2.9S8.8 22 12 22Z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#05998b" />
        <path d="M13 3 6 13h5l-1 8 8-11h-6z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 24 24">
        <g fill="none" stroke="#e7e8ec" strokeWidth="1.8">
          <circle cx="12" cy="6.2" r="2.1" />
          <circle cx="16.8" cy="9.1" r="2.1" />
          <circle cx="16.8" cy="14.9" r="2.1" />
          <circle cx="12" cy="17.8" r="2.1" />
          <circle cx="7.2" cy="14.9" r="2.1" />
          <circle cx="7.2" cy="9.1" r="2.1" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24">
        <rect x="1" y="1" width="22" height="22" rx="4" fill="#3178c6" />
        <text
          x="12"
          y="16.5"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#fff"
          textAnchor="middle"
        >
          TS
        </text>
      </svg>
    ),
  },
];

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
            Building software that turns{" "}
            <span className="text-gradient">ideas into products.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]"
          >
            Yosef Mekonnen — Computer Science Co-op student at UPEI. Full-stack
            development, backend systems, and AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="glass focus-ring rounded-xl px-5 py-3 font-semibold"
            >
              <Download className="mr-2 inline" size={17} />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="grid grid-cols-2 grid-rows-[repeat(3,auto)_auto_auto] gap-3">
            <div className="glass card relative col-start-1 row-span-3 row-start-1 overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Yosef Mekonnen"
                fill
                priority
                sizes="(min-width: 1024px) 12rem, 45vw"
                className="object-cover"
              />
            </div>

            <a
              href="https://www.linkedin.com/in/yosefmekonnen"
              target="_blank"
              rel="noopener noreferrer"
              className="col-start-2 row-start-1 flex items-center gap-2 py-1"
            >
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-[#0a66c2]">
                <LinkedInIcon size={16} />
              </span>
              <span>
                <span className="block text-sm font-semibold">LinkedIn</span>
                <span className="block text-xs text-[var(--muted)]">
                  Connect with me
                </span>
              </span>
            </a>

            <a
              href="https://github.com/Yosef-dev116"
              target="_blank"
              rel="noopener noreferrer"
              className="col-start-2 row-start-2 flex items-center gap-2 py-1"
            >
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-[#14161b]">
                <GitHubIcon size={16} />
              </span>
              <span>
                <span className="block text-sm font-semibold">GitHub</span>
                <span className="block text-xs text-[var(--muted)]">
                  See my code
                </span>
              </span>
            </a>

            <a
              href="mailto:yoseffmek116@gmail.com"
              className="col-start-2 row-start-3 flex items-center gap-2 py-1"
            >
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-violet-500/80">
                <Mail size={16} className="text-white" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Email</span>
                <span className="block text-xs text-[var(--muted)]">
                  Get in touch
                </span>
              </span>
            </a>

            <div className="col-span-2 row-start-4">
              <p className="text-xs font-semibold text-[var(--muted)]">
                Core stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {stackLogos.map((tech) => (
                  <span
                    key={tech.name}
                    title={tech.name}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--line)] bg-white/5"
                  >
                    <span className="h-[19px] w-[19px]">{tech.svg}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-2 row-start-5 flex items-center gap-2 text-sm text-[var(--muted)]">
              <MapPin size={15} aria-hidden="true" />
              Charlottetown, PE, Canada
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
