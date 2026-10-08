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
  },
];
