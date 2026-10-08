"use client";

import type { MouseEvent } from "react";
import { ArrowUpRight, GitMerge, GitPullRequest, Lock } from "lucide-react";

import {
  contributions,
  type Contribution,
  type ContributionStatus,
} from "@/data/contributions";
import { Pill, Reveal, SectionTitle } from "./ui";

const statusStyles: Record<ContributionStatus, string> = {
  "In progress": "border-amber-400/40 bg-amber-400/10 text-amber-600",
  Open: "border-emerald-400/40 bg-emerald-400/10 text-emerald-600",
  Merged: "border-violet-400/40 bg-violet-400/10 text-violet-500",
};

function StatusBadge({ status }: { status: ContributionStatus }) {
  const Icon = status === "Merged" ? GitMerge : GitPullRequest;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
    >
      <Icon size={13} aria-hidden="true" />
      {status}
    </span>
  );
}

function ScannerPhone() {
  return (
    <div
      className="relative mx-auto h-[19rem] w-[10.5rem] rounded-[2rem] border border-[var(--line)] bg-black/60 p-2 shadow-2xl"
      aria-hidden="true"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-[#0b0e14]">
        <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-white/15" />

        <div className="relative mx-3 mt-4 grid h-24 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
          <div className="flex items-end gap-[3px]">
            {[9, 16, 7, 18, 12, 6, 17, 10, 14, 7, 18, 9, 15, 11].map(
              (height, index) => (
                <span
                  key={index}
                  className="w-1.5 rounded-[1px] bg-white/70"
                  style={{ height: height * 2 }}
                />
              ),
            )}
          </div>
          <span className="scan-line absolute inset-x-2 h-0.5 rounded-full bg-violet-400 shadow-[0_0_14px_3px_rgba(167,139,250,0.8)]" />
        </div>

        <div className="mx-3 mt-3 space-y-1.5 rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-widest text-violet-500">
            Match found
          </p>
          <p className="text-[11px] font-semibold text-white">Drill press 04</p>
          <div className="flex justify-between text-[9px] text-zinc-400">
            <span>Location</span>
            <span className="text-zinc-200">Workshop B</span>
          </div>
          <div className="flex justify-between text-[9px] text-zinc-400">
            <span>Condition</span>
            <span className="text-zinc-200">Good</span>
          </div>
        </div>

        <div className="mx-3 mt-auto mb-3 rounded-lg bg-violet-500 py-1.5 text-center text-[10px] font-semibold text-white">
          Save to Baserow
        </div>
      </div>
    </div>
  );
}

function spotlight(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--mx",
    `${event.clientX - rect.left}px`,
  );
  event.currentTarget.style.setProperty(
    "--my",
    `${event.clientY - rect.top}px`,
  );
}

function ContributionCard({ item }: { item: Contribution }) {
  return (
    <Reveal className="h-full">
      <article
        onMouseMove={spotlight}
        className={`glass card spotlight grid h-full gap-8 overflow-hidden p-6 md:p-8 ${item.visual ? "lg:grid-cols-[1fr_auto] lg:items-center" : ""}`}
      >
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={item.status} />
            <span className="text-xs text-[var(--muted)]">{item.date}</span>
          </div>

          <p className="eyebrow mt-6">{item.kind}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            <span className="text-violet-400">{item.project}</span>
            <span className="text-[var(--muted)]"> / </span>
            {item.title}
          </h3>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            {item.description}
          </p>

          <ul className="mt-5 space-y-2 text-sm">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.stack.map((technology) => (
              <Pill key={technology}>{technology}</Pill>
            ))}
          </div>

          <div className="mt-7">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                {item.hrefLabel ?? "View contribution"}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] px-5 py-3 text-sm text-[var(--muted)]">
                <Lock size={15} aria-hidden="true" />
                Repository is private for now
              </span>
            )}
          </div>
        </div>

        {item.visual === "scanner" && (
          <div className="relative z-10">
            <ScannerPhone />
          </div>
        )}
      </article>
    </Reveal>
  );
}

export function Contributions() {
  return (
    <section id="open-source" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Open source"
          title="Contributions."
          copy="Open-source work I have built or contributed to, each linked straight to the code, pull request, or issue."
        />

        <div className="grid gap-6">
          {contributions.map((item) => (
            <ContributionCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
