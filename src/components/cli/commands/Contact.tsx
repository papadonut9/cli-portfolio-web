import { ME } from "@/lib/config";

export default function Contact() {
    const output = `Email: <a href='mailto:${ME.email}'>${ME.email}</a>
GitHub: <a href='${ME.github}' target='_blank' rel='noreferrer'>${ME.github}</a>
LinkedIn: <a href='${ME.linkedin}' target='_blank' rel='noreferrer'>${ME.linkedin}</a>`;

    return <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: output}} />
}