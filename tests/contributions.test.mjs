import assert from "node:assert/strict";
import test from "node:test";

import { contributions } from "../data/contributions.ts";

test("every contribution is complete and links straight to its work", () => {
  assert.ok(contributions.length > 0);

  for (const item of contributions) {
    assert.ok(item.project && item.title && item.description, item.slug);
    assert.ok(item.highlights.length > 0, item.slug);
    if (item.href) {
      assert.match(item.href, /^https:\/\/github\.com\//, item.slug);
    }
  }
});

test("only contributions with a public link claim to be open or merged", () => {
  for (const item of contributions) {
    if (item.status !== "In progress") {
      assert.ok(item.href, `${item.slug} needs a public link`);
    }
  }
});
