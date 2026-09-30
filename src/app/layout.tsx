import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Sunnah Record — Timeless Sunnah Habits for Modern Life",
  description:
    "Simple stories and practical guides to help you sleep better, fix your focus, and find daily peace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${plusJakarta.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FCF9F8] text-[#1B1C1C] selection:bg-[#FFDAD3] selection:text-[#7E2A1B]">
        <Navbar />
        <div className="flex-1 w-full pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
