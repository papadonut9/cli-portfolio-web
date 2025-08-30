import Terminal from "@/components/cli/Terminal";

export default function Home(){
  return (
      <main className="min-h-screen bg-black text-green-400 font-mono p-4">
          <Terminal />
      </main>
  );
}
export const metadata = {
    title: "Anchit M. (@anchxt) | Interactive CLI Portfolio",
    description: "Software Engineer specializing in backend systems, distributed architecture, and infrastructure. Explore my interactive terminal portfolio with projects, resume, and contact info.",
    keywords: "software engineer, backend developer, distributed systems, kafka, kubernetes, portfolio, cli terminal",
}