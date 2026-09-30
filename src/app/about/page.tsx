"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Heart,
  Unlock,
  ShieldCheck,
  Send,
  CheckCircle,
  Users,
  Brush,
  MessageSquare,
  Scale,
} from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "correction",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", type: "correction", message: "" });
    }, 800);
  };

  return (
    <main className="w-full bg-[#FCF9F8] min-h-screen">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-12 sm:gap-16">
        {/* Top Breadcrumb & Tag */}
        <section className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAEAEA] pb-4">
          <nav className="flex items-center gap-2 text-[13px] text-[#56423E]">
            <Link href="/" className="hover:text-[#9E412F] transition-colors">
              Home
            </Link>
            <span className="text-[#89726D]">/</span>
            <span className="font-semibold text-[#1B1C1C]">About Us</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F3F2] text-[#6C5C43] text-[12px] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#E87A64]" />
            <span>Our Heart & Purpose</span>
          </div>
        </section>

        {/* 1. MISSION STATEMENT HERO (2-COLUMN BALANCED EDITORIAL) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#9E412F]" />
              <span className="text-[12px] font-bold text-[#9E412F] uppercase tracking-widest">
                A Quiet Sanctuary
              </span>
            </div>

            <h1 className="font-serif text-[34px] sm:text-[44px] text-[#1B1C1C] tracking-tight leading-tight">
              Why We Built The Sunnah Record
            </h1>

            <p className="text-[17px] text-[#56423E] leading-relaxed">
              Modern life is saturated with notifications, digital noise, endless
              dopamine loops, and overwhelming cognitive fatigue. Fourteen centuries
              ago, Prophet Muhammad (<span className="font-arabic text-[20px] text-[#6C5C43]">ﷺ</span>) lived and taught an extraordinary model of calm presence, conscious habits, gentle emotional poise, and restorative daily rituals.
            </p>

            <p className="text-[15px] text-[#56423E] leading-relaxed">
              The Sunnah Record was created as a peaceful digital oasis and archival journal.
              We take timeless prophetic traditions and examine them through the lens of
              modern human struggles—sleep inertia, fragmented attention, hidden charity,
              and emotional self-regulation—making authentic Sunnah accessible, memorable,
              and joyful for everyday lives.
            </p>

            {/* Callout Quote Card */}
            <div className="p-5 rounded-2xl bg-white border-l-4 border-[#E87A64] border border-[#EAEAEA] shadow-xs my-2">
              <p className="font-serif italic text-[18px] text-[#1B1C1C] leading-snug">
                “A tranquil sanctuary bridging authentic scholarship with everyday mindfulness.”
              </p>
              <div className="mt-2 text-right text-[12px] text-[#78716C]">
                — The Sunnah Record Editorial Circle
              </div>
            </div>
          </div>

          {/* Right Archival Illustrated Visual Frame */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-3xl bg-white p-3 border border-[#EAEAEA] shadow-md group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#F6F3F2]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVmP5re3if35tuzK7talxh1NXjonmB2ltZnkW-bHmcqW5EgoZy8a_YRFTrUZVe9tyEBWhD51A0-XAcux0GtHaxUMAxTjgLWmwu8ELKYi6912H35vm-EVF_d_bRl--piTZL5baH2y-YIH7AtBLEdDjAwNufwN8f5eZie5o6BzNxi4Vt_tqMBZJBySPyupXMfnzlRkieqlLMw04Tn_vOQ6pjr8D-6jYZaWTfgu5osM6y--SNvnNYkLID6A"
                  alt="Friendly cozy 2D doodle character sitting cross-legged sipping tea with notebook beside a calm window"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 flex items-center justify-between text-[12px] text-[#78716C]">
                <span className="font-semibold text-[#9E412F]">
                  Hand-Drawn 2D Art
                </span>
                <span className="font-mono text-[11px]">LO-FI PACING</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THREE CORE PROMISES */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAEAEA] shadow-xs flex flex-col gap-8">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E412F] font-bold">
              Our Sacred Amanah
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#1B1C1C]">
              Our Three Guiding Promises
            </h2>
            <p className="text-[14px] text-[#56423E]">
              How we protect sacred knowledge and serve our worldwide community
              with quiet sincerity and scholarly care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Promise 1 */}
            <div className="p-6 rounded-2xl bg-[#FCF9F8] border border-[#EAEAEA] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D1E6CB] flex items-center justify-center text-[#51634E]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[19px] font-semibold text-[#1B1C1C]">
                    Authentic Sourcing Only
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-[11px] font-bold">
                    Sahih Grade
                  </span>
                </div>
                <p className="text-[13px] text-[#56423E] leading-relaxed">
                  Every narration cited is vetted through primary classical Hadith
                  corpora—primarily Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud,
                  and Jami&apos; at-Tirmidhi. We strictly cite grading and never publish unverified traditions.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EAEAEA] text-[11px] text-[#51634E] font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Scholarly Chain Verification</span>
              </div>
            </div>

            {/* Promise 2 */}
            <div className="p-6 rounded-2xl bg-[#FCF9F8] border border-[#EAEAEA] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFDAD3] flex items-center justify-center text-[#9E412F]">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[19px] font-semibold text-[#1B1C1C]">
                    Practical & Relatable
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#FFF3E0] text-[#E65100] text-[11px] font-bold">
                    Gentle Tone
                  </span>
                </div>
                <p className="text-[13px] text-[#56423E] leading-relaxed">
                  We don&apos;t lecture, shame, or induce guilt. We walk alongside modern
                  students and busy families struggling with phone addiction, morning
                  burnout, and anxious thoughts. The Sunnah is an empowering medicine.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EAEAEA] text-[11px] text-[#7E2A1B] font-medium flex items-center gap-1">
                <span>✦</span>
                <span>Simple English • Zero Overwhelm</span>
              </div>
            </div>

            {/* Promise 3 */}
            <div className="p-6 rounded-2xl bg-[#FCF9F8] border border-[#EAEAEA] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#F6DFC0] flex items-center justify-center text-[#6C5C43]">
                  <Unlock className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[19px] font-semibold text-[#1B1C1C]">
                    100% Free & Accessible
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[11px] font-bold">
                    Open Waqf
                  </span>
                </div>
                <p className="text-[13px] text-[#56423E] leading-relaxed">
                  Knowledge of the Sunnah belongs to everyone. There are zero paywalls,
                  no aggressive monetization, and no sponsored courses. Every written
                  guide, animated video, and printable checklist remains free forever.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EAEAEA] text-[11px] text-[#53442E] font-medium flex items-center gap-1">
                <span>✦</span>
                <span>Public Waqf Spirit for Everyone</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE STORY BEHIND 2D DOODLE STORYTELLING */}
        <section className="bg-[#F6F3F2] rounded-3xl p-6 sm:p-10 border border-[#EAEAEA] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C5C43] font-bold">
                Artistic Philosophy
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px] text-[#1B1C1C]">
                Why 2D Doodle Storytelling?
              </h2>
              <p className="text-[16px] text-[#56423E] leading-relaxed">
                In a world inundated with hyper-stimulating, rapid-cut video feeds,
                aggressive sound effects, and loud edits, our nervous systems are exhausted.
              </p>
              <p className="text-[14px] text-[#56423E] leading-relaxed">
                We intentionally chose hand-drawn, cozy 2D doodle animations with warm
                earthy tones, lo-fi pacing, and serene ambient soundscapes. This allows
                timeless Islamic wisdom to be absorbed deeply without sensory overload—turning
                sacred habit-building into a comforting visual experience that invites the
                heart to slow down, reflect, and internalize.
              </p>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#EAEAEA]">
                <div>
                  <span className="font-serif text-[26px] sm:text-[30px] font-bold text-[#9E412F] block">
                    120K+
                  </span>
                  <span className="text-[12px] text-[#78716C]">Global Seekers</span>
                </div>
                <div>
                  <span className="font-serif text-[26px] sm:text-[30px] font-bold text-[#9E412F] block">
                    100%
                  </span>
                  <span className="text-[12px] text-[#78716C]">Hand-Drawn Frames</span>
                </div>
                <div>
                  <span className="font-serif text-[26px] sm:text-[30px] font-bold text-[#9E412F] block">
                    0
                  </span>
                  <span className="text-[12px] text-[#78716C]">Loud Distractions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white p-2 border border-[#EAEAEA] shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBky4rsgKWatymjIEdNyPhjW7OfekTGgrOWQSqrFaoC5Y3x74gMqmnQxak-KyBaYYpptXIiP_GSxydjYdr1nKzmq-1vtU9BTzQklcsgHOJHItOVh_xJyl0ehGrGrqNBXje64p7rSxEZ8CjwgEaF9P9QVtnSpOQzm8_AzDON5gjwx41lWZ-wQIDbTeiy3EbMCdU55nwyfgta5FxM0KFVErgF4O1c49q0qfqw7OLl0RfVZecsgKLNMuu64w"
                  alt="Cozy nighttime study desk with glowing lamp and open journal"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. WAYS TO CONNECT (COMMUNITY SHOWCASE) */}
        <section className="flex flex-col gap-6">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E412F] font-bold">
              Fellowship & Community
            </span>
            <h2 className="font-serif text-[28px] sm:text-[32px] text-[#1B1C1C]">
              Join Our Peaceful Learning Circle
            </h2>
            <p className="text-[14px] text-[#56423E]">
              Connect with over 120,000 seekers learning prophetic habits together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: YouTube */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFEAEA] flex items-center justify-center text-[#E02424]">
                    <YoutubeIcon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F6F3F2] text-[12px] font-semibold text-[#1B1C1C]">
                    125,000+ Seekers
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C]">
                    YouTube Visual Library
                  </h3>
                  <p className="text-[14px] text-[#56423E] mt-1 leading-relaxed">
                    Watch weekly animated reflections and visual habit breakdowns every
                    Sunday at 9 AM EST. Calming, ad-free focus and soothing ambient audio.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA]">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E02424] text-white text-[14px] font-semibold hover:bg-[#c81e1e] transition-colors shadow-xs"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  <span>Visit YouTube Channel</span>
                </a>
              </div>
            </div>

            {/* Card B: Facebook Community */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#D1E6CB] flex items-center justify-center text-[#394B38]">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F6F3F2] text-[12px] font-semibold text-[#1B1C1C]">
                    42,000+ Members
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] font-semibold text-[#1B1C1C]">
                    Facebook Community & Circle
                  </h3>
                  <p className="text-[14px] text-[#56423E] mt-1 leading-relaxed">
                    Discuss weekly reflection questions, download printable habit cards,
                    share quiet daily progress, and connect in a gentle environment.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#222222] text-white text-[14px] font-semibold hover:bg-black transition-colors shadow-xs"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Facebook Circle</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CONTACT & SCHOLARLY FEEDBACK FORM */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAEAEA] shadow-xs">
          <div className="max-w-[640px] mx-auto flex flex-col gap-6">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#F6F3F2] flex items-center justify-center text-[#9E412F]">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-[26px] sm:text-[32px] text-[#1B1C1C]">
                Scholarly Feedback & Topic Ideas
              </h2>
              <p className="text-[14px] text-[#56423E] leading-relaxed">
                Knowledge is a sacred trust (<em>Amanah</em>). If you identify a citation
                error, translation nuance, or wish to suggest a daily habit struggle
                you would like us to address, our door and hearts are open.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#1B1C1C]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Maryam or Dr. Ahmed"
                    className="px-4 py-2.5 rounded-xl bg-[#F6F3F2] border border-[#EAEAEA] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E87A64]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#1B1C1C]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="px-4 py-2.5 rounded-xl bg-[#F6F3F2] border border-[#EAEAEA] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E87A64]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1B1C1C]">
                  Inquiry Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="px-4 py-2.5 rounded-xl bg-[#F6F3F2] border border-[#EAEAEA] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E87A64]"
                >
                  <option value="correction">
                    Scholarly Hadith / Citation Correction
                  </option>
                  <option value="topic">Topic or Daily Habit Suggestion</option>
                  <option value="translation">
                    Translation Nuance or Arabic Phrasing
                  </option>
                  <option value="reflection">
                    General Reflection or Feedback
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1B1C1C]">
                  Your Reflection or Scholarly Citation
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Kindly provide Hadith reference (Book, Number, Scholar's grading) or share your suggested habit topic with us..."
                  className="px-4 py-2.5 rounded-xl bg-[#F6F3F2] border border-[#EAEAEA] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E87A64] resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[12px] text-[#78716C] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                  <span>Reviewed directly by our editorial circle within 48h.</span>
                </span>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#E87A64] text-white text-[14px] font-semibold hover:bg-[#D96B55] transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Note</span>
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-[#D1E6CB] text-[#0F1F0F] text-[13px] flex items-center gap-2 mt-2">
                  <CheckCircle className="w-4 h-4 text-[#15803D] shrink-0" />
                  <span>
                    Jazakallahu Khayran! Your note has been safely submitted to
                    our editorial researchers.
                  </span>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
