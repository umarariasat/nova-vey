import type { Metadata } from "next";
import { Outfit, Pixelify_Sans } from "next/font/google";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novavey | Small Beginning. Infinite Innovation.",
  description:
    "Novavey builds innovative digital solutions through creativity, technology, and a limitless vision.",
  keywords: [
    "Novavey",
    "Technology",
    "Software",
    "Web Development",
    "Digital Innovation",
    "AI",
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
  className={`${inter.variable} ${outfit.variable}`}
>
      <body className="min-h-full bg-[#020617] text-white font-(--font-outfit)">
        {children}
      </body>
    </html>
  );
}