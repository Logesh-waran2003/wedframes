import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Our Wedding Story",
  description: "A cinematic wedding storytelling experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} antialiased`}>
      <body className="min-h-full" style={{ fontFamily: "var(--font-playfair)" }}>
        {children}
      </body>
    </html>
  );
}
