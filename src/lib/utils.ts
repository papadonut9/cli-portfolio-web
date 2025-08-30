export const cTag = (txt: string, cls: string) => `<span class='${cls}'>[${txt}]</span>`;

export const escapeHtml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const openUrl = (url: string) => {
    try {
      const u = new URL(url, window.location.origin);
      window.open(u.toString(), "_blank", "noopener,noreferrer");
      return `${cTag("Opened", "text-neutral-400")} ${escapeHtml(u.toString())}`;
    } catch {
      return `${cTag("Err", "text-rose-300")} invalid URL`;
    }
};