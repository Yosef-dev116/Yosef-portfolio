"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";

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

function monogram(text: string, bg: string, fg = "#fff") {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="1" y="1" width="22" height="22" rx="6" fill={bg} />
      <text
        x="12"
        y="16.5"
        fontFamily="Arial, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill={fg}
        textAnchor="middle"
      >
        {text}
      </text>
    </svg>
  );
}

const floatingIcons = [
  {
    id: "python",
    top: "4%",
    left: "16%",
    size: 46,
    duration: 5,
    delay: 0,
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
    id: "react",
    top: "32%",
    left: "3%",
    size: 42,
    duration: 6,
    delay: 0.4,
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
    id: "java",
    top: "14%",
    left: "56%",
    size: 40,
    duration: 6.5,
    delay: 0.2,
    svg: monogram("JV", "#e11d1d"),
  },
  {
    id: "javascript",
    top: "48%",
    left: "64%",
    size: 40,
    duration: 5,
    delay: 0.6,
    svg: monogram("JS", "#f0db4f", "#111"),
  },
  {
    id: "typescript",
    top: "58%",
    left: "22%",
    size: 40,
    duration: 5.5,
    delay: 0.8,
    svg: monogram("TS", "#3178c6"),
  },
  {
    id: "sql",
    top: "76%",
    left: "48%",
    size: 40,
    duration: 6,
    delay: 1,
    svg: monogram("SQL", "#f29111"),
  },
];

const floatingChips = [
  { id: "tags", top: "0%", left: "78%", duration: 5, delay: 0.3, text: "</>" },
  { id: "braces", top: "40%", left: "86%", duration: 6, delay: 0.7, text: "{ }" },
  { id: "num1", top: "68%", left: "80%", duration: 5.5, delay: 1.1, text: "01" },
  { id: "num2", top: "90%", left: "62%", duration: 5, delay: 0.5, text: "10" },
];

const pictureFloatingIcons = [
  {
    id: "fastapi",
    top: "-9%",
    left: "-16%",
    size: 42,
    duration: 5.5,
    delay: 0.2,
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#05998b" />
        <path d="M13 3 6 13h5l-1 8 8-11h-6z" fill="#fff" />
      </svg>
    ),
  },
  {
    id: "openai",
    top: "-11%",
    left: "58%",
    size: 40,
    duration: 6,
    delay: 0.6,
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
];

const pictureFloatingChips = [
  { id: "commit", top: "34%", left: "84%", duration: 5, delay: 0.4, text: "git commit" },
  { id: "percent", top: "80%", left: "-20%", duration: 6, delay: 0.9, text: "100%" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mesh grid-bg relative flex min-h-screen items-center overflow-hidden px-5 pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg)]" />

      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <div className="relative hidden min-h-[420px] lg:block">
          {floatingIcons.map((item) => (
            <motion.div
              key={item.id}
              style={{ top: item.top, left: item.left, width: item.size, height: item.size }}
              className="glass absolute grid place-items-center rounded-2xl"
              animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span style={{ width: item.size * 0.5, height: item.size * 0.5 }}>
                {item.svg}
              </span>
            </motion.div>
          ))}

          {floatingChips.map((item) => (
            <motion.div
              key={item.id}
              style={{ top: item.top, left: item.left }}
              className="glass absolute rounded-xl px-3 py-1.5 font-mono text-sm text-[var(--muted)]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-violet-500/15 blur-3xl" />

          {pictureFloatingIcons.map((item) => (
            <motion.div
              key={item.id}
              style={{ top: item.top, left: item.left, width: item.size, height: item.size }}
              className="glass absolute z-20 grid place-items-center rounded-2xl"
              animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span style={{ width: item.size * 0.5, height: item.size * 0.5 }}>
                {item.svg}
              </span>
            </motion.div>
          ))}

          {pictureFloatingChips.map((item) => (
            <motion.div
              key={item.id}
              style={{ top: item.top, left: item.left }}
              className="glass absolute z-20 rounded-xl px-3 py-1.5 font-mono text-sm text-[var(--muted)]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.text}
            </motion.div>
          ))}

          <div className="grid grid-cols-2 grid-rows-[auto_repeat(3,auto)_auto] gap-3">
            <p className="col-start-1 row-start-1 font-semibold">Yosef Mekonnen</p>

            <div className="pointer-events-none col-start-1 row-span-3 row-start-2 rotate-[-7deg] rounded-2xl bg-gradient-to-br from-violet-500/25 to-sky-400/10" />
            <div className="pointer-events-none col-start-1 row-span-3 row-start-2 rotate-[5deg] rounded-2xl bg-gradient-to-br from-sky-400/20 to-emerald-400/10" />

            <div className="glass card relative col-start-1 row-span-3 row-start-2 overflow-hidden">
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
              className="col-start-2 row-start-2 flex items-center gap-2 py-1"
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
              className="col-start-2 row-start-3 flex items-center gap-2 py-1"
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
              className="col-start-2 row-start-4 flex items-center gap-2 py-1"
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

            <a
              href="/resume.pdf"
              download
              className="glass focus-ring col-span-2 row-start-5 inline-flex w-fit items-center justify-self-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold"
            >
              <Download size={15} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
