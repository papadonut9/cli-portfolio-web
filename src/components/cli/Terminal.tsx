"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ME } from "@/lib/config";
import { useKonami } from "@/hooks/useKonami";
import { useAutoscroll } from "@/hooks/useAutoscroll";
import { c, cTag, escapeHtml, nowGreeting } from "@/lib/utils";
import { commands } from "@/lib/commands";
import { animateMatrix } from "@/lib/animations";

// Command result line type
type Line = { html: string } | { component: React.ReactElement };

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [devMode, setDevMode] = useState(false);
  const history = useRef<string[]>([]);
  const histIdx = useRef<number>(-1);
  const { ref: viewportRef, scroll } = useAutoscroll<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus input on mount/click
  useEffect(() => {
    inputRef.current?.focus();
    const click = () => inputRef.current?.focus();
    window.addEventListener("click", click);
    return () => window.removeEventListener("click", click);
  }, []);

  const push = (line: string | React.ReactElement) => {
    if (typeof line === 'string') {
        setLines((prev) => [...prev, { html: line }]);
    } else {
        setLines((prev) => [...prev, { component: line }]);
    }
  }

  // Konami unlock → developer mode
  const triggerEasterEgg = useCallback(() => {
    setDevMode(true);
    push(
      `<span class='${c.magenta}'>Developer Mode unlocked.</span> New commands: <b>secrets</b>, <b>matrix</b>.`
    );
    // Optional: play a bloop via <audio> if you want.
  }, []);
  useKonami(triggerEasterEgg);

  // Boot banner
  useEffect(() => {
    const banner = [
      `<span class='${c.cyan}'>AnchxtOS v1.0</span> – ${ME.name} (@${ME.handle})`,
      `${nowGreeting()} Type <b>help</b> to begin. Konami is… enabled.`,
    ];
    setLines(banner.map((s) => ({ html: s })));
  }, []);

  useEffect(() => {
    scroll();
  }, [lines, scroll]);

  const PROMPT = useMemo(
    () => `<span class='${c.green}'>${ME.handle}@anchxt</span>:<span class='${c.cyan}'>~</span>$`,
    []
  );

  const handleCommand = (raw: string) => {
    const line = raw.trim();
    if (!line) return;

    // Echo the prompt + command
    push(`${PROMPT} ${escapeHtml(line)}`);

    const [cmd, ...rest] = line.split(/\s+/);
    const arg = rest.join(" ");
    const cmdLower = cmd.toLowerCase();

    // Special commands that interact with terminal state
    if (cmdLower === "theme") {
        const t = arg.toLowerCase();
        if (t === "dark" || t === "light") {
          setTheme(t);
          push(`${cTag("OK", c.green)} theme → ${t}`);
        } else {
          push(`${cTag("Hint", c.yellow)} theme dark|light`);
        }
        return;
    }

    if (cmdLower === "matrix") {
        if (!devMode) {
            push(`${cTag("Lock", c.red)} command unavailable`);
            return;
        }
        animateMatrix(setLines);
        return;
    }

    if (cmdLower === "secrets") {
        if (!devMode) {
            push(`${cTag("Lock", c.red)} command unavailable`);
            return;
        }
    }

    const handler = commands[cmdLower];

    if (handler) {
      const output = handler(arg);
      if (output) {
        push(output);
      }
    } else {
      push(`${cTag("?", c.yellow)} unknown command. Try <b>help</b>.`);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input;
    if (cmd.toLowerCase() === "clear") {
      setLines([]);
    } else {
      handleCommand(cmd);
    }
    history.current.push(cmd);
    histIdx.current = history.current.length;
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      histIdx.current = Math.max(0, histIdx.current - 1);
      setInput(history.current[histIdx.current] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      histIdx.current = Math.min(history.current.length, histIdx.current + 1);
      setInput(history.current[histIdx.current] ?? "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const candidates = Object.keys(commands);
      const next = candidates.find((c) => c.startsWith(input));
      if (next) setInput(next);
    }
  };

  const themeClass = theme === "dark" ? "dark bg-black text-neutral-100" : "bg-neutral-50 text-neutral-900";

  return (
    <div className={`min-h-screen ${themeClass} antialiased`}>
      <div className="mx-auto max-w-3xl px-4 py-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className={`ml-3 text-sm ${c.gray}`}>anchxt.dev – Web CLI</span>
          </div>
          <button
            onClick={() => {
              setTheme((t) => (t === "dark" ? "light" : "dark"));
            }}
            className="rounded-xl border px-3 py-1 text-sm opacity-80 hover:opacity-100"
          >
            {theme === "dark" ? "Light" : "Dark"} mode
          </button>
        </div>

        {/* Terminal viewport */}
        <div
          ref={viewportRef}
          className="min-h-[60vh] rounded-2xl border border-neutral-700/40 bg-neutral-900/50 p-4 shadow-inner dark:bg-neutral-900/80"
        >
          {lines.map((line, i) => (
            <pre key={i} className="whitespace-pre-wrap leading-relaxed">
              {"html" in line ? (
                <span dangerouslySetInnerHTML={{ __html: line.html }} />
              ) : (
                line.component
              )}
            </pre>
          ))}

          {/* Prompt */}
          <form onSubmit={onSubmit} className="mt-2 flex items-center gap-2">
            <span
              className="select-none"
              dangerouslySetInnerHTML={{ __html: PROMPT }}
            />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="flex-1 bg-transparent outline-none placeholder-neutral-500"
              placeholder="type a command… (try: help)"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </form>

          <div className={`mt-3 text-xs ${c.gray}`}>
            Hint: Konami works here. Type <b>help</b>. Try <b>projects</b> → <b>project 1</b>.
          </div>
        </div>

        {/* Footer */}
        <div className="mx-auto mt-6 text-center text-xs opacity-70">
          © {new Date().getFullYear()} {ME.name} – Built with React, deployed on Vercel.
        </div>
      </div>
    </div>
  );
}
