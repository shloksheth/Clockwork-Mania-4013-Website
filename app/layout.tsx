import type { Metadata } from "next";
import {
  Bebas_Neue,
  Syne,
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FloatingPillNav } from "@/components/layout/FloatingPillNav";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { PageTransition } from "@/components/layout/PageTransition";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FRC 4013 Clockwork Mania | Orlando Science High School",
    template: "%s | Clockwork Mania",
  },
  description:
    "FIRST Robotics Competition Team 4013 from Orlando, Florida — advancing STEM since 2012.",
  openGraph: {
    title: "FRC 4013 Clockwork Mania",
    description:
      "FIRST Robotics Competition Team 4013 from Orlando Science High School.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = `${bebasNeue.variable} ${syne.variable} ${cormorant.variable} ${playfair.variable}`;

  return (
    <html lang="en">
      <body
        className={`${fontVars} min-h-screen bg-[#0D0D0D] font-body text-text-primary antialiased`}
      >
        <SmoothScroll>
          <ProgressBar />
          <CustomCursor />
          <Nav />
          <PageTransition>{children}</PageTransition>
          <FloatingPillNav />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
