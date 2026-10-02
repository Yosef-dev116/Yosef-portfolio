import assert from "node:assert/strict";
import test from "node:test";

import * as site from "../data/site.ts";

test("features Rural Reach as a text-only achievement linked to its article", () => {
  assert.ok(Array.isArray(site.achievements), "achievement data should exist");

  const ruralReach = site.achievements.find(
    (achievement) => achievement.title === "Rural Reach",
  );

  assert.ok(ruralReach, "Rural Reach should appear in Beyond Software");
  assert.equal(ruralReach.year, "2026");
  assert.equal(ruralReach.category, "Innovation");
  assert.equal(ruralReach.linkLabel, "Read the story");
  assert.equal(ruralReach.href, "/blog/rural-reach-animal-welfare-hackathon");
  assert.equal("image" in ruralReach, false);
});
