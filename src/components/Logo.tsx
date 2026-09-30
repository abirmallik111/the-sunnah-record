import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({ className = "", showSubtitle = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Hand-drawn doodle icon */}
      <div className="relative w-10 h-10 rounded-xl bg-[#F4EDE4] border border-[#E5DCCE] flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-200">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Notebook pages */}
          <path
            d="M14 16C18 14 24 14 24 34C24 34 18 34 14 36V16Z"
            fill="#FFFFFF"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34 16C30 14 24 14 24 34C24 34 30 34 34 36V16Z"
            fill="#FFFFFF"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Spine line */}
          <path
            d="M24 14V34"
            stroke="#E87A64"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Small gentle warm crescent above journal */}
          <path
            d="M28 8C27 10 24 11 22 9.5C21.5 9 21.2 8.3 21 7.5C23.5 7.5 26.5 8 28 8Z"
            fill="#E87A64"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-serif text-[19px] font-semibold text-[#1B1C1C] tracking-tight group-hover:text-[#9E412F] transition-colors leading-snug">
          The Sunnah Record
        </span>
        {showSubtitle && (
          <span className="text-[10px] font-semibold tracking-wider text-[#78716C] uppercase font-sans -mt-0.5">
            Daily Habits & Stories
          </span>
        )}
      </div>
    </Link>
  );
}
