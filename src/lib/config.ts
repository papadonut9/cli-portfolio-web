export const ME = {
  name: "Anchit Mhatre",
  handle: "anchxt",
  title: "Software Engineer @ BARCIndia",
  email: "anchitmhatre@proton.me",
  github: "https://github.com/papadonut9",
  linkedin: "https://www.linkedin.com/in/anchit.mhatre",
  website: "https://anchxt.dev",
  blog: "https://blog.anchxt.dev",
  resumeUrl: "/resume.pdf",
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
    name: "Shawtyfy",
    brief: "A high-performance URL shortener with Redis caching and robust storage for rapid access to frequently used links.",
    stack: ["Go", "Redis", "AWS DynamoDB", "Docker"],
    repo: "https://github.com/papadonut9/shawtyfy",
    impact: "Built scalable backend architecture demonstrating proficiency in database management and system reliability for high-traffic applications.",
  },
  {
    id: "2",
    name: "Memoriaire",
    brief: "A custom memory allocation system for UNIX-based systems implementing core memory management functions.",
    stack: ["C", "CMake", "Linux"],
    repo: "https://github.com/papadonut9/memory-allocator",
    impact: "Enhanced system performance through efficient memory allocation and deallocation processes, showcasing deep low-level programming expertise.",
  },
  {
    id: "3",
    name: "Portfolio – Web CLI + Docker",
    brief:
      "This site and a containerized CLI twin. Konami unlocks developer mode and hidden goodies.",
    stack: ["React", "Vercel", "Docker"],
    repo: "https://github.com/papadonut9/cli-portfolio-web",
    live: "https://anchxt.dev",
  },
  {
    id: "4",
    name: "LangLasso - LLM Guided Feature Selection Framework (WIP)",
    brief:"A simple tunable model that incorporates domain-specific knowledge from LLMs while safeguarding against potential LLM hallucinations through adaptive validation.",
    stack: ["Prompt Engineering", "Feature Selection", " Retrieval-Augmented Generation (RAG)", "LLM"],
    impact: "Established new performance benchmarks in feature selection by pioneering the first successful integration of LLM-derived expertise with classical statistical methods, outperforming state-of-the-art baselines.",
  },

];


export const VFS: Record<string, string> = {
  "about.txt": `I'm ${ME.name} (@${ME.handle}) — ${ME.title}.
I design and ship reliable systems. I prefer clean interfaces, precise logs,
and error budgets that actually mean something.`,
  "resume.txt": `View the shiny PDF: ${ME.resumeUrl}\nOr run: open resume`,
  "links.txt": `GitHub: ${ME.github}\nLinkedIn: ${ME.linkedin}\nBlog: ${ME.blog}`,
};
