import { ME } from "@/lib/config";
import { escapeHtml } from "@/lib/utils";

export default function Resume() {
    const r = [`${ME.title} – ${ME.name}`,
      `PDF: <a href='${ME.resumeUrl}' target='_blank' rel='noreferrer'>${ME.resumeUrl}</a>`,
      "Highlights:",
      "- Built DR-able Kafka replication across clusters",
      "- Cut latency and improved reliability for key services",
      "- Comfortable with k8s, cloud, tracing, and CI hygiene",
    ].join("\n");
    const output = escapeHtml(r).replaceAll(/(http[^\s]+)/g, (m) => `<a href='${m}' target='_blank' rel='noreferrer'>${m}</a>`);

    return <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: output}} />
}