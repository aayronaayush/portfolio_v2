import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aayush Deo — Software Engineer",
  description:
    "Full-stack software engineer based in Abu Dhabi. Building mobile, web, and cloud products.",
  openGraph: {
    title: "Aayush Deo — Software Engineer",
    description:
      "Full-stack software engineer based in Abu Dhabi. Building mobile, web, and cloud products.",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://aayushdeo.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
