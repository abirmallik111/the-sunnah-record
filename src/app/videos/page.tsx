"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Play,
  Search,
  Clock,
  Sparkles,
  ArrowRight,
  Bookmark,
  Share2,
  Check,
} from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";
import { VIDEOS, VideoEpisode } from "@/data/videos";

export default function VideosPage() {
  const [activeTopic, setActiveTopic] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null);
  const [videoModalTitle, setVideoModalTitle] = useState<string>("");

  const topics = [
    { id: "all", label: "All Videos (24)" },
    { id: "mind", label: "Mind & Focus (7)" },
    { id: "sleep", label: "Sleep & Tahajjud (5)" },
    { id: "charity", label: "Charity & Ethics (6)" },
    { id: "daily", label: "Daily Sunnahs (6)" },
  ];

  const featuredVideo = VIDEOS[0]; // Episode 24

  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((v) => {
      const matchesTopic = activeTopic === "all" || v.topic === activeTopic;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        v.title.toLowerCase().includes(q) ||
        v.summary.toLowerCase().includes(q) ||
        v.topicLabel.toLowerCase().includes(q);

      return matchesTopic && matchesSearch;
    });
  }, [activeTopic, searchQuery]);

  const openPlayer = (video: VideoEpisode) => {
    setVideoModalUrl("https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1");
    setVideoModalTitle(video.title);
  };

  return (
    <main className="w-full bg-[#FCF9F8] min-h-screen">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-10">
        {/* Top Header & Breadcrumb */}
        <section className="flex flex-col gap-3">
          <nav className="flex items-center gap-2 text-[13px] text-[#56423E]">
            <Link href="/" className="hover:text-[#9E412F] transition-colors">
              Home
            </Link>
            <span className="text-[#89726D]">/</span>
            <span className="font-semibold text-[#1B1C1C]">Videos</span>
          </nav>

          <div className="flex items-center gap-1.5 w-fit bg-[#D1E6CB] text-[#394B38] px-3.5 py-1 rounded-full text-[12px] font-semibold">
            <span>✦</span>
            <span className="uppercase tracking-wider">Hand-Drawn 2D Animations</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-[760px]">
              <h1 className="font-serif text-[34px] sm:text-[44px] text-[#1B1C1C] tracking-tight leading-tight">
                Animated Stories & Video Reflections
              </h1>
              <p className="text-[16px] text-[#56423E] mt-1 leading-relaxed">
                Short, visual deep-dives bringing Sunnah wisdom and modern habit
                science to life. Watch peacefully on YouTube or explore the written companion guides.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[12px] text-[#56423E] bg-[#F6F3F2] px-4 py-2 rounded-full self-start md:self-end border border-[#EAEAEA]">
              <Clock className="w-4 h-4 text-[#E87A64]" />
              <span>New episode every Sunday at 9 AM EST</span>
            </div>
          </div>
        </section>

        {/* 1. YOUTUBE CHANNEL BANNER & SUBSCRIBER STRIP */}
        <section className="w-full bg-white rounded-2xl p-6 sm:p-7 border border-[#EAEAEA] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl bg-[#FFDAD3] flex items-center justify-center text-[#9E412F] shrink-0 shadow-xs">
              <YoutubeIcon className="w-7 h-7" />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#E02424] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                ▶
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-[20px] font-semibold text-[#1B1C1C]">
                  The Sunnah Record
                </span>
                <span className="text-[#8FA38B]">✓</span>
              </div>
              <p className="text-[13px] text-[#56423E] flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-[#1B1C1C]">125K Subscribers</span>
                <span>•</span>
                <span>48 Animated Episodes</span>
                <span>•</span>
                <span className="text-[#8FA38B] font-medium">Free for the Ummah</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#E02424] hover:bg-[#c81e1e] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all shadow-xs"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
            </a>
          </div>
        </section>

        {/* 2. FEATURED SPOTLIGHT RELEASE */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E87A64] animate-pulse" />
              <span className="text-[12px] font-bold text-[#E87A64] uppercase tracking-wider">
                Featured Release
              </span>
            </div>
            <span className="text-[12px] text-[#78716C] font-mono">
              Episode {featuredVideo.episodeNumber}
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-[#EAEAEA] shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Thumbnail Frame (7 cols) */}
            <div
              onClick={() => openPlayer(featuredVideo)}
              className="lg:col-span-7 relative group cursor-pointer bg-[#222222] overflow-hidden aspect-video flex items-center justify-center"
            >
              <img
                src={featuredVideo.thumbnailUrl}
                alt={featuredVideo.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#E02424] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none text-white text-[11px] font-mono">
                <span className="bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm">
                  {featuredVideo.duration}
                </span>
                <span className="bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm">
                  4K UHD Animation
                </span>
              </div>
            </div>

            {/* Video Meta & Companion Guide Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[12px] text-[#78716C]">
                  <span className="text-[#9E412F] font-semibold">
                    {featuredVideo.topicLabel}
                  </span>
                  <span>•</span>
                  <span>Released {featuredVideo.releasedAt}</span>
                </div>

                <h2 className="font-serif text-[22px] sm:text-[26px] text-[#1B1C1C] leading-snug">
                  {featuredVideo.title}
                </h2>

                <p className="text-[14px] text-[#56423E] leading-relaxed">
                  {featuredVideo.summary}
                </p>

                <div className="mt-3 p-3.5 rounded-xl bg-[#F6F3F2] flex flex-col gap-1.5 text-[12px] text-[#1B1C1C]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8FA38B]">✓</span>
                    <span>The 3 neurochemical knots explained via sleep science</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8FA38B]">✓</span>
                    <span>Gentle somatic resets: cool wudu tactile transition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8FA38B]">✓</span>
                    <span>2-Minute morning remembrance for cognitive peace</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#EAEAEA]">
                {featuredVideo.writtenGuideSlug && (
                  <Link
                    href={`/stories/${featuredVideo.writtenGuideSlug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#E87A64] text-white text-[13px] font-semibold hover:bg-[#D96B55] transition-all shadow-xs"
                  >
                    <span>Read Written Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}

                <button
                  onClick={() => openPlayer(featuredVideo)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F6F3F2] hover:bg-white text-[#1B1C1C] border border-[#EAEAEA] text-[13px] font-medium transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#E02424]" />
                  <span>Play ({featuredVideo.duration})</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TOPIC FILTERS & SEARCH */}
        <section className="bg-white rounded-2xl p-4 border border-[#EAEAEA] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Topic Chips */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 md:pb-0">
            {topics.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTopic(t.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors ${
                  activeTopic === t.id
                    ? "bg-[#222222] text-white"
                    : "bg-[#F6F3F2] text-[#56423E] hover:text-[#1B1C1C]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative md:w-64">
            <Search className="w-4 h-4 text-[#89726D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search episode or topic..."
              className="w-full pl-10 pr-4 py-2 bg-[#F6F3F2] text-[#1B1C1C] placeholder:text-[#89726D] text-[13px] rounded-xl border border-transparent focus:border-[#E87A64] focus:outline-none"
            />
          </div>
        </section>

        {/* 4. VIDEO EPISODES GRID (3 COLUMNS) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => openPlayer(video)}
                className="relative aspect-video w-full bg-[#222222] overflow-hidden cursor-pointer"
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#E02424] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  {video.duration}
                </span>
                <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-[#1B1C1C] text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  Ep {video.episodeNumber}
                </span>
              </div>

              {/* Episode Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] text-[#78716C]">
                    <span className="text-[#9E412F] font-semibold">
                      {video.topicLabel}
                    </span>
                    <span>{video.releasedAt}</span>
                  </div>

                  <h3 className="font-serif text-[18px] font-semibold text-[#1B1C1C] group-hover:text-[#9E412F] transition-colors leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-[13px] text-[#56423E] line-clamp-2 leading-relaxed">
                    {video.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAEAEA] flex items-center justify-between">
                  {video.writtenGuideSlug ? (
                    <Link
                      href={`/stories/${video.writtenGuideSlug}`}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#9E412F] hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ) : (
                    <span className="text-[12px] text-[#78716C]">Video Only</span>
                  )}

                  <button
                    onClick={() => openPlayer(video)}
                    className="text-[12px] text-[#56423E] hover:text-[#1B1C1C] font-medium flex items-center gap-1"
                  >
                    <span>Watch ({video.duration})</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      {/* Video Modal Player */}
      {videoModalUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoModalUrl(null)}
        >
          <div
            className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#FCF9F8] border-b border-[#EAEAEA] flex items-center justify-between">
              <span className="font-serif text-[17px] font-semibold text-[#1B1C1C]">
                {videoModalTitle}
              </span>
              <button
                onClick={() => setVideoModalUrl(null)}
                className="text-[#56423E] hover:text-[#1B1C1C] px-2 py-1 text-sm font-semibold"
              >
                ✕ Close
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center relative">
              <iframe
                className="w-full h-full"
                src={videoModalUrl}
                title={videoModalTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 flex items-center justify-between bg-[#F6F3F2]">
              <span className="text-[13px] text-[#56423E]">
                The Sunnah Record 2D Animation
              </span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E02424] text-white text-[13px] font-semibold"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
                <span>Open in YouTube</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
