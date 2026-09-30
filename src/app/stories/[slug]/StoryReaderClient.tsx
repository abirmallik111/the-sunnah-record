"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Share2,
  Bookmark,
  Copy,
  Check,
  Play,
  Download,
  Sparkles,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";
import { Story } from "@/data/stories";

interface StoryReaderClientProps {
  story: Story;
  allStories: Story[];
}

export default function StoryReaderClient({
  story,
  allStories,
}: StoryReaderClientProps) {
  // Action checklist state saved to localStorage
  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMatn, setCopiedMatn] = useState(false);
  const [email, setEmail] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`story_actions_${story.slug}`);
      if (stored) {
        setCompletedActions(JSON.parse(stored));
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, [story.slug]);

  // Toggle action completion
  const toggleAction = (actionId: string) => {
    const updated = {
      ...completedActions,
      [actionId]: !completedActions[actionId],
    };
    setCompletedActions(updated);
    try {
      localStorage.setItem(`story_actions_${story.slug}`, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCopyMatn = () => {
    navigator.clipboard.writeText(
      `${story.hadith.arabic}\n\n${story.hadith.english}\n— ${story.hadith.source}`
    );
    setCopiedMatn(true);
    setTimeout(() => setCopiedMatn(false), 2000);
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setDownloadSuccess(true);
    }
  };

  // Find next and previous stories
  const currentIndex = allStories.findIndex((s) => s.slug === story.slug);
  const prevStory =
    currentIndex > 0 ? allStories[currentIndex - 1] : allStories[allStories.length - 1];
  const nextStory =
    currentIndex < allStories.length - 1 ? allStories[currentIndex + 1] : allStories[0];

  return (
    <article className="max-w-[760px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Top Breadcrumb & Return Link */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/stories"
          className="inline-flex items-center gap-1.5 text-[14px] text-[#56423E] hover:text-[#9E412F] transition-colors group font-medium"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all stories</span>
        </Link>
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#89726D]">
          Archival Record #{story.videoCompanion.episode.replace("Episode ", "")}
        </span>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        {/* Tag Row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#FFDAD3] text-[#7E2A1B] text-[12px] font-semibold">
            {story.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F6F3F2] text-[#56423E] text-[12px] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {story.readTime}
          </span>
          <span className="text-[12px] text-[#78716C]">{story.updatedAt}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-[32px] sm:text-[42px] leading-[1.2] text-[#1B1C1C] mb-4 tracking-tight">
          {story.title}
        </h1>

        {/* Subtitle / Empathetic Hook */}
        <p className="font-serif italic text-[18px] sm:text-[20px] text-[#56423E] leading-relaxed mb-6">
          {story.subtitle}
        </p>

        {/* Author / Source Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#F6F3F2] border border-[#EAEAEA]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E87A64] text-white flex items-center justify-center font-serif text-[16px] font-bold shadow-xs">
              SR
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#1B1C1C] flex items-center gap-1.5">
                <span>The Editorial Circle</span>
                <span className="text-[#8FA38B]">✓</span>
              </div>
              <div className="text-[12px] text-[#78716C]">
                Illustrated Field Companion • {story.hadith.source}
              </div>
            </div>
          </div>

          {/* Social Share & Copy Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#56423E] hover:text-[#1B1C1C] border border-[#EAEAEA] text-[12px] font-semibold transition-all shadow-xs"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#51634E]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                story.title
              )}&url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="p-2 rounded-full bg-white text-[#56423E] hover:text-[#1B1C1C] border border-[#EAEAEA] shadow-xs transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Doodle Illustration Frame */}
      <figure className="mb-12">
        <div className="w-full rounded-2xl overflow-hidden bg-[#F6F3F2] border border-[#EAEAEA] shadow-xs">
          <img
            src={story.imageUrl}
            alt={story.imageAlt}
            className="w-full h-auto max-h-[460px] object-cover mx-auto"
          />
        </div>
        <figcaption className="mt-2 text-center text-[12px] text-[#78716C] italic font-serif">
          {story.episodeTag}: Hand-illustrated 2D companion reflection.
        </figcaption>
      </figure>

      {/* 4-PART STORYTELLING BODY */}
      <div className="flex flex-col gap-12 text-[#1B1C1C]">
        {/* PART 1: THE DAILY STRUGGLE */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E412F] font-bold">
              Part 01
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1B1C1C]">
              The Daily Struggle
            </h2>
          </div>

          {story.struggleText.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[16px] sm:text-[18px] leading-[1.8] text-[#333333]"
            >
              {idx === 0 && (
                <span className="float-left font-serif text-[48px] leading-[40px] pr-2.5 pt-1 text-[#9E412F] font-bold">
                  {paragraph.charAt(0)}
                </span>
              )}
              {idx === 0 ? paragraph.slice(1) : paragraph}
            </p>
          ))}
        </section>

        {/* PART 2: WHAT THE SUNNAH TEACHES */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E412F] font-bold">
              Part 02
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1B1C1C]">
              What the Sunnah Teaches
            </h2>
          </div>

          {story.sunnahText.map((p, idx) => (
            <p
              key={idx}
              className="text-[16px] sm:text-[18px] leading-[1.8] text-[#333333]"
            >
              {p}
            </p>
          ))}

          {/* Authentic Hadith Archival Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAEAEA] shadow-sm relative overflow-hidden my-4">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#E87A64]" />

            {/* Metatags */}
            <div className="flex items-center justify-between mb-4 pl-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F3F2] text-[#56423E] text-[12px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87A64]" />
                Prophetic Hadith
              </span>
              <span className="px-3 py-1 rounded-full bg-[#D1E6CB] text-[#394B38] text-[12px] font-bold">
                {story.hadith.grading}
              </span>
            </div>

            {/* Arabic Matn (RTL) */}
            <div
              className="font-arabic text-[26px] sm:text-[30px] leading-[2.2] text-right text-[#1B1C1C] py-4 pl-2 font-normal select-text tracking-wide"
              dir="rtl"
            >
              {story.hadith.arabic}
            </div>

            {/* English Translation */}
            <div className="mt-4 pt-4 border-t border-[#EAEAEA] pl-2">
              <p className="font-serif italic text-[18px] sm:text-[20px] text-[#1B1C1C] leading-relaxed">
                {story.hadith.english}
              </p>
            </div>

            {/* Card Footer Citation & Copy */}
            <div className="mt-6 pt-3 border-t border-[#EAEAEA] pl-2 flex flex-wrap items-center justify-between gap-3 text-[12px]">
              <div className="flex items-center gap-2 text-[#78716C]">
                <span>{story.hadith.book}</span>
                <span>•</span>
                <span>{story.hadith.narrator}</span>
              </div>
              <button
                onClick={handleCopyMatn}
                className="text-[#9E412F] hover:text-[#611508] font-semibold flex items-center gap-1 transition-colors"
              >
                {copiedMatn ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied Hadith</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Matn</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* PART 3: WHAT SCIENCE FOUND */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E412F] font-bold">
              Part 03
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1B1C1C]">
              What Science Found
            </h2>
          </div>

          <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C]">
            {story.science.title}
          </h3>

          <blockquote className="bg-[#F6F3F2] p-5 sm:p-6 rounded-2xl border-l-4 border-[#8FA38B]">
            <p className="text-[15px] sm:text-[16px] text-[#222222] italic leading-relaxed">
              &ldquo;{story.science.quote}&rdquo;
            </p>
            <cite className="block mt-2 text-[12px] font-semibold text-[#51634E] not-italic">
              — {story.science.source}
            </cite>
          </blockquote>

          {/* Visual Science Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            <div className="bg-white rounded-2xl p-5 border border-[#EAEAEA] flex flex-col justify-between gap-2 shadow-xs">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#BA1A1A] font-bold block mb-1">
                  Public Exposure Loop
                </span>
                <h4 className="font-serif text-[17px] font-semibold text-[#1B1C1C] mb-1">
                  {story.science.publicGivingTitle}
                </h4>
                <p className="text-[13px] text-[#56423E] leading-relaxed">
                  {story.science.publicGivingDesc}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#D1E6CB] bg-[#F6F9F5] flex flex-col justify-between gap-2 shadow-xs">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#394B38] font-bold block mb-1">
                  Quiet Prophetic Sunnah
                </span>
                <h4 className="font-serif text-[17px] font-semibold text-[#1B1C1C] mb-1">
                  {story.science.secretGivingTitle}
                </h4>
                <p className="text-[13px] text-[#394B38] leading-relaxed">
                  {story.science.secretGivingDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PART 4: 3 SIMPLE ACTIONS FOR TODAY (INTERACTIVE CHECKLIST) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E412F] font-bold">
              Part 04
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1B1C1C]">
              3 Simple Actions for Today
            </h2>
          </div>

          <p className="text-[15px] text-[#56423E]">
            Transforming knowledge into daily habit takes micro-steps. Tap each
            item when you complete it today (progress saves automatically):
          </p>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAEAEA] shadow-sm flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAEAEA]">
              <span className="font-serif text-[18px] font-semibold text-[#1B1C1C]">
                Your Daily Action Checklist
              </span>
              <span className="text-[12px] font-semibold text-[#51634E] bg-[#D1E6CB] px-3 py-1 rounded-full">
                {Object.values(completedActions).filter(Boolean).length} of{" "}
                {story.actions.length} Completed
              </span>
            </div>

            <div className="space-y-4">
              {story.actions.map((act) => {
                const isChecked = !!completedActions[act.id];
                return (
                  <div
                    key={act.id}
                    onClick={() => toggleAction(act.id)}
                    className={`flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all border ${
                      isChecked
                        ? "bg-[#F4F8F3] border-[#8FA38B]"
                        : "bg-[#FCF9F8] border-[#EAEAEA] hover:border-[#D9C3A5]"
                    }`}
                  >
                    {/* Custom rounded checkbox */}
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                        isChecked
                          ? "bg-[#8FA38B] text-white"
                          : "border-2 border-[#D9C3A5] bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>

                    <div className="flex-1 flex flex-col gap-1">
                      <h4
                        className={`text-[15px] font-semibold ${
                          isChecked
                            ? "line-through text-[#78716C]"
                            : "text-[#1B1C1C]"
                        }`}
                      >
                        {act.number}. {act.title}
                      </h4>
                      <p className="text-[13px] text-[#56423E] leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EMBEDDED VIDEO COMPANION PLAYER BANNER */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAEAEA] shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div
              onClick={() => setVideoModalOpen(true)}
              className="w-full md:w-1/2 relative rounded-2xl overflow-hidden aspect-video bg-[#222222] shadow-sm group cursor-pointer"
            >
              <img
                src={story.videoCompanion.thumbnail}
                alt={story.videoCompanion.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#E02424] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono">
                {story.videoCompanion.duration}
              </span>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#E87A64] font-bold">
                Animated Companion
              </span>
              <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C] leading-snug">
                {story.videoCompanion.title}
              </h3>
              <p className="text-[13px] text-[#56423E] leading-relaxed">
                {story.videoCompanion.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-[#E02424] text-white text-[13px] font-semibold hover:bg-[#c81e1e] transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video</span>
                </button>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#F6F3F2] text-[#1B1C1C] border border-[#EAEAEA] text-[13px] font-medium hover:bg-white transition-colors"
                >
                  Subscribe (125k)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT & PREVIOUS GUIDES NAVIGATION */}
        <section className="pt-4 border-t border-[#EAEAEA]">
          <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#89726D] mb-4">
            Continue Contemplating
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous */}
            <Link
              href={`/stories/${prevStory.slug}`}
              className="p-5 bg-white rounded-2xl border border-[#EAEAEA] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between gap-2"
            >
              <span className="text-[12px] text-[#78716C] flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Field Note
              </span>
              <h5 className="font-serif text-[17px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors leading-snug">
                {prevStory.title}
              </h5>
              <span className="text-[11px] text-[#8FA38B] font-medium">
                {prevStory.readTime} • {prevStory.category}
              </span>
            </Link>

            {/* Next */}
            <Link
              href={`/stories/${nextStory.slug}`}
              className="p-5 bg-white rounded-2xl border border-[#EAEAEA] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between gap-2 text-right sm:text-left"
            >
              <span className="text-[12px] text-[#78716C] flex items-center justify-end sm:justify-start gap-1">
                Next Field Note <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <h5 className="font-serif text-[17px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors leading-snug">
                {nextStory.title}
              </h5>
              <span className="text-[11px] text-[#8FA38B] font-medium">
                {nextStory.readTime} • {nextStory.category}
              </span>
            </Link>
          </div>
        </section>

        {/* 1-PAGE CHECKLIST SIGNUP CALLOUT */}
        <section className="bg-[#FFDAD3]/40 rounded-3xl p-6 sm:p-8 text-center border border-[#FFDAD3]">
          <div className="max-w-[460px] mx-auto flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E87A64] text-white flex items-center justify-center shadow-xs">
              <Download className="w-5 h-5" />
            </div>

            <h3 className="font-serif text-[22px] sm:text-[24px] text-[#1B1C1C]">
              Practice These Quietly Every Morning
            </h3>

            <p className="text-[14px] text-[#56423E] leading-relaxed">
              Download the free, printable 1-Page Daily Sunnah Habit Checklist.
              Formatted for journals, desks, and notebook inserts.
            </p>

            {!downloadSuccess ? (
              <form
                onSubmit={handleDownload}
                className="flex flex-col sm:flex-row gap-2 w-full pt-1"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#EAEAEA] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E87A64]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#E87A64] text-white text-[13px] font-semibold hover:bg-[#D96B55] transition-colors shadow-xs"
                >
                  Get Free PDF
                </button>
              </form>
            ) : (
              <div className="p-3 bg-[#D1E6CB] rounded-xl text-[#0F1F0F] text-[13px] font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#51634E]" />
                <span>Check your inbox! Your printable checklist has been dispatched.</span>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Video Modal Player */}
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
                {story.videoCompanion.title}
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
                title={story.videoCompanion.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 flex items-center justify-between bg-[#F6F3F2]">
              <span className="text-[13px] text-[#56423E]">
                The Sunnah Record Animated Companion
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
    </article>
  );
}
