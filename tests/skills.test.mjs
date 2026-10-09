import assert from "node:assert/strict";
import test from "node:test";

import { projects, skills } from "../data/site.ts";

test("each skill is listed once", () => {
  const all = Object.values(skills).flat();

  assert.equal(new Set(all).size, all.length);
});

test("covers the stack used across recent work", () => {
  const all = Object.values(skills).flat();

  for (const tool of [
    "TypeScript",
    "Swift",
    "React Native",
    "Expo",
    "Playwright",
  ]) {
    assert.ok(all.includes(tool), `${tool} should be listed`);
  }
});

test("the finance dashboard lists PostgreSQL, not JSON, as its storage", () => {
  const finance = projects.find(
    (project) => project.slug === "finance-dashboard",
  );

  assert.ok(finance?.stack.includes("PostgreSQL"));
  assert.ok(!finance?.stack.includes("JSON"));
});
