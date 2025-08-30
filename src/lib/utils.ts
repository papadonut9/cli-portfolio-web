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

// Simple ANSI-like color helpers (via CSS classes)
export const c = {
    dim: "opacity-70",
    green: "text-green-400",
    cyan: "text-cyan-300",
    magenta: "text-fuchsia-300",
    yellow: "text-yellow-300",
    red: "text-rose-300",
    gray: "text-neutral-400",
};

export const KONAMI = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

export const nowGreeting = () => {
    const h = new Date().getHours();
    if (h < 5) return "You're up late. Respect.";
    if (h < 12) return "Good morning.";
    if (h < 17) return "Good afternoon.";
    if (h < 22) return "Good evening.";
    return "Burning the midnight oil?";
};