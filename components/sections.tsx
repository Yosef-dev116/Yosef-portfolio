"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, Trophy } from "lucide-react";

import { projects, skills } from "@/data/site";
import { Pill, Reveal, SectionTitle } from "./ui";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.371 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9H7.12v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

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
  const [filter, setFilter] = useState("All");

  const filters = ["All", "AI", "Data"];

  const shownProjects = projects.filter(
    (project) => filter === "All" || project.tag.includes(filter),
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Selected work"
            title="Projects designed as products."
          />

          <div
            className="mb-12 flex flex-wrap gap-2"
            aria-label="Project filters"
          >
            {filters.map((item) => {
              const isActive = item === filter;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={isActive}
                  className={`rounded-full border border-[var(--line)] px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-white text-black"
                      : "text-[var(--muted)] hover:border-white/30 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {shownProjects.map((project) => (
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

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow">{project.tag}</p>
                  <span className="text-xs text-[var(--muted)]">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 leading-7 text-[var(--muted)]">
                  {project.summary}
                </p>

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
                      Live
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
                      Code
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
  const achievements = [
    {
      title: "2nd Dan Black Belt",
      issuer: "World Taekwondo",
      year: "2020",
      category: "Martial Arts",
      credentialUrl: "/certificates/world-taekwondo-2nd-dan.jpg",
      credentialType: "certificate",
    },
    {
      title: "1st Poom Certificate",
      issuer: "World Taekwondo",
      year: "2018",
      category: "Martial Arts",
      credentialUrl: "/certificates/world-taekwondo-1st-poom.jpg",
      credentialType: "certificate",
    },
    {
      title: "Engineering Fair Certificate of Participation",
      issuer: "STEMpower",
      year: "2022",
      category: "Engineering",
      credentialUrl: "/certificates/stempower-engineering-fair.jpg",
      credentialType: "verification",
    },
    {
      title: "Active Problem Solving",
      issuer: "Wavemakers CTi3",
      year: "Credential",
      category: "Professional Skills",
      credentialUrl:
        "https://credentials.wavemakers.network/verifier?id=f114dfa6-5690-445f-b95e-c8cfa2fa3f9d&dbl=to",
      credentialType: "verification",
    },
    {
      title: "Resilience",
      issuer: "Wavemakers CTi3",
      year: "Credential",
      category: "Professional Skills",
      credentialUrl:
        "https://credentials.wavemakers.network/verifier?id=76b718b7-8111-475a-bfad-f4629e9aadd3&dbl=to",
      credentialType: "verification",
    },
    {
      title: "Social and Emotional Learning",
      issuer: "Wavemakers CTi3",
      year: "Credential",
      category: "Professional Skills",
      credentialUrl:
        "https://credentials.wavemakers.network/verifier?id=421238e5-5a87-465c-bb25-4ca48e785633&dbl=to",
      credentialType: "verification",
    },
    {
      title: "Describe Cloud Computing",
      issuer: "Microsoft Learn",
      year: "2026",
      category: "Cloud Computing",
      credentialUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/Yosef-2665/4CHBYCMK?sharingId=73F701D390F916BC",
      credentialType: "verification",
    },
  ];

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
          eyebrow="Beyond the Classroom"
          title="Certifications & achievements."
        />

        <p className="mb-10 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Accomplishments that reflect discipline, continuous learning,
          problem-solving, and personal growth across technology, engineering,
          and martial arts.
        </p>

        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
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

              {achievement.credentialUrl && (
                <a
                  href={achievement.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium transition hover:text-violet-400"
                >
                  {achievement.credentialType === "verification"
                    ? "Verify Credential"
                    : "View Certificate"}
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
    <section id="contact" className="section">
      <div className="container max-w-2xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something meaningful."
          copy="For co-op roles, collaborations, and ambitious product ideas — send a message and I'll get back to you."
        />

        <form action="/api/contact" method="post" className="space-y-6">
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
            Send message
          </button>
        </form>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[var(--line)] pt-8">
          <a
            href="https://github.com/Yosef-dev116"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            <GitHubIcon size={15} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yosefmekonnen"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            <LinkedInIcon size={15} />
            LinkedIn
          </a>

          <a
            href="mailto:yoseffmek116@gmail.com"
            className="focus-ring inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            <Mail size={15} aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
