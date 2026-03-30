"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PocketWatchContextType {
  isHoveringPocketWatch: boolean;
  setIsHoveringPocketWatch: (isHovering: boolean) => void;
}

const PocketWatchContext = createContext<PocketWatchContextType | undefined>(undefined);

export function PocketWatchProvider({ children }: { children: ReactNode }) {
  const [isHoveringPocketWatch, setIsHoveringPocketWatch] = useState(false);

  return (
    <PocketWatchContext.Provider value={{ isHoveringPocketWatch, setIsHoveringPocketWatch }}>
      {children}
    </PocketWatchContext.Provider>
  );
}

export function usePocketWatchInteraction() {
  const context = useContext(PocketWatchContext);
  if (context === undefined) {
    throw new Error("usePocketWatchInteraction must be used within a PocketWatchProvider");
  }
  return context;
}
