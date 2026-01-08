import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Southentic Cafe - South Indian Breakfast & Chinese Cuisine | Electronic City",
  description: "Authentic South Indian breakfast & Chinese cuisine. Dosas, momos, fried rice & more. Located in Electronic City, Bengaluru.",
  keywords: ["South Indian", "Dosa", "Chinese Food", "Momos", "Fried Rice", "Noodles", "Breakfast", "Electronic City", "Bengaluru", "Cafe"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
