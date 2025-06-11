import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Esther Kadenge - Full Stack Software Engineer",
  description: "Portfolio of Esther Kadenge, a passionate full-stack software engineer and knowledge manager at Strathmore University, specializing in system development and cloud infrastructure.",
  keywords: "Esther Kadenge, Full Stack Developer, System Development, Knowledge Management, PHP, Laravel, Cloud Infrastructure, Portfolio",
  authors: [{ name: "Esther Kadenge" }],
  openGraph: {
    title: "Esther Kadenge - Full Stack Software Engineer",
    description: "Portfolio of Esther Kadenge, a passionate full-stack software engineer and knowledge manager at Strathmore University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}