"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, Play, Users, BookOpen, Heart, Sparkles, ArrowRight } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Stories", href: "/stories" },
    { name: "Daily Duas", href: "/daily-duas" },
    { name: "Videos", href: "/videos" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* Fixed 64px Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#EAEAEA] transition-all">
        <div className="max-w-[1140px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Logo />

          {/* Center: Desktop Navigation Links (1024px+) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F5F3F2] p-1 rounded-full border border-[#EAEAEA]">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-[14px] font-medium transition-all ${
                    isActive
                      ? "bg-[#FFFFFF] text-[#9E412F] font-semibold shadow-sm"
                      : "text-[#56423E] hover:text-[#1B1C1C] hover:bg-[#FFFFFF]/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop Watch on YouTube Pill */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E87A64] text-white hover:bg-[#D96B55] transition-all text-[13px] font-semibold shadow-sm hover:shadow active:scale-95"
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current text-white ml-0.5" />
              </span>
              <span>Watch on YouTube</span>
            </a>

            {/* Mobile Hamburger Button (<1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 rounded-xl text-[#222222] hover:bg-[#F0EDED] transition-colors focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Right-Side Sliding Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[340px] bg-[#FCF9F8] shadow-2xl border-l border-[#EAEAEA] flex flex-col justify-between p-6 transform transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col gap-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EAEAEA]">
            <Logo showSubtitle={false} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 rounded-full text-[#56423E] hover:bg-[#EAEAEA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-[#89726D] uppercase tracking-wider px-3 mb-1">
              Explore Wisdom
            </span>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium transition-all ${
                    isActive
                      ? "bg-[#FFDAD3] text-[#7E2A1B] font-semibold"
                      : "text-[#222222] hover:bg-[#F5F3F2]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer & Social Community Buttons */}
        <div className="flex flex-col gap-3 pt-6 border-t border-[#EAEAEA]">
          <span className="text-[11px] font-semibold text-[#89726D] uppercase tracking-wider">
            Join Our Circle
          </span>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#E02424] text-white font-medium text-[14px] hover:bg-[#c81e1e] transition-colors shadow-sm"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>YouTube (125k)</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#FFFFFF] border border-[#EAEAEA] text-[#222222] font-medium text-[14px] hover:bg-[#F5F3F2] transition-colors"
          >
            <Users className="w-4 h-4 text-[#8FA38B]" />
            <span>Facebook Community</span>
          </a>

          <div className="pt-2 text-center">
            <p className="text-[12px] text-[#78716C] italic font-serif">
              “Simple habits for your busy modern life.”
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
