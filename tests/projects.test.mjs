import assert from "node:assert/strict";
import test from "node:test";

import { projects } from "../data/site.ts";

test("features the recent GatherBite and Ultimate Tic-Tac-Toe repositories", () => {
  const gatherBite = projects.find((project) => project.slug === "gatherbite");
  const ultimateTicTacToe = projects.find(
    (project) => project.slug === "ultimate-tic-tac-toe",
  );

  assert.ok(gatherBite, "GatherBite should appear in Projects");
  assert.equal(
    gatherBite.githubUrl,
    "https://github.com/Yosef-dev116/gatherbite",
  );
  assert.doesNotMatch(JSON.stringify(gatherBite), /527/);
  assert.ok(
    ultimateTicTacToe,
    "Ultimate Tic-Tac-Toe should remain in Projects",
  );
});
