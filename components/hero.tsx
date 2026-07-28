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

export default function Hero() {
  return (
    <section
      id="top"
      className="mesh grid-bg relative flex min-h-screen items-center overflow-hidden px-5 pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg)]" />

      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <div />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="grid grid-cols-2 grid-rows-[repeat(3,auto)_auto] gap-3">
            <div className="glass card relative col-start-1 row-span-3 row-start-1 overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Yosef Mekonnen"
                fill
                priority
                sizes="(min-width: 1024px) 12rem, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/70 to-transparent px-4 pb-8 pt-4">
                <p className="font-semibold text-white">Yosef Mekonnen</p>
              </div>
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

            <a
              href="/resume.pdf"
              download
              className="glass focus-ring col-span-2 row-start-4 flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold"
            >
              <Download size={17} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
