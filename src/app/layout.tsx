import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian Santiago Vila · Portfolio",
  description:
    "Portfolio personal de Ian Santiago Vila, desarrollador backend y fullstack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} relative min-h-screen overflow-x-hidden antialiased`}
      >
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
