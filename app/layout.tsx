import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Layout/Navigation";
import { Footer } from "@/components/Layout/Footer";

const montserrat = Montserrat({ subsets: ["latin"], fallback: ['arial'] });

export const metadata: Metadata = {
  title: "Xfin",
  description: "Welcome To Xfin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <Navigation />
      <body className={`mt-[100px] ${montserrat.className}`}>{children}</body>
      <Footer />
    </html>
  );
}
