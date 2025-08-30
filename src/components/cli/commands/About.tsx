import { ME } from "@/lib/config";

export default function About() {
    const content = `I'm ${ME.name} (@${ME.handle}) — ${ME.title}.
I ship reliable systems, design clear APIs, and leave logs tidy.
Strengths: backend, distributed systems, infra hygiene.
Currently: building things that scale without being fragile.`;

    return <div className="whitespace-pre-wrap">{content}</div>
}
