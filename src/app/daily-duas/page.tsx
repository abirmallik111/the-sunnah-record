"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Volume2,
  CheckCircle,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  ShieldCheck,
  Repeat,
} from "lucide-react";
import { DUAS, Dua } from "@/data/duas";

export default function DailyDuasPage() {
  const [activeTab, setActiveTab] = useState<"morning" | "evening" | "sleep" | "stress">("morning");
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [arabicFontSize, setArabicFontSize] = useState<number>(26); // in px
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const tabs = [
    { id: "morning", name: "Morning Adhkar", emoji: "🌅" },
    { id: "evening", name: "Evening", emoji: "🌇" },
    { id: "sleep", name: "Before Sleep", emoji: "🌙" },
    { id: "stress", name: "Stress & Peace", emoji: "🤍" },
  ] as const;

  const currentDuas = DUAS.filter((d) => d.category === activeTab);

  // Calculate progress for current tab
  const completedCount = currentDuas.filter((d) => {
    const current = counts[d.id] || 0;
    return current >= d.repetitions;
  }).length;

  const progressPercentage =
    currentDuas.length > 0 ? (completedCount / currentDuas.length) * 100 : 0;

  const handleIncrement = (dua: Dua) => {
    const current = counts[dua.id] || 0;
    if (current < dua.repetitions) {
      setCounts({
        ...counts,
        [dua.id]: current + 1,
      });
    }
  };

  const handleResetCurrentTab = () => {
    const updated = { ...counts };
    currentDuas.forEach((d) => {
      delete updated[d.id];
    });
    setCounts(updated);
  };

  const handleCopyDua = (dua: Dua) => {
    navigator.clipboard.writeText(
      `${dua.title}\n\n${dua.arabic}\n\n${dua.translation}\n— ${dua.source}`
    );
    setCopiedId(dua.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="w-full bg-[#FCF9F8] min-h-screen">
      <div className="max-w-[880px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-8">
        {/* 1. HERO HEADER */}
        <section className="text-center flex flex-col items-center gap-3">
          <nav className="flex items-center gap-2 text-[13px] text-[#56423E]">
            <Link href="/" className="hover:text-[#9E412F] transition-colors">
              Home
            </Link>
            <span className="text-[#89726D]">/</span>
            <span className="font-semibold text-[#1B1C1C]">Daily Duas</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F3F2] text-[#56423E] text-[12px] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#E87A64]" />
            <span>Sacred Morning & Evening Remembrances</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] text-[#1B1C1C] tracking-tight leading-tight">
            Daily Duas & Peaceful Adhkar
          </h1>

          <p className="text-[16px] text-[#56423E] max-w-[620px] leading-relaxed">
            Authentic prophetic words for morning, evening, and moments of daily
            stress. Simple to read, easy to remember, and woven into quiet contemplation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-[#56423E] py-2 px-5 bg-white rounded-full border border-[#EAEAEA] shadow-xs">
            <span className="flex items-center gap-1.5 text-[#15803D] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#15803D]" />
              100% Sahih & Hasan citations
            </span>
            <span className="w-1 h-1 rounded-full bg-[#DCC0BB]" />
            <span className="flex items-center gap-1.5 text-[#51634E]">
              <Repeat className="w-3.5 h-3.5" />
              Interactive tap counter
            </span>
          </div>
        </section>

        {/* 2. CATEGORY SELECTOR & CONTROLS */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F5F3F2] rounded-full border border-[#EAEAEA] overflow-x-auto max-w-full">
              {tabs.map((tab) => {
                const count = DUAS.filter((d) => d.category === tab.id).length;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-[#E87A64] text-white shadow-xs"
                        : "text-[#56423E] hover:text-[#1B1C1C] hover:bg-white"
                    }`}
                  >
                    <span>{tab.emoji}</span>
                    <span>{tab.name}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                        activeTab === tab.id
                          ? "bg-white/20 text-white"
                          : "bg-[#EAEAEA] text-[#78716C]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Utility Toggles: Phonetics & Font Size */}
            <div className="flex items-center gap-3">
              {/* Transliteration toggle */}
              <button
                type="button"
                onClick={() => setShowTransliteration(!showTransliteration)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-all ${
                  showTransliteration
                    ? "bg-[#D1E6CB] text-[#0F1F0F] border-[#8FA38B]"
                    : "bg-white text-[#78716C] border-[#EAEAEA]"
                }`}
              >
                Phonetics {showTransliteration ? "ON" : "OFF"}
              </button>

              {/* Arabic Font Size */}
              <div className="flex items-center bg-white px-2 py-1 rounded-full border border-[#EAEAEA] gap-1 shadow-xs">
                <button
                  type="button"
                  onClick={() => setArabicFontSize((prev) => Math.max(20, prev - 2))}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#56423E] hover:bg-[#F6F3F2] text-[12px] font-bold"
                  title="Smaller Arabic text"
                >
                  A-
                </button>
                <span className="w-px h-3 bg-[#EAEAEA]" />
                <button
                  type="button"
                  onClick={() => setArabicFontSize((prev) => Math.min(38, prev + 2))}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#56423E] hover:bg-[#F6F3F2] text-[14px] font-bold"
                  title="Larger Arabic text"
                >
                  A+
                </button>
              </div>
            </div>
          </div>

          {/* 3. PROGRESS TRACKER BANNER */}
          <div className="w-full bg-white rounded-2xl p-5 border border-[#EAEAEA] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-[#FFDAD3] flex items-center justify-center shrink-0 text-[#9E412F]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-semibold text-[#1B1C1C]">
                    {tabs.find((t) => t.id === activeTab)?.name} Progress
                  </span>
                  <span className="text-[12px] px-2 py-0.5 rounded-full bg-[#F6F3F2] text-[#6C5C43] font-mono">
                    {completedCount} of {currentDuas.length} completed
                  </span>
                </div>
                <p className="text-[12px] text-[#56423E]">
                  A gentle routine of light upon light.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-60">
              <div className="w-full bg-[#F0EDED] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#E87A64] h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <button
                type="button"
                onClick={handleResetCurrentTab}
                className="shrink-0 text-[12px] text-[#78716C] hover:text-[#9E412F] transition-colors flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </section>

        {/* 4. DUA CARDS STREAM */}
        <section className="flex flex-col gap-6">
          {currentDuas.map((dua) => {
            const currentCount = counts[dua.id] || 0;
            const isCompleted = currentCount >= dua.repetitions;

            return (
              <article
                key={dua.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-xs transition-all duration-200 ${
                  isCompleted ? "border-[#8FA38B]/50 bg-[#FCFDFB]" : "border-[#EAEAEA]"
                }`}
              >
                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#FFDAD3] text-[#7E2A1B] text-[11px] font-semibold">
                      {dua.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F0FDF4] text-[#15803D] text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                      {dua.source}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyDua(dua)}
                      className="w-8 h-8 rounded-full bg-[#F6F3F2] hover:bg-[#EAEAEA] flex items-center justify-center text-[#56423E] transition-colors"
                      title="Copy Dua text"
                    >
                      {copiedId === dua.id ? (
                        <Check className="w-3.5 h-3.5 text-[#15803D]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-serif text-[22px] sm:text-[24px] text-[#1B1C1C] tracking-tight mb-4">
                  {dua.title}{" "}
                  <span className="text-[16px] italic text-[#6C5C43] font-normal font-sans">
                    {dua.subtitle}
                  </span>
                </h2>

                {/* Arabic Text Box (RTL) */}
                <div className="bg-[#F6F3F2]/80 rounded-2xl p-6 sm:p-7 mb-4 border border-[#EAEAEA]/70">
                  <p
                    className="font-arabic text-right text-[#1B1C1C] font-normal select-text tracking-wide leading-[2.2]"
                    dir="rtl"
                    style={{ fontSize: `${arabicFontSize}px` }}
                  >
                    {dua.arabic}
                  </p>
                </div>

                {/* Transliteration Box */}
                {showTransliteration && (
                  <div className="bg-white rounded-xl p-3.5 mb-4 text-[#56423E] italic text-[13px] sm:text-[14px] leading-relaxed border border-[#EAEAEA]">
                    <span className="font-mono text-[10px] not-italic text-[#89726D] uppercase tracking-wider block mb-1 font-semibold">
                      Phonetic Transliteration
                    </span>
                    {dua.transliteration}
                  </div>
                )}

                {/* English Translation */}
                <div className="mb-4 pl-3 border-l-2 border-[#D9C3A5]">
                  <p className="text-[15px] sm:text-[16px] text-[#1B1C1C] leading-relaxed">
                    {dua.translation}
                  </p>
                </div>

                {/* Benefit / Virtue Box */}
                <div className="bg-[#F6F3F2] rounded-xl p-4 flex items-start gap-2.5 mb-5 text-[13px] text-[#56423E] leading-relaxed">
                  <span className="select-none text-base">💡</span>
                  <p>
                    <strong className="text-[#6C5C43] font-semibold">
                      Virtue:{" "}
                    </strong>
                    {dua.benefit}
                  </p>
                </div>

                {/* Interactive Repetition Counter Button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#EAEAEA]">
                  <div className="flex items-center gap-1.5 text-[12px] text-[#78716C]">
                    <Repeat className="w-3.5 h-3.5 text-[#6C5C43]" />
                    <span>Recite {dua.repetitions} time{dua.repetitions > 1 ? "s" : ""}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleIncrement(dua)}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all shadow-xs active:scale-95 ${
                      isCompleted
                        ? "bg-[#D1E6CB] text-[#0F1F0F]"
                        : "bg-[#E87A64] text-white hover:bg-[#D96B55]"
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-[#15803D]" />
                        <span>Completed ✓ ({dua.repetitions}/{dua.repetitions})</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span>
                          {currentCount === 0
                            ? `Read ${dua.repetitions}x`
                            : `${currentCount}/${dua.repetitions} Tap to Count`}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
