"use client";

import { useEffect, useState } from "react";

/** Defaults to true (mobile) until mounted to avoid sticky desktop flash on phones. */
export function useMediaQuery(query: string, defaultValue = true) {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const sync = () => setMatches(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [query]);

  return matches;
}
