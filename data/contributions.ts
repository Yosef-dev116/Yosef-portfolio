export type ContributionStatus = "In progress" | "Open" | "Merged";

export type Contribution = {
  slug: string;
  project: string;
  kind: string;
  status: ContributionStatus;
  date: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  visual?: "scanner";
  // Link straight to the pull request, issue, or repository. Leave it out
  // while the work is not publicly viewable.
  href?: string;
  hrefLabel?: string;
};

export const contributions: Contribution[] = [
  {
    slug: "react-sketch-canvas-touch-scroll",
    project: "react-sketch-canvas",
    kind: "Pull request to an open-source React library",
    status: "Open",
    date: "Oct 2026",
    title: "Two-finger scrolling on touch screens.",
    description:
      "A drawing canvas that set touch-action: none trapped phone and tablet users inside tall canvases. I fixed the maintainer's open issue so one finger still draws while two fingers scroll or pinch-zoom the page.",
    highlights: [
      "Tested each touch-action value in real Chromium before writing code, then changed the default to pinch-zoom",
      "Added an allowMultiTouchScroll prop so apps can keep the old behavior",
      "Playwright touch tests, unit tests, docs and a changeset; checked on a real iPhone",
    ],
    stack: ["React", "TypeScript", "Playwright", "Vitest"],
    href: "https://github.com/vinothpandian/react-sketch-canvas/pull/224",
    hrefLabel: "View pull request",
  },
  {
    slug: "fieldrow",
    project: "Fieldrow",
    kind: "Open-source mobile client for Baserow",
    status: "In progress",
    date: "Oct 2026",
    title: "Scan a barcode, update the Baserow record.",
    description:
      "A React Native app for people who manage equipment and stock away from a desk. It connects to a Baserow database, scans a barcode or QR code, finds the exact record, updates configured fields, and attaches a photo.",
    highlights: [
      "Exact-match lookup with explicit no-match and duplicate-match outcomes",
      "Database token kept in platform secure storage and never logged",
      "Independent review of every pull request, with real race conditions and a crash on malformed deep links found and fixed",
    ],
    stack: ["React Native", "Expo Router", "TypeScript", "Baserow API", "Jest"],
    visual: "scanner",
    href: "https://github.com/Yosef-dev116/fieldrow",
    hrefLabel: "View repository",
  },
];
