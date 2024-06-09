import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Layout/Navigation";
import { Footer } from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <Navigation />
      <body className="mt-[100px]">{children}</body>
      <Footer />
    </html>
  );
}
