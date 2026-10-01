import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

import matter from "gray-matter";

const projectRoot = process.cwd();
const postPath = path.join(
  projectRoot,
  "content",
  "posts",
  "rural-reach-animal-welfare-hackathon.mdx",
);

test("publishes the Rural Reach award story with its event details and photos", () => {
  assert.ok(fs.existsSync(postPath), "Rural Reach blog post should exist");

  const { data, content } = matter(fs.readFileSync(postPath, "utf8"));

  assert.equal(
    data.title,
    "How Rural Reach won at UPEI's Animal Welfare Hackathon",
  );
  assert.equal(data.date, "2026-09-27");
  assert.match(data.summary, /Most Animal Welfare Impact award/);

  for (const detail of [
    "Fahad Rahman Khan",
    "Alessandro Pacetti",
    "Zoe",
    "mentors",
    "organizers",
    "judges",
    "Atlantic Veterinary College",
    "University of Prince Edward Island",
    "Spark Tank 5.0",
    "October 5",
    "Perth-Andover",
    "possible pilot",
  ]) {
    assert.match(content, new RegExp(detail));
  }

  assert.match(
    content,
    /holding a ceremonial cheque for the Most Animal Welfare Impact award/,
  );
  assert.equal(content.match(/<figcaption>/g)?.length, 3);
  assert.equal(content.match(/loading="lazy"/g)?.length, 2);
  assert.equal(content.match(/decoding="async"/g)?.length, 2);

  for (const imagePath of [
    "/blog/rural-reach/team-award.jpg",
    "/blog/rural-reach/event-room.jpg",
    "/blog/rural-reach/working-session.jpg",
  ]) {
    assert.match(content, new RegExp(imagePath.replaceAll("/", "\\/")));
    assert.ok(
      fs.existsSync(path.join(projectRoot, "public", imagePath)),
      `${imagePath} should resolve from the public directory`,
    );
  }
});
