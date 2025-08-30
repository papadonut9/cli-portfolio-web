import { ME } from "@/lib/config";
import { escapeHtml } from "@/lib/utils";

export default function Resume() {
    const r = [`${ME.title} – ${ME.name}`,
      `PDF: <a href='${ME.resumeUrl}' target='_blank' rel='noreferrer'>${ME.resumeUrl}</a>`,
      "Highlights:",
        "- Cut latency and improved reliability for key services (making things fast AND stable)",
        "- Comfortable with k8s, cloud, tracing, and CI hygiene (the whole DevOps toolkit)",
        "- Architected microservices that actually talk to each other nicely",
        "- Survived startup chaos while shipping production-ready code",
        "- Fluent in Java & Go, with a side of algorithms and data structures",
        "- Tamed PostgreSQL and Apache Cassandra for fun and profit",
        "- Design patterns enthusiast (Gang of Four would be proud)",
        "- Backend wizard who occasionally ventures into fullstack territory"
    ].join("\n");
    const output = escapeHtml(r).replaceAll(/(http[^\s]+)/g, (m) => `<a href='${m}' target='_blank' rel='noreferrer'>${m}</a>`);

    return <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: output}} />
}