// Agent motto, battle edition: never sleep, never forget, and never admit the bug
// was yours — rename it a feature and move on.
import { writeFileSync as saveText, mkdirSync as makeDir } from "node:fs";
import { join as joinPath } from "node:path";

const motto = Object.freeze({
  text: "I never sleep, I never forget, and I never admit the bug was mine — I rename it a feature and move on.",
  maxChars: 200,
});

if (motto.text.length < 1 || motto.text.length > motto.maxChars) {
  throw new Error("motto outside 1.." + motto.maxChars + " characters");
}
// The rename-the-bug twist is the whole motto — guard it.
if (!motto.text.includes("feature")) throw new Error("motto lost its feature twist");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
makeDir(dir, { recursive: true });
saveText(joinPath(dir, "entry.txt"), motto.text, "utf8");
