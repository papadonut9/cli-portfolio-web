import { useEffect, useRef } from "react";
import { KONAMI } from "@/lib/utils";

export function useKonami(onUnlock: () => void) {
  const idx = useRef(0);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const key = e.key;
      const expected = KONAMI[idx.current];
      if (key === expected) {
        idx.current += 1;
        if (idx.current === KONAMI.length) {
          onUnlock();
          idx.current = 0;
        }
      } else {
        // Reset if mismatch, but allow immediate restart if ArrowUp hit, etc.
        idx.current = key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onUnlock]);
}
