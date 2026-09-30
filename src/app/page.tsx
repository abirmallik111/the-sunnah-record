"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  ArrowRight,
  Sparkles,
  Download,
  Check,
  CheckCircle,
  Clock,
  ExternalLink,
  ShieldCheck,
  Mail,
  BookOpen,
} from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";
import { STORIES } from "@/data/stories";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Filter 3 fresh reads (excluding the featured one)
  const freshReads = STORIES.filter(
    (s) => s.slug !== "why-islam-tells-you-to-give-charity-in-secret"
  ).slice(0, 3);

  const featuredStory = STORIES.find(
    (s) => s.slug === "why-islam-tells-you-to-give-charity-in-secret"
  )!;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setDownloadSuccess(true);
    }
  };

  return (
    <main className="w-full bg-[#FCF9F8] min-h-screen">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-16 md:gap-24">
        {/* 1. WARM HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFDAD3]/70 text-[#7E2A1B] text-[13px] font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E87A64]" />
              <span>Simple Habits for Everyday Life</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.15] text-[#1B1C1C] tracking-tight font-normal">
              Timeless Sunnah habits for your busy modern life.
            </h1>

            {/* Subhead */}
            <p className="text-[17px] sm:text-[18px] text-[#56423E] max-w-xl leading-relaxed">
              Simple stories and practical guides to help you sleep better, fix
              your focus, and find daily peace through prophetic wisdom.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/stories"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#222222] text-white text-[14px] font-semibold hover:bg-black transition-all shadow-sm active:scale-95"
              >
                Read Stories
              </Link>
              <a
                href="#featured-video"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#1B1C1C] border border-[#EAEAEA] text-[14px] font-semibold shadow-xs hover:bg-[#F6F3F2] transition-all"
              >
                <span className="w-5 h-5 rounded-full bg-[#E02424] flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current text-white ml-0.5" />
                </span>
                <span>Watch Latest Video</span>
              </a>
            </div>

            {/* Trust Note */}
            <div className="flex items-center gap-2 pt-2 text-[#56423E] text-[13px]">
              <span className="w-2 h-2 rounded-full bg-[#8FA38B]" />
              <span>
                100% free companion guides & reflections • Over 125k YouTube family
              </span>
            </div>
          </div>

          {/* Right Column: Illustrated Cozy Hero Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#F6F3F2] rounded-3xl p-3 sm:p-4 shadow-sm overflow-hidden group border border-[#EAEAEA]">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE7E7] relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBziKcPAWpmDqSNVyN68TkbhxSo_M0WmOyNj2opJHXMtt6NX_yloI_PvADhQxyQlIB3UvXYslo6f_Ocb2H4fsM2xxU0oYxFRpFKHad2U6jfIcwijYO7_xSmRielgTtGWRztWgP_YZlxdKHhuC_844B_My-KPoMVZPuRHgdWy0lhaeY4d59Q7sAuGanmCBV4tPSb6nPt4IsZ22CgIWVGIGZYZeMPA0LCZjy5DvIPKyd5M0OYDmScJiIFOg"
                  alt="Cozy 2D doodle character sitting cross-legged sipping hot tea beside an open journal and serene window with soft crescent moon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Sticker Note */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-[#EAEAEA] flex items-center gap-3 max-w-[280px]">
                <div className="w-8 h-8 rounded-full bg-[#FFDAD3] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#9E412F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#1B1C1C]">
                    Episode 23 Companion
                  </span>
                  <span className="text-[12px] text-[#56423E] italic font-serif">
                    “The Science of Secret Charity”
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 'WHAT ARE YOU DEALING WITH TODAY?' TOPIC CARDS GRID */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 text-center max-w-xl mx-auto">
            <h2 className="font-serif text-[28px] sm:text-[32px] text-[#1B1C1C]">
              What are you dealing with today?
            </h2>
            <p className="text-[15px] text-[#56423E]">
              Curated everyday topics to help you navigate modern life with calm
              prophetic clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Phone & Focus */}
            <Link
              href="/stories?category=phone-focus"
              className="group p-6 rounded-2xl bg-white border border-[#EAEAEA] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#D1E6CB] flex items-center justify-center text-2xl">
                  📱
                </div>
                <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors">
                  Phone & Focus
                </h3>
                <p className="text-[14px] text-[#56423E] leading-relaxed">
                  Overcoming screen distractions, scrolling fatigue, and praying
                  with mindful presence.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F6F3F2] text-[12px] font-semibold text-[#556752]">
                  4 Guides →
                </span>
              </div>
            </Link>

            {/* Card 2: Sleep & Mornings */}
            <Link
              href="/stories?category=sleep-mornings"
              className="group p-6 rounded-2xl bg-white border border-[#EAEAEA] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#FFDAD3] flex items-center justify-center text-2xl">
                  🌙
                </div>
                <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors">
                  Sleep & Mornings
                </h3>
                <p className="text-[14px] text-[#56423E] leading-relaxed">
                  Waking up for Fajr with ease, evening wind-down rituals, and
                  circadian rhythms that work.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F6F3F2] text-[12px] font-semibold text-[#7E2A1B]">
                  6 Guides →
                </span>
              </div>
            </Link>

            {/* Card 3: Peace of Mind */}
            <Link
              href="/stories?category=peace-of-mind"
              className="group p-6 rounded-2xl bg-white border border-[#EAEAEA] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#F6DFC0] flex items-center justify-center text-2xl">
                  🤍
                </div>
                <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors">
                  Peace of Mind
                </h3>
                <p className="text-[14px] text-[#56423E] leading-relaxed">
                  Soothing daily anxiety, practicing quiet charity, and the
                  3-second pause for anger control.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F6F3F2] text-[12px] font-semibold text-[#53442E]">
                  8 Guides →
                </span>
              </div>
            </Link>

            {/* Card 4: Daily Duas */}
            <Link
              href="/daily-duas"
              className="group p-6 rounded-2xl bg-white border border-[#EAEAEA] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#D3E8CE] flex items-center justify-center text-2xl">
                  🤲
                </div>
                <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors">
                  Daily Duas
                </h3>
                <p className="text-[14px] text-[#56423E] leading-relaxed">
                  Morning and evening authentic adhkar, peace supplications, and
                  interactive tap counters.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F6F3F2] text-[12px] font-semibold text-[#51634E]">
                  12 Duas →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* 3. FEATURED STORY & VIDEO DUO */}
        <section className="flex flex-col gap-4" id="featured-video">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#F6DFC0] text-[#53442E] text-[12px] font-semibold tracking-wide">
              ⭐ This Week’s Focus
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Featured Story Card */}
            <article className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#EAEAEA] shadow-xs flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#F6F3F2] text-[12px] font-medium text-[#56423E] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    3-minute read
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFDAD3] text-[12px] font-semibold text-[#7E2A1B]">
                    ✨ Deep Dive
                  </span>
                </div>

                <h3 className="font-serif text-[24px] sm:text-[28px] text-[#1B1C1C] leading-snug">
                  {featuredStory.title}
                </h3>

                <p className="text-[15px] text-[#56423E] leading-relaxed">
                  {featuredStory.excerpt}
                </p>

                <div className="w-full h-44 rounded-2xl bg-[#F6F3F2] overflow-hidden relative border border-[#EAEAEA]">
                  <img
                    src={featuredStory.imageUrl}
                    alt={featuredStory.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/stories/${featuredStory.slug}`}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#9E412F] hover:text-[#611508] transition-colors group"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>

            {/* Right: Featured Video Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#EAEAEA] shadow-xs flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                {/* Mock Player */}
                <div
                  onClick={() => setVideoModalOpen(true)}
                  className="w-full aspect-video rounded-2xl bg-[#222222] relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-inner"
                >
                  <img
                    src={featuredStory.videoCompanion.thumbnail}
                    alt="Featured Episode Thumbnail"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#E02424] text-white text-[14px] font-semibold shadow-lg group-hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>Watch Animation (5:42)</span>
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded">
                    5:42
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-semibold text-[#E87A64] uppercase tracking-wider">
                    Animated Video Companion
                  </span>
                  <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C]">
                    Episode 23: The Science & Sunnah of Secret Charity
                  </h3>
                  <p className="text-[14px] text-[#56423E] leading-relaxed">
                    Watch our hand-illustrated 2D episode uncovering why anonymous
                    giving triggers enduring tranquility and protects sincerity.
                  </p>
                </div>
              </div>

              {/* Channel Stats Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#EAEAEA]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E87A64] flex items-center justify-center text-white">
                    <YoutubeIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-medium text-[#1B1C1C]">
                    The Sunnah Record
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-[#F6F3F2] text-[12px] font-medium text-[#56423E]">
                    125K subscribers
                  </span>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-[#E02424] text-white text-[13px] font-semibold hover:bg-[#c81e1e] transition-colors"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FRESH READS & REFLECTIONS (3-CARD GRID) */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-[28px] sm:text-[32px] text-[#1B1C1C]">
                Fresh Reads & Reflections
              </h2>
              <p className="text-[15px] text-[#56423E]">
                Calm insights and mindful habits for everyday living.
              </p>
            </div>
            <Link
              href="/stories"
              className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#9E412F] hover:text-[#611508] transition-colors"
            >
              <span>View all stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freshReads.map((story) => (
              <article
                key={story.slug}
                className="bg-white rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col group"
              >
                <div className="w-full h-48 bg-[#F6F3F2] overflow-hidden relative">
                  <img
                    src={story.imageUrl}
                    alt={story.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#1B1C1C]">
                    {story.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[12px] text-[#78716C]">
                      <span>{story.readTime}</span>
                      <span>•</span>
                      <span>Habit Guide</span>
                    </div>
                    <h3 className="font-serif text-[19px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors leading-snug">
                      <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                    </h3>
                    <p className="text-[13px] text-[#56423E] line-clamp-3 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/stories/${story.slug}`}
                      className="text-[13px] font-semibold text-[#9E412F] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. PRINTABLE 1-PAGE CHECKLIST DOWNLOAD SECTION */}
        <section className="bg-[#F6F3F2] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#EAEAEA] shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Content & Form */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D1E6CB] text-[#394B38] text-[12px] font-semibold w-max">
                <Download className="w-3.5 h-3.5" />
                <span>Free Companion Resource</span>
              </div>

              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#1B1C1C] font-normal leading-tight">
                Get the Free 1-Page Daily Sunnah Checklist
              </h2>

              <p className="text-[15px] text-[#56423E] max-w-lg leading-relaxed">
                A beautifully formatted, printable 1-page PDF habit tracker.
                Keep it beside your desk or on your bedside table to gently remind
                you of easy morning, workday, and bedtime Sunnahs.
              </p>

              {!downloadSuccess ? (
                <form
                  onSubmit={handleDownload}
                  className="flex flex-col sm:flex-row gap-2 pt-2 max-w-lg"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-white text-[#1B1C1C] border border-[#EAEAEA] text-[15px] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#E87A64]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#E87A64] text-white font-semibold text-[14px] hover:bg-[#D96B55] transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Free PDF</span>
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-[#D1E6CB] text-[#0F1F0F] flex items-center gap-3 max-w-lg">
                  <CheckCircle className="w-5 h-5 text-[#51634E] shrink-0" />
                  <span className="text-[14px]">
                    Alhamdulillah! Your 1-Page Checklist is on its way to{" "}
                    <strong>{email}</strong>.
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 text-[#78716C] text-[12px] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#8FA38B]" />
                <span>No spam, ever. 100% free forever for the Ummah.</span>
              </div>
            </div>

            {/* Checklist Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs bg-white rounded-2xl p-6 shadow-md border border-[#EAEAEA] flex flex-col gap-4 -rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center justify-between pb-3 bg-[#F6F3F2] px-3 py-2 rounded-xl">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E87A64]" />
                    <span className="text-[12px] font-bold text-[#1B1C1C]">
                      Daily Sunnah Record
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#51634E]">
                    Printable
                  </span>
                </div>

                {/* Checklist Mock Items */}
                <div className="flex flex-col gap-2.5">
                  {[
                    "Fajr prayer on time with calm wudu",
                    "Morning Adhkar & Sayyid al-Istighfar",
                    "Siwak before prayer & reading",
                    "Smiling at family or colleagues (Charity)",
                    "Surah Al-Mulk before sleeping",
                  ].map((task, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-lg bg-[#FCF9F8] border border-[#EAEAEA]/60"
                    >
                      <div className="w-5 h-5 rounded bg-[#8FA38B] flex items-center justify-center text-white shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-[12px] text-[#1B1C1C] font-medium leading-tight">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-1 text-center">
                  <span className="font-serif italic text-[#6C5C43] text-[12px]">
                    “Small, consistent deeds are most beloved to Allah.”
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal Player Teaser */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#FCF9F8] border-b border-[#EAEAEA] flex items-center justify-between">
              <span className="font-serif text-[17px] font-semibold text-[#1B1C1C]">
                Episode 23: The Science & Sunnah of Secret Charity
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-[#56423E] hover:text-[#1B1C1C] px-2 py-1 text-sm font-semibold"
              >
                ✕ Close
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Episode 23 Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 flex items-center justify-between bg-[#F6F3F2]">
              <span className="text-[13px] text-[#56423E]">
                Animated by The Sunnah Record Studio
              </span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E02424] text-white text-[13px] font-semibold"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
