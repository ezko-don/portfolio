import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-portfolio-domain.vercel.app'), 
  title: "Esther Zawadi - Full Stack Software Engineer",
  description: "Portfolio of Esther Zawadi, a passionate full-stack software engineer and knowledge manager at Strathmore University, specializing in system development and cloud infrastructure.",
  keywords: "Esther Zawadi, Full Stack Developer, System Development, Knowledge Management, PHP, Laravel, Cloud Infrastructure, Portfolio",
  authors: [{ name: "Esther Zawadi" }],
  openGraph: {
    title: "Esther Zawadi - Full Stack Software Engineer",
    description: "Portfolio of Esther Zawadi, a passionate full-stack software engineer and knowledge manager at Strathmore University.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}