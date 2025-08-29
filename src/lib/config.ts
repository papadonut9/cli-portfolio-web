// ---- Replace these with your real details ---------------------------------
export const ME = {
  name: "Ace",
  handle: "anchxt",
  title: "Software Engineer",
  email: "ace@anchxt.dev",
  github: "https://github.com/anchxt",
  linkedin: "https://www.linkedin.com/in/anchxt",
  website: "https://anchxt.dev",
  blog: "https://blog.anchxt.dev",
  resumeUrl: "/resume.pdf", // host a PDF at public/resume.pdf in Next.js
};

export const PROJECTS: Array<{
  id: string;
  name: string;
  brief: string;
  stack: string[];
  repo?: string;
  live?: string;
  impact?: string;
}> = [
  {
    id: "1",
    name: "Kafka DR with MirrorMaker 2",
    brief:
      "Disaster recovery mirroring between clusters with topic normalization (no prefixes) and selective sync.",
    stack: ["Kubernetes", "Strimzi", "MirrorMaker2", "Kafka"],
    repo: "https://github.com/anchxt/kafka-dr",
    impact:
      "Stabilized cross-cluster replication and reduced recovery RTO; added topic mapping rules and TLS bypass for PoC paths.",
  },
  {
    id: "2",
    name: "NP-Hard Explorer",
    brief: "Interactive writeups + visualizations for classic NP-hard problems and heuristics.",
    stack: ["TypeScript", "Next.js", "Canvas"],
    repo: "https://github.com/anchxt/np-hard",
    impact: "Improved onboarding for teammates; used by interns to learn reductions quickly.",
  },
  {
    id: "3",
    name: "Portfolio – Web CLI + Docker",
    brief:
      "This site and a containerized CLI twin. Konami unlocks developer mode and hidden goodies.",
    stack: ["React", "Vercel", "Docker"],
    repo: "https://github.com/anchxt/portfolio",
    live: "https://anchxt.dev",
  },
];

// Optional: basic file system for `ls` and `cat`
export const VFS: Record<string, string> = {
  "about.txt": `I'm ${ME.name} (@${ME.handle}) — ${ME.title}.
I design and ship reliable systems. I prefer clean interfaces, precise logs,
and error budgets that actually mean something.`,
  "resume.txt": `View the shiny PDF: ${ME.resumeUrl}\nOr run: open resume`,
  "links.txt": `GitHub: ${ME.github}\nLinkedIn: ${ME.linkedin}\nBlog: ${ME.blog}`,
};
