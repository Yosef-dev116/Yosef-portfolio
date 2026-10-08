"use client";

import Image from "next/image";
import { ArrowUpRight, Trophy } from "lucide-react";

import { achievements, projects, skills } from "@/data/site";
import { Pill, Reveal, SectionTitle } from "./ui";

function LangIcon({ name }: { name: string }) {
  const className = "h-8 w-8 rounded-lg";

  switch (name) {
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#1a1a1a" />
          <path
            d="M12 4c-3 0-2.8 1.3-2.8 1.3l.003 1.36h2.87v.4H8.1S6.3 7.3 6.3 10s1.6 2.9 1.6 2.9h.96v-1.5s-.05-1.6 1.56-1.6h2.7s1.46.02 1.46-1.4V5.5S14.5 4 12 4Z"
            fill="#3776AB"
          />
          <path
            d="M12 20c3 0 2.8-1.3 2.8-1.3l-.003-1.36h-2.87v-.4h3.98s1.8-.2 1.8-2.9-1.6-2.9-1.6-2.9h-.96v1.5s.05 1.6-1.56 1.6h-2.7s-1.46-.02-1.46 1.4v2.9S9.5 20 12 20Z"
            fill="#FFD43B"
          />
        </svg>
      );
    case "Java":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#e11d1d" />
          <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">
            JV
          </text>
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#f0db4f" />
          <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#111" textAnchor="middle">
            JS
          </text>
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#3178c6" />
          <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">
            TS
          </text>
        </svg>
      );
    case "SQL":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#f29111" />
          <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="700" fill="#fff" textAnchor="middle">
            SQL
          </text>
        </svg>
      );
    default:
      return null;
  }
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow mb-3">About</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-.04em]">
              I like solving problems that teach me something.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--muted)]">
              <p>
                Most of what I&apos;ve learned came from building projects,
                getting stuck, and figuring out why something wasn&apos;t
                working.
              </p>
              <p>
                Every mistake has helped me become a better developer, and
                that&apos;s still how I learn today.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="md:pt-2">
              <h3 className="text-sm font-semibold">What matters to me</h3>
              <ul className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
                <li>Building projects instead of just following tutorials</li>
                <li>Writing code I can understand six months later</li>
                <li>Improving a little with every project</li>
              </ul>

              <h3 className="mt-12 text-sm font-semibold">
                Outside programming
              </h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                I&apos;ve practiced Taekwondo for years, and it&apos;s taught
                me discipline, patience, and the importance of showing up
                consistently.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section id="skills" className="section bg-white/[0.02]">
      <div className="container">
        <SectionTitle
          eyebrow="Tools I Use"
          title="The tools behind my projects."
          copy="I choose tools based on the problem I'm trying to solve."
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillItems]) => (
            <Reveal key={category}>
              <h3 className="mb-4 font-semibold">{category}</h3>

              {category === "Languages" ? (
                <div className="flex flex-wrap gap-3">
                  {skillItems.map((skill) => (
                    <div key={skill} className="flex flex-col items-center gap-1.5">
                      <LangIcon name={skill} />
                      <span className="text-xs text-[var(--muted)]">{skill}</span>
                    </div>
                  ))}
                </div>
              ) : category === "Learning" ? (
                <div className="leading-7 text-[var(--muted)]">
                  {skillItems.map((skill) => (
                    <p key={skill}>{skill}</p>
                  ))}
                </div>
              ) : (
                <p className="leading-7 text-[var(--muted)]">
                  {skillItems.join(" · ")}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="Projects I've built."
          copy="These are projects I've designed, built, and deployed while learning software engineering. Each one helped me solve a different problem and taught me something new."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Reveal
              key={project.slug}
              className="glass card flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 640px) 32rem, 90vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-3 md:px-7 md:pb-7 md:pt-3">
                <div className="flex items-center justify-end gap-4">
                  <span className="text-xs text-[var(--muted)]">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {project.whyBuilt}
                </p>

                <h4 className="mt-5 text-sm font-semibold">
                  Tech highlights
                </h4>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--muted)]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <Pill key={technology}>{technology}</Pill>
                  ))}
                </div>

                <div className="mt-6 flex gap-5 text-sm font-semibold">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo for ${project.title}`}
                      className="inline-flex items-center gap-1 text-violet-400 transition hover:text-violet-300"
                    >
                      Live Demo
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open GitHub repository for ${project.title}`}
                      className="inline-flex items-center gap-1 transition hover:text-violet-300"
                    >
                      Source Code
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>

                {project.liveUrl && project.liveNote && (
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    {project.liveNote}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Extras() {
  return (
    <section id="achievements" className="section relative overflow-hidden bg-white/[0.02]">
      <Trophy
        className="pointer-events-none absolute -right-16 -top-16 text-white/[0.04]"
        size={340}
        aria-hidden="true"
        strokeWidth={1}
      />
      <div className="container relative">
        <SectionTitle
          eyebrow="Beyond Software"
          title="Beyond software."
        />

        <p className="mb-10 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          The experiences outside programming that have shaped how I learn,
          solve problems, and approach challenges.
        </p>

        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {achievements.map((achievement) => (
            <Reveal key={`${achievement.title}-${achievement.issuer}`}>
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow">{achievement.category}</p>
                <span className="text-xs text-[var(--muted)]">
                  {achievement.year}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-snug">
                {achievement.title}
              </h3>

              <p className="mt-1 text-sm text-[var(--muted)]">
                {achievement.issuer}
              </p>

              <p className="mt-3 leading-7 text-[var(--muted)]">
                {achievement.description}
              </p>

              {achievement.href && (
                <a
                  href={achievement.href}
                  target={achievement.openInNewTab ? "_blank" : undefined}
                  rel={
                    achievement.openInNewTab ? "noopener noreferrer" : undefined
                  }
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium transition hover:text-violet-400"
                >
                  {achievement.linkLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingTop: "8.5rem" }}>
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something together."
          copy="Whether it's a Summer 2027 co-op opportunity, a project idea, or just a conversation, I'd love to hear from you."
          className="mb-[38px] max-w-3xl"
        />

        <form action="/api/contact" method="post" className="max-w-[720px] space-y-6">
          <label className="block text-sm">
            Name
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-2 outline-none transition focus:border-violet-400"
            />
          </label>

          <label className="block text-sm">
            Email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-2 outline-none transition focus:border-violet-400"
            />
          </label>

          <label className="block text-sm">
            Message
            <textarea
              required
              name="message"
              rows={4}
              className="mt-2 w-full resize-y border-b border-[var(--line)] bg-transparent py-2 outline-none transition focus:border-violet-400"
            />
          </label>

          <button
            type="submit"
            className="focus-ring rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 max-w-[720px] flex flex-wrap items-center gap-x-9 gap-y-4 border-t border-[var(--line)] pt-8">
          <a
            href="mailto:yoseffmek116@gmail.com"
            className="focus-ring text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/yosefmekonnen"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Yosef-dev116"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
