import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Esther Zawadi - Student & Tech Enthusiast",
  description: "Portfolio of Esther Zawadi, a passionate student at Strathmore University, exploring software development and technology through studies and internship.",
  keywords: "Esther Zawadi, Student, Software Development, Strathmore University, Portfolio, Technology",
  authors: [{ name: "Esther Zawadi" }],
  openGraph: {
    title: "Esther Zawadi - Student & Tech Enthusiast",
    description: "Portfolio of Esther Zawadi, a passionate student exploring software development and technology at Strathmore University.",
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
        <ThemeProvider>
          {/* <AnimatedBackground /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}