"use client";

import { useState } from "react";
import { BlobCursor } from "@/components/ui/BlobCursor";
import { Nav } from "@/components/layout/Nav";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { PageTransition } from "@/components/layout/PageTransition";
import { FloatingPillNav } from "@/components/layout/FloatingPillNav";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PocketWatchProvider } from "@/components/context/PocketWatchContext";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <PocketWatchProvider>
      <SmoothScroll>
        <ProgressBar />
        <BlobCursor navHeight={navHeight} />
        <Nav setNavHeight={setNavHeight} />
        <PageTransition>{children}</PageTransition>
        <FloatingPillNav />
        <Footer />
      </SmoothScroll>
    </PocketWatchProvider>
  );
}
