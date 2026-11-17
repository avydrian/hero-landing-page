import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hero Page — Built with Next.js & Tailwind",
  description: "A polished hero landing page built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
