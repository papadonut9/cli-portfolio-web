import { useRef } from "react";

// Autoscroll hook
export function useAutoscroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const scroll = () => ref.current?.scrollTo({ top: ref.current.scrollHeight });
  return { ref, scroll } as const;
}
