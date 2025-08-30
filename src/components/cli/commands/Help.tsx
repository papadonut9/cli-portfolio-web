import { c } from "@/lib/utils";

export default function Help() {
    const list = [
      `<b>help</b>                show help<br>`,
      `<b>about</b>               who I am<br>`,
      `<b>projects</b>            list highlighted projects<br>`,
      `<b>project &lt;id&gt;</b>        show project details<br>`,
      `<b>resume</b>              quick CV + PDF link<br>`,
      `<b>contact</b>             email + links<br>`,
      `<b>shortcuts</b>           handy aliases<br>`,
      `<b>open &lt;alias|url&gt;</b>    open link in new tab<br>`,
      `<b>ls</b> / <b>cat &lt;file&gt;</b>     browse tiny VFS<br>`,
      `<b>theme &lt;dark|light&gt;</b>  switch theme<br>`,
      `<b>clear</b>               clear screen<br>`,
      `<span class='${c.dim}'>Konami → unlocks: secrets, matrix</span><br>`,
    ];
    return (
        <div className="whitespace-pre-wrap">
            {list.map((s, i) => <span key={i} dangerouslySetInnerHTML={{__html: s}} />)}
        </div>
    );
}
