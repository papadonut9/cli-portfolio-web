import React from "react";
import About from "@/components/cli/commands/About";
import Help from "@/components/cli/commands/Help";
import Contact from "@/components/cli/commands/Contact";
import Projects from "@/components/cli/commands/Projects";
import Resume from "@/components/cli/commands/Resume";
import { ME, PROJECTS, VFS } from "@/lib/config";
import { c, cTag, escapeHtml, openUrl } from "@/lib/utils";

const commands: Record<string, (arg?: string) => string | React.ReactElement | null> = {
    help: () => <Help />,
    about: () => <About />,
    projects: () => <Projects />,
    project: (arg) => {
        const p = PROJECTS.find((x) => x.id === arg);
        if (!p) {
          return `${cTag("404", c.red)} project not found`;
        }
        const meta = [
          `<b>${escapeHtml(p.name)}</b>`,
          escapeHtml(p.brief),
          `<span class='${c.dim}'>Stack:</span> ${p.stack.map(escapeHtml).join(", ")}`,
          p.repo ? `Repo: <a href='${p.repo}' target='_blank' rel='noreferrer'>${p.repo}</a>` : "",
          p.live ? `Live: <a href='${p.live}' target='_blank' rel='noreferrer'>${p.live}</a>` : "",
          p.impact ? `Impact: ${escapeHtml(p.impact)}` : "",
        ]
          .filter(Boolean)
          .join("\n");
        return meta;
    },
    resume: () => <Resume />,
    contact: () => <Contact />,
    shortcuts: () => `<b>github</b> → ${ME.github}\n<b>blog</b> → ${ME.blog}\n<b>email</b> → mailto:${ME.email}\n<b>open resume</b> → ${ME.resumeUrl}`,
    open: (arg) => {
        const a = arg?.toLowerCase();
        if (!a) {
          return `${cTag("Hint", c.yellow)} open &lt;url|github|blog|resume|linkedin&gt;`;
        }
        if (a === "github") return openUrl(ME.github);
        if (a === "blog") return openUrl(ME.blog);
        if (a === "resume") return openUrl(ME.resumeUrl);
        if (a === "linkedin") return openUrl(ME.linkedin);
        return openUrl(a);
    },
    github: () => openUrl(ME.github),
    blog: () => openUrl(ME.blog),
    email: () => openUrl(`mailto:${ME.email}`),
    whoami: () => `${ME.name} (@${ME.handle}) – ${ME.title}`,
    ls: () => Object.keys(VFS).map(f => `<span class='${c.cyan}'>${f}</span>`).join("  "),
    cat: (file) => {
        if (!file) return `${cTag("Hint", c.yellow)} cat &lt;file&gt;`;
        const content = VFS[file];
        if (!content) return `${cTag("404", c.red)} no such file`;
        return escapeHtml(content).replaceAll(/(http[^\s]+)/g, (m) => `<a href='${m}' target='_blank' rel='noreferrer'>${m}</a>`);
    },
    theme: (_arg) => {
        // This needs to be handled in Terminal.tsx to access setTheme
        return null;
    },
    clear: () => null,
    // Hidden commands
    secrets: () => `Build flags: <span class='${c.gray}'>--strict-typing --no-fluff</span>\nBug ratio: <span class='${c.gray}'>below market average</span>\nFavorite log level: <span class='${c.gray}'>INFO with taste</span>`,
    matrix: () => {
        // This needs to be handled in Terminal.tsx to run animation
        return null;
    }
};

export { commands };