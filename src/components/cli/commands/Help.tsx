import { c } from "@/lib/utils";

export default function Help() {
    const list = [
      `<b>help</b>                show help`,
      `<b>about</b>               who I am`,
      `<b>projects</b>            list highlighted projects`,
      `<b>project &lt;id&gt;</b>      show project details`,
      `<b>resume</b>              quick CV + PDF link`,
      `<b>contact</b>             email + links`,
      `<b>shortcuts</b>           handy aliases`,
      `<b>open &lt;alias|url&gt;</b>  open link in new tab`,
      `<b>ls</b> / <b>cat &lt;file&gt;</b>   browse tiny VFS`,
      `<b>theme &lt;dark|light&gt;</b> switch theme`,
      `<b>clear</b>               clear screen`,
      `<span class='${c.dim}'>Konami → unlocks: secrets, matrix</span>`,
    ];
    return (
        <div className="whitespace-pre-wrap">
            {list.map((s, i) => <span key={i} dangerouslySetInnerHTML={{__html: s}} />)}
        </div>
    );
}
