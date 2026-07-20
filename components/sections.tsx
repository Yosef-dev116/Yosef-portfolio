"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";

import { projects, skills } from "@/data/site";
import { Pill, Reveal, SectionTitle } from "./ui";

type SocialIconProps = {
  size?: number;
  className?: string;
};

function GitHubIcon({ size = 18, className = "" }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, className = "" }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.371 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9H7.12v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function About() {
  const aboutCards = [
    {
      title: "Journey",
      description:
        "I began studying Computer Science at the University of Prince Edward Island in January 2025. Through the Co-op program and a minor in Mathematics, I'm building a strong foundation in software engineering, algorithms, and problem solving.",
    },
    {
      title: "Goal",
      description:
        "My goal is to become a software engineer who builds reliable, scalable, and intelligent software. I'm especially interested in backend development, full-stack applications, artificial intelligence, and cloud technologies.",
    },
    {
      title: "Values",
      description:
        "I believe in continuous learning, taking ownership, writing clean code, and building software that genuinely helps people solve real problems.",
    },
  ];

  const timeline = [
    {
      year: "Jan 2025",
      description:
        "Started my Bachelor of Science in Computer Science (Co-op) with a minor in Mathematics at UPEI.",
    },
    {
      year: "Today",
      description:
        "Building portfolio projects while strengthening my skills in software engineering, web development, databases, algorithms, and AI.",
    },
    {
      year: "Dec 2028",
      description:
        "Expected graduation and preparing for a career as a software engineer focused on building impactful technology.",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="About Me"
          title="Learning every day. Building software that matters."
          copy="I'm passionate about creating software that is practical, reliable, and enjoyable to use. Every project is an opportunity to improve my engineering skills, learn new technologies, and solve meaningful problems."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {aboutCards.map((card) => (
            <Reveal key={card.title} className="glass card p-7">
              <h3 className="text-xl font-semibold">{card.title}</h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {card.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 border-l border-[var(--line)] pl-6">
          <p className="eyebrow">My Journey</p>

          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.year}>
                <p className="font-bold text-violet-400">{item.year}</p>

                <p className="mt-2 text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
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
          eyebrow="Capabilities"
          title="A growing toolkit for building complete products."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillItems], index) => (
            <Reveal key={category} className="glass card p-6">
              <div className="mb-5 flex justify-between gap-4">
                <h3 className="font-semibold">{category}</h3>

                <span className="text-xs text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillItems.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>

              <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/5">
                <div
                  style={{
                    width: `${Math.min(68 + index * 4, 96)}%`,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                />
              </div>
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
            title="Projects designed as products, not assignments."
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

        <div className="space-y-8">
          {shownProjects.map((project) => (
            <Reveal key={project.slug} className="glass card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div
                  className={`grid min-h-72 place-items-center bg-gradient-to-br ${project.accent} p-8`}
                >
                  <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 p-4 shadow-2xl">
                    <div className="mb-3 flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/10" />
                    </div>

                    <div className="grid h-44 grid-cols-3 gap-3">
                      <div className="rounded-xl bg-white/5" />
                      <div className="col-span-2 rounded-xl bg-white/5" />
                      <div className="col-span-3 rounded-xl bg-white/5" />
                    </div>
                  </div>
                </div>

                <div className="p-7 md:p-10">
                  <p className="eyebrow">{project.tag}</p>

                  <h3 className="mt-3 text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--muted)]">
                    {project.summary}
                  </p>

                  <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <p className="font-semibold">Problem</p>

                      <p className="mt-2 text-[var(--muted)]">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Solution</p>

                      <p className="mt-2 text-[var(--muted)]">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <Pill key={technology}>{technology}</Pill>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo for ${project.title}`}
                        className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                      >
                        Live Demo
                        <ExternalLink
                          className="ml-2"
                          size={16}
                          aria-hidden="true"
                        />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub repository for ${project.title}`}
                        className="inline-flex items-center rounded-xl border border-[var(--line)] px-5 py-3 text-sm transition hover:border-white/30 hover:bg-white/5"
                      >
                        GitHub Repository
                        <GitHubIcon className="ml-2" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const experienceItems = [
    {
      icon: GraduationCap,
      title: "Bachelor of Science — Computer Science (Co-op)",
      description:
        "University of Prince Edward Island • January 2025 – December 2028 (Expected). Pursuing a major in Computer Science with a minor in Mathematics while preparing for software engineering co-op opportunities.",
    },
    {
      icon: Code2,
      title: "Technical Foundation",
      description:
        "Completed coursework in Data Structures & Algorithms, Programming Practices, Computer Programming Languages, Web Development, Computer Organization & Architecture, Linear Algebra, Calculus, and Combinatorics. Currently studying Machine Learning, Database Systems, Computer Communications, Operating Systems, and Differential Equations.",
    },
    {
      icon: Trophy,
      title: "Current Focus",
      description:
        "Building a portfolio of real-world software projects using React, Next.js, FastAPI, Python, TypeScript, SQL, and AI technologies while strengthening software engineering and problem-solving skills.",
    },
    {
      icon: BookOpen,
      title: "Career Goal",
      description:
        "Seeking software engineering and technology co-op opportunities where I can contribute to meaningful products, learn from experienced engineers, and continue growing as a developer.",
    },
  ];

  return (
    <section id="experience" className="section bg-white/[0.02]">
      <div className="container">
        <SectionTitle
          eyebrow="Education & Experience"
          title="Building a strong foundation for a career in software engineering."
          copy="I'm continuously developing my technical knowledge through university coursework, independent projects, and hands-on software development."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {experienceItems.map(({ icon: Icon, title, description }) => (
            <Reveal key={title} className="glass card p-7">
              <Icon className="text-violet-400" aria-hidden="true" />

              <h3 className="mt-5 text-xl font-semibold">{title}</h3>

              <p className="mt-3 leading-7 text-[var(--muted)]">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function GithubSection() {
  return (
    <section id="github" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="GitHub"
          title="Projects, progress, and code in public."
          copy="My GitHub profile documents the software I build, the technologies I am learning, and the progress I make as a developer."
        />

        <Reveal className="glass card overflow-hidden">
          <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="eyebrow">Developer Profile</p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                Follow my development journey on GitHub.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">
                Explore my repositories, coursework, experiments, and full-stack
                projects. I use GitHub to document what I build, improve my
                code, and share my progress over time.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Yosef-dev116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  View GitHub Profile
                  <GitHubIcon className="ml-2" size={16} />
                </a>

                <a
                  href="https://github.com/Yosef-dev116?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-[var(--line)] px-5 py-3 text-sm transition hover:border-white/30 hover:bg-white/5"
                >
                  Browse Repositories
                  <ArrowUpRight className="ml-2" size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <GitHubIcon size={42} className="text-violet-400" />

              <p className="mt-5 text-sm text-[var(--muted)]">
                GitHub username
              </p>

              <p className="mt-1 text-xl font-semibold">@Yosef-dev116</p>

              <div className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                <p>Software projects and experiments</p>
                <p>Coursework and technical practice</p>
                <p>Ongoing learning and development</p>
              </div>
            </div>
          </div>
        </Reveal>
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
      description:
        "Earned a second-degree black belt after years of disciplined training, technical development, and perseverance.",
      credentialUrl: "/certificates/world-taekwondo-2nd-dan.jpg",
      credentialType: "certificate",
    },
    {
      title: "1st Poom Certificate",
      issuer: "World Taekwondo",
      year: "2018",
      category: "Martial Arts",
      description:
        "Recognized by World Taekwondo for achieving the first Poom rank through formal training and examination.",
      credentialUrl: "/certificates/world-taekwondo-1st-poom.jpg",
      credentialType: "certificate",
    },
    {
      title: "Engineering Fair Certificate of Participation",
      issuer: "STEMpower",
      year: "2022",
      category: "Engineering",
      description:
        "Participated in an engineering fair focused on applying scientific thinking, creativity, and practical problem-solving.",
      credentialUrl: "/certificates/stempower-engineering-fair.jpg",
      credentialType: "verification",
    },
    {
      title: "Active Problem Solving",
      issuer: "Wavemakers CTi3",
      year: "Credential",
      category: "Professional Skills",
      description:
        "Developed structured approaches for analyzing challenges, evaluating possible solutions, and taking effective action.",
      credentialUrl:
        "https://credentials.wavemakers.network/verifier?id=f114dfa6-5690-445f-b95e-c8cfa2fa3f9d&dbl=to",
      credentialType: "verification",
    },
    {
      title: "Resilience",
      issuer: "Wavemakers CTi3",
      year: "Credential",
      category: "Professional Skills",
      description:
        "Strengthened the ability to adapt, remain focused, and continue progressing through challenges and uncertainty.",
      credentialUrl:
        "https://credentials.wavemakers.network/verifier?id=76b718b7-8111-475a-bfad-f4629e9aadd3&dbl=to",
      credentialType: "verification",
    },
    {
      title: "Social and Emotional Learning",
      issuer: "Wavemakers CTi3",
      year: "Credential",
      category: "Professional Skills",
      description:
        "Built greater awareness of communication, collaboration, emotional intelligence, and responsible decision-making.",
      credentialUrl:
        "https://credentials.wavemakers.network/verifier?id=421238e5-5a87-465c-bb25-4ca48e785633&dbl=to",
      credentialType: "verification",
    },
    {
      title: "Describe Cloud Computing",
      issuer: "Microsoft Learn",
      year: "2026",
      category: "Cloud Computing",
      description:
        "Completed the Microsoft Learn module introducing cloud computing concepts, cloud service models, and deployment models.",
      credentialUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/Yosef-2665/4CHBYCMK?sharingId=73F701D390F916BC",
      credentialType: "verification",
    },
  ];

  return (
    <section id="achievements" className="section bg-white/[0.02]">
      <div className="container">
        <SectionTitle
          eyebrow="Beyond the Classroom"
          title="Certifications & achievements."
        />

        <p className="mb-10 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Accomplishments that reflect discipline, continuous learning,
          problem-solving, and personal growth across technology, engineering,
          and martial arts.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <Reveal
              key={`${achievement.title}-${achievement.issuer}`}
              className="glass card flex h-full flex-col p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow">{achievement.category}</p>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]">
                  {achievement.year}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-snug">
                {achievement.title}
              </h3>

              <p className="mt-2 text-sm font-medium">{achievement.issuer}</p>

              <p className="mt-5 flex-1 leading-7 text-[var(--muted)]">
                {achievement.description}
              </p>

              {achievement.credentialUrl && (
                <a
                  href={achievement.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition hover:text-violet-400"
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
      <div className="container glass card overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-violet-500/20 to-cyan-500/5 p-8 md:p-12">
            <p className="eyebrow">Contact</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-5 leading-7 text-[var(--muted)]">
              For co-op roles, collaborations, and ambitious product ideas.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a
                href="mailto:yoseffmek116@gmail.com"
                className="flex items-center gap-3 transition hover:text-violet-400"
              >
                <Mail size={18} aria-hidden="true" />
                yoseffmek116@gmail.com
              </a>

              <a
                href="mailto:ymekonnen@upei.ca"
                className="flex items-center gap-3 transition hover:text-violet-400"
              >
                <Mail size={18} aria-hidden="true" />
                ymekonnen@upei.ca
              </a>

              <a
                href="https://www.linkedin.com/in/yosefmekonnen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-violet-400"
              >
                <LinkedInIcon size={18} />
                LinkedIn
              </a>

              <a
                href="https://github.com/Yosef-dev116"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-violet-400"
              >
                <GitHubIcon size={18} />
                GitHub
              </a>

              <p className="flex items-center gap-3">
                <MapPin size={18} aria-hidden="true" />
                Charlottetown, PE, Canada
              </p>
            </div>
          </div>

          <form
            action="/api/contact"
            method="post"
            className="space-y-5 p-8 md:p-12"
          >
            <label className="block text-sm">
              Name
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent p-3 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
              />
            </label>

            <label className="block text-sm">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent p-3 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
              />
            </label>

            <label className="block text-sm">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-[var(--line)] bg-transparent p-3 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-white p-3 font-semibold text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
