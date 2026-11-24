// Last Text at One Percent — entry program (node22, stdlib only).
// Writes the dying phone's final text message to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR when the harness sets it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The phone's last text, in its own voice: a deathbed confession with
// a twist — it was never really charging properly, it just enjoyed
// the panic. Short, specific, no low-battery pun.
const TEXT =
  "confession before i die: i never actually charged past 97%. i just liked watching you panic. 1%";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1 to 200 characters of non-whitespace text.
// Fail loudly here rather than shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${TEXT.length} chars; must be 1-200`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
