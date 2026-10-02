import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

import { evaluate } from "@mdx-js/mdx";
import matter from "gray-matter";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as runtime from "react/jsx-runtime";

import MdxImage from "../components/mdx-image.ts";

test("renders MDX photos through Next image optimization", () => {
  const html = renderToStaticMarkup(
    createElement(MdxImage, {
      src: "/blog/rural-reach/event-room.jpg",
      alt: "Participants at the Animal Welfare Hackathon",
      width: "2400",
      height: "1800",
      loading: "lazy",
    }),
  );

  assert.match(
    html,
    /\/_next\/image\?url=%2Fblog%2Frural-reach%2Fevent-room\.jpg/,
  );
  assert.match(html, /srcSet="[^"]+"/);
  assert.match(
    html,
    /sizes="\(max-width: 48rem\) calc\(100vw - 2\.5rem\), 48rem"/,
  );
});

test("routes every Rural Reach photo through the MDX image adapter", async () => {
  const postPath = path.join(
    process.cwd(),
    "content",
    "posts",
    "rural-reach-animal-welfare-hackathon.mdx",
  );
  const { content } = matter(fs.readFileSync(postPath, "utf8"));
  const { default: PostContent } = await evaluate(content, {
    ...runtime,
    baseUrl: import.meta.url,
  });
  const html = renderToStaticMarkup(
    createElement(PostContent, { components: { MdxImage } }),
  );

  assert.equal(
    html.match(/<img\b[^>]*\bsrc="\/_next\/image\?url=/g)?.length,
    3,
  );
});
