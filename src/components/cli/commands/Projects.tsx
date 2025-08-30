import { PROJECTS } from "@/lib/config";
import { c, escapeHtml } from "@/lib/utils";

export default function Projects() {
    const body = PROJECTS.map(
      (p) => `${p.id}. ${escapeHtml(p.name)} — <span class='${c.dim}'>${escapeHtml(
        p.brief
      )}</span>`
    ).join("\n");
    const output = body + `\nUse <b>project &lt;id&gt;</b> for details.`;

    return <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: output}} />
}
