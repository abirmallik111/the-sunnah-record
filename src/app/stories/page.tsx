"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Clock,
  ArrowRight,
  Bookmark,
  Sparkles,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import { STORIES, Story } from "@/data/stories";

function StoriesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = [
    { id: "all", name: "All Stories", emoji: "✨" },
    { id: "phone-focus", name: "Phone & Focus", emoji: "📱" },
    { id: "sleep-mornings", name: "Sleep & Mornings", emoji: "🌙" },
    { id: "peace-of-mind", name: "Peace of Mind", emoji: "🤍" },
    { id: "fasting", name: "Fasting", emoji: "🌿" },
    { id: "charity", name: "Charity", emoji: "🤲" },
  ];

  // Primary featured story for the spotlight banner
  const spotlightStory = STORIES[0];

  const filteredStories = useMemo(() => {
    return STORIES.filter((story) => {
      const matchesCategory =
        activeCategory === "all" || story.categorySlug === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        story.title.toLowerCase().includes(q) ||
        story.subtitle.toLowerCase().includes(q) ||
        story.excerpt.toLowerCase().includes(q) ||
        story.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-10">
      {/* Header & Breadcrumb */}
      <section className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
        <nav className="flex items-center gap-2 text-[13px] text-[#56423E]">
          <Link href="/" className="hover:text-[#9E412F] transition-colors">
            Home
          </Link>
          <span className="text-[#89726D]">/</span>
          <span className="font-semibold text-[#1B1C1C]">Stories & Guides</span>
        </nav>

        <h1 className="font-serif text-[34px] sm:text-[44px] text-[#1B1C1C] tracking-tight leading-tight">
          Stories & Practical Guides
        </h1>

        <p className="text-[16px] text-[#56423E] leading-relaxed">
          Bite-sized reflections combining authentic Sunnah, relatable everyday
          struggles, and simple modern science.
        </p>

        {/* Search Input Bar */}
        <div className="w-full max-w-xl relative mt-4">
          <Search className="w-5 h-5 text-[#89726D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, habits, or questions... (e.g. sleep, anger, phone, charity)"
            className="w-full pl-12 pr-12 py-3.5 bg-white text-[#1B1C1C] placeholder:text-[#89726D] text-[15px] rounded-2xl border border-[#EAEAEA] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#E87A64]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-semibold text-[#89726D] hover:text-[#1B1C1C]"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Category Filter Pills Row */}
      <section className="w-full overflow-x-auto scrollbar-none py-1">
        <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all shadow-xs ${
                activeCategory === cat.id
                  ? "bg-[#222222] text-white"
                  : "bg-white text-[#56423E] hover:text-[#1B1C1C] hover:bg-[#F6F3F2] border border-[#EAEAEA]"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Spotlight Card */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#9E412F] text-[12px] font-bold tracking-wider uppercase flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#E87A64]" />
              Editor’s Pick This Month
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-[#EAEAEA] shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col lg:flex-row">
            {/* Left Column: 60% */}
            <div className="lg:w-[60%] p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#FFDAD3] text-[#7E2A1B] text-[12px] font-semibold">
                    Deep Dive
                  </span>
                  <span className="text-[12px] text-[#78716C] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 3 min read
                  </span>
                  <span className="text-[#DCC0BB]">•</span>
                  <span className="text-[12px] text-[#78716C]">
                    Peace of Mind
                  </span>
                </div>

                <h2 className="font-serif text-[26px] sm:text-[32px] text-[#1B1C1C] leading-snug">
                  <Link
                    href={`/stories/${spotlightStory.slug}`}
                    className="hover:text-[#9E412F] transition-colors"
                  >
                    {spotlightStory.title}
                  </Link>
                </h2>

                <p className="text-[15px] text-[#56423E] leading-relaxed">
                  {spotlightStory.excerpt}
                </p>

                {/* Hadith Soft Box */}
                <div className="bg-[#F6F3F2] rounded-2xl p-4 sm:p-5 border-l-4 border-[#E87A64] my-2">
                  <p className="font-serif italic text-[16px] text-[#1B1C1C] mb-2 leading-relaxed">
                    {spotlightStory.hadith.english}
                  </p>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-[#51634E] font-medium">
                      — {spotlightStory.hadith.source}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#D1E6CB] text-[#394B38] font-bold text-[11px]">
                      {spotlightStory.hadith.grading}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href={`/stories/${spotlightStory.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E87A64] text-white text-[13px] font-semibold hover:bg-[#D96B55] transition-colors shadow-xs"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <span className="text-[12px] text-[#78716C]">
                  The Editorial Circle
                </span>
              </div>
            </div>

            {/* Right Column: 40% Visual frame */}
            <div className="lg:w-[40%] bg-[#F6F3F2] relative min-h-[260px] lg:min-h-full flex items-center justify-center p-6 border-t lg:border-t-0 lg:border-l border-[#EAEAEA]">
              <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-xs">
                <img
                  src={spotlightStory.imageUrl}
                  alt={spotlightStory.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid Header & Count */}
      <section className="flex items-center justify-between pt-4 border-t border-[#EAEAEA]">
        <div className="flex items-center gap-2">
          <h2 className="font-serif text-[22px] sm:text-[26px] text-[#1B1C1C]">
            {activeCategory === "all" ? "All Reflections" : "Filtered Reflections"}
          </h2>
          <span className="px-2.5 py-0.5 rounded-full bg-[#F6F3F2] text-[12px] font-semibold text-[#56423E]">
            {filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"}
          </span>
        </div>

        {searchQuery && (
          <span className="text-[13px] text-[#78716C]">
            Results for: &ldquo;{searchQuery}&rdquo;
          </span>
        )}
      </section>

      {/* 3-Column Responsive Story Card Grid */}
      {filteredStories.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <article
              key={story.slug}
              className="group bg-white rounded-2xl border border-[#EAEAEA] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
            >
              <div className="w-full h-52 bg-[#F6F3F2] overflow-hidden relative">
                <img
                  src={story.imageUrl}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#1B1C1C] shadow-xs">
                  {story.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[12px] text-[#78716C]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {story.readTime}
                    </span>
                    <span>•</span>
                    <span>{story.updatedAt}</span>
                  </div>

                  <h3 className="font-serif text-[19px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors leading-snug">
                    <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                  </h3>

                  <p className="text-[13px] text-[#56423E] line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAEAEA] flex items-center justify-between">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="inline-flex items-center gap-1 text-[#9E412F] text-[13px] font-semibold group-hover:underline"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] font-medium text-[#78716C] bg-[#F6F3F2] px-2 py-0.5 rounded-full">
                    {story.episodeTag || "Companion Guide"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-[#EAEAEA]">
          <p className="font-serif text-[20px] text-[#1B1C1C] mb-2">
            No reflections found for &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-[14px] text-[#56423E] mb-4">
            Try searching for &ldquo;sleep&rdquo;, &ldquo;phone&rdquo;, &ldquo;anger&rdquo;, or &ldquo;charity&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-5 py-2 rounded-full bg-[#E87A64] text-white text-[13px] font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function StoriesPage() {
  return (
    <main className="w-full bg-[#FCF9F8] min-h-screen">
      <Suspense fallback={<div className="p-12 text-center">Loading stories...</div>}>
        <StoriesContent />
      </Suspense>
    </main>
  );
}
