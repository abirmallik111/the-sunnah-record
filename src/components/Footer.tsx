import React from "react";
import Link from "next/link";
import { Users, ShieldCheck, Heart } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F3F2] border-t border-[#EAEAEA] mt-20">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 py-12 flex flex-col items-center text-center gap-6">
        {/* Soft Archival Quote */}
        <p className="font-serif italic text-[18px] sm:text-[20px] text-[#6C5C43] max-w-xl leading-relaxed">
          “Made with sincere intention to make practicing the Sunnah simple, accessible, and joyful.”
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-medium text-[#56423E] hover:text-[#9E412F] transition-colors"
          >
            <YoutubeIcon className="w-4 h-4 text-[#E02424]" />
            <span>YouTube Channel</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-medium text-[#56423E] hover:text-[#9E412F] transition-colors"
          >
            <Users className="w-4 h-4 text-[#8FA38B]" />
            <span>Community Circle</span>
          </a>
          <Link
            href="/about"
            className="flex items-center gap-2 text-[13px] font-medium text-[#56423E] hover:text-[#9E412F] transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-[#9E412F]" />
            <span>Our Sourcing & Amanah</span>
          </Link>
        </div>

        {/* Subtle Divider */}
        <div className="w-12 h-px bg-[#DCC0BB] my-1" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-[12px] text-[#78716C]">
          <span>© {new Date().getFullYear()} The Sunnah Record. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            Built with calm mindfulness <Heart className="w-3 h-3 text-[#E87A64] fill-current" />
          </span>
        </div>
      </div>
    </footer>
  );
}
