import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/useTranslation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  fallback: ["Courier New", "Courier", "monospace"],
});

export const metadata: Metadata = {
  title: "Carlos M Janon — Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Carlos M Janon. From legal precision to agentic architecture. Full Stack Developer specialized in React, Next.js & AI Engineering.",
  keywords: [
    "Carlos Janon",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
