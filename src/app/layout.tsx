import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NestQuest | Roommate & PG Marketplace",
  description: "Find your people. Find your place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased dark`}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
