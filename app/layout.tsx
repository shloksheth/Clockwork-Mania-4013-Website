import type { Metadata } from "next";
import { Cinzel, Libre_Baskerville } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-baskerville",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
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
  const fontVars = `${baskerville.variable} ${cinzel.variable}`;

  return (
    <html lang="en">
      <body
        className={`${fontVars} min-h-screen bg-[#080808] font-body text-text-primary antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
