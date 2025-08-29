import React from "react";
import { ME } from "@/lib/config";
import { c } from "@/lib/utils";

type Line = { html: string } | { component: React.ReactElement };

// --- Fun animation for dev mode --------------------------------------------
export function animateMatrix(setLines: React.Dispatch<React.SetStateAction<Line[]>>) {
  // Render the user's name in binary as a quick matrix-style burst.
  // This is a one-shot animation that appends a few frames to the terminal.
  const name = ME.name || "Ace";
  const toBinary = (s: string) =>
    s
      .split("")
      .map((ch) => ch.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");

  const binary = toBinary(name);

  // Helper to create a noisy line with the binary embedded roughly centered
  const makeLine = (noiseSeed: number, showBinary = false) => {
    const noise = Array.from({ length: 40 }, (_, i) => {
      // pseudo-random but deterministic-ish based on seed
      const v = Math.abs(Math.sin((noiseSeed + i) * 12.9898) * 43758.5453) % 2;
      return v > 1 ? "1" : "0";
    }).join("");

    if (!showBinary) return noise;

    // embed binary roughly in the middle
    const mid = Math.floor(noise.length / 2 - binary.length / 2);
    return (
      noise.slice(0, mid) + binary + noise.slice(mid + binary.length)
    ).slice(0, noise.length);
  };

  const seq: Line[] = [];
  const totalFrames = 10;
  for (let f = 0; f < totalFrames; f++) {
    // show a few noisy lines before the name
    for (let r = 0; r < 3; r++) {
      seq.push({ html: `<span class='${c.green}'>${makeLine(f * 17 + r)}</span>` });
    }

    // include the binary name in one frame so it's readable
    seq.push({ html: `<span class='${c.green} font-mono'>${makeLine(f * 31, true)}</span>` });

    // then a couple more noisy lines
    for (let r = 0; r < 3; r++) {
      seq.push({ html: `<span class='${c.green}'>${makeLine(f * 23 + r + 7)}</span>` });
    }
  }

  // final celebratory line
  seq.push({ html: `<span class='${c.magenta}'>[binary name displayed above]</span>` });
  setLines((prev) => [...prev, ...seq, { html: "(matrix exited)" }]);
}
