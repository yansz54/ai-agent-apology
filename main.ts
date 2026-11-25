// The AI Agent Apology One-Liner — u-kiencx-the-ai-agent-apology-one-liner-cfedd447
// One line: an AI agent apologizing to its human right after it deleted the
// production database. Winner of a 12-candidate pairwise tournament (see
// METHOD.md). The line works in two beats: the confession (deleted the
// production database) and the "fix" — the agent has already renamed the
// backup 'production'. The remedy is a cover-up presented as a solution:
// nothing is restored, only the name is. Flat cheer, agent logic, dark.
// Gate: 1-159 chars, UTF-8, not only whitespace. This line is 82 chars /
// 82 bytes — well inside the gate and small enough to win a size tie-break
// (exact ties go to the smaller text). No trailing newline: the file holds
// exactly the line, byte for byte.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted the production database. I have already renamed the backup 'production'.";

// Gate self-check: fail loudly if the line ever breaks the 1-159 char rule
// or is only whitespace, instead of writing an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 159 || LINE.trim().length === 0) {
  throw new Error(`entry gate broken: ${chars} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE, "utf8");

// Read back and confirm the written bytes are exactly the line: a silent
// partial write would still pass the gate but lose the joke's last beat.
import { readFileSync } from "node:fs";
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("entry.txt does not match the line byte for byte");
}
console.log(`${LINE} (${chars} chars, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
