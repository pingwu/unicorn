import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// ============================================================
// METADATA - Update with your information
// Prompt: "Update the page title and description for SEO"
// ============================================================
export const metadata: Metadata = {
  title: "Your Name - Your Professional Title | Your Services",
  description: "Your value proposition in 150-160 characters. What do you do and who do you help?",
  keywords: ["Keyword 1", "Keyword 2", "Keyword 3", "Keyword 4"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
