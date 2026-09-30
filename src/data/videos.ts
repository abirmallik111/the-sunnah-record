export interface VideoEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  topic: "mind" | "sleep" | "charity" | "daily";
  topicLabel: string;
  duration: string;
  releasedAt: string;
  views: string;
  thumbnailUrl: string;
  imageAlt: string;
  youtubeUrl: string;
  writtenGuideSlug?: string;
  summary: string;
}

export const VIDEOS: VideoEpisode[] = [
  {
    id: "ep-24",
    episodeNumber: 24,
    title: "The Fajr Wake-Up Ritual: How Ancient Sunnah Resets Your Circadian Clock",
    topic: "sleep",
    topicLabel: "Sleep & Tahajjud",
    duration: "8:42",
    releasedAt: "3 days ago",
    views: "24.5K",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvRRP7O05Mj50XULFdLwzdeUuorlKhtH8Ru8t2Anb1D0Q6nDULyp0buAf3kVS1h5cP7VcEAVgc2IF-dHbmWiA_HB0pDgHBG65Y72u_Pgcd6Dpj9gFNKWSKwFSSI5LkbjbHIPj7-EMV159-ghwX399TjcWeqhGjN6dadWuUh-FvVz3m0IA9-HWdF9fIZtbhWpiZSBhlDU53tPolx0ANCWgtwN-bNyusw5Iiml9UdqVkwmUEGuT7BJ2c3w",
    imageAlt:
      "Warm atmospheric bedside desk illustration with glowing lamp, open journal with Arabic script, and crescent moon outside.",
    youtubeUrl: "https://youtube.com",
    writtenGuideSlug: "the-fajr-wake-up-ritual",
    summary:
      "Why is dawn prayer accompanied by three psychological knots? We explore the neurochemical struggle of morning sleep inertia and practical steps to wake up refreshed.",
  },
  {
    id: "ep-23",
    episodeNumber: 23,
    title: "The Science & Sunnah of Secret Charity: The Left Hand Rule",
    topic: "charity",
    topicLabel: "Charity & Ethics",
    duration: "5:42",
    releasedAt: "1 week ago",
    views: "42.1K",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Z4UK_J4nDzfbftltaZohlb2ODS6Tir4gUVPz2ksYAYdW6smeifpHCcGGZyoRuFIzBJnYIh8NowuA-9lKPTdwPnMovxnyB9DWrpRYN3N0iBN2BPXYKAp5LzGrwfpVEfbDTEbL42UbeJIftgkJvn30O8E6pP0EYMIMzXwP7MSVp868JwSxfVwNeh_N6bPOrAoSWNE7Aq2oog6MhZqAgfDZUlqPmSgzVQrtrfC8TFOFWd4YM_29uwZyHQ",
    imageAlt:
      "Warm studio 2D animation still showing a minimalist person sitting by a low wooden desk writing reflections with soft dusk sunlight.",
    youtubeUrl: "https://youtube.com",
    writtenGuideSlug: "why-islam-tells-you-to-give-charity-in-secret",
    summary:
      "Why anonymous generosity triggers sustained oxytocin release and shields the human heart from digital validation fatigue.",
  },
  {
    id: "ep-21",
    episodeNumber: 21,
    title: "How Phone Scrolling Breaks Your Focus (And How Salah Rebuilds It)",
    topic: "mind",
    topicLabel: "Mind & Focus",
    duration: "6:20",
    releasedAt: "2 weeks ago",
    views: "58.3K",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOeFJ5znog-P4vFh1LuS_v25flNGKgE3pw67e77yauNzv2Ww-Rh1er_atXOyfAjr_JPwRrrCKVpRkZFJcrZpWdvIM7ltjPsi9ZgCkn4keNrqUnvdlULV84rfvsSsyYXzEShPKvp-xANwYAPVJ4X6G73hYHdvRUHRG7RH0FzitZ-IQUBa8i5gII61nQODMluX34vqHwogCw35p4D0ngVsDj5xWswtDjME_xpXNsDdkHkaDC8pSmTebp-g",
    imageAlt:
      "2D cozy editorial line art of a glowing smartphone on a side table contrasting with a peaceful prayer rug.",
    youtubeUrl: "https://youtube.com",
    writtenGuideSlug: "how-phone-scrolling-breaks-focus",
    summary:
      "How continuous short-form scrolling creates attention residue—and 3 somatic transitions before prayer to reclaim deep focus.",
  },
  {
    id: "ep-19",
    episodeNumber: 19,
    title: "The 3-Second Pause: What the Prophet Taught About Anger Control",
    topic: "mind",
    topicLabel: "Mind & Focus",
    duration: "5:15",
    releasedAt: "3 weeks ago",
    views: "36.8K",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa-H_Uhkcs7mDHxgt5dlyE2G-JLF4KkjvBsNkmq_qjZXNYuJExNrqnygkpJsaWQ27Fb6Bv8ElDVnWMVPqTT-X5xfNn1DzkY4iAlbfpQ9iId_WK87OQKHDPiI-lGEZKzjN6W5W-hKunD-YUr0c_FgzPhAUxUP2Y_oSgpSBBUEuK9-fFPifZSyMmJpoOv1j8HLeigX1ieacMW77POWWVx47J5V__WpWHQD-Vg5T_UhEJ_4Kr0lyqDmQp6Q",
    imageAlt:
      "Warm cozy line art showing a ceramic cup with cool water ripples and serene tranquil palette.",
    youtubeUrl: "https://youtube.com",
    writtenGuideSlug: "the-3-second-pause-anger-control",
    summary:
      "Changing posture, drinking cool water, and the biology of the amygdala hijack during sudden emotional spikes.",
  },
  {
    id: "ep-18",
    episodeNumber: 18,
    title: "Why We Fast: Ancient Sunnah Meets Modern Brain Science",
    topic: "daily",
    topicLabel: "Daily Sunnahs",
    duration: "7:10",
    releasedAt: "1 month ago",
    views: "71.9K",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsRL_Q3sFA-1liyMtWHiZ44bAtUU6azOMqnyJWdE-MxZJrXSGXyVl78kRpQfqlAAn-Ay_PGpmaOtGkNHVQvt7pVgEi12ndN-fDwpbx1dcaNG2DHZ07hfrmtzZl7Bu1dc-SyVenRNGDSJcVv3Ah2QAAFvr9NU2FkwQ-Re3lLt7O7eRcy8ke-kQmGsDK-QaMtz_lT2oShCygm2EBjbsHzvFYjy6eMycu2pqwWC2IZqu_05KOPMu9158Hw",
    imageAlt:
      "Hand-drawn still life with fresh dates in an earthy clay bowl, water bottle, and sunrise light.",
    youtubeUrl: "https://youtube.com",
    writtenGuideSlug: "why-we-fast-sunnah-brain-science",
    summary:
      "Monday and Thursday fasting, cellular autophagy, and the neurological clarity produced by intentional physical restraint.",
  },
  {
    id: "ep-16",
    episodeNumber: 16,
    title: "The Art of Gentle Speech in an Era of Internet Arguments",
    topic: "mind",
    topicLabel: "Mind & Focus",
    duration: "5:50",
    releasedAt: "1 month ago",
    views: "29.4K",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3oveHlC8WcudsWOD4Adi8B2fspQWg42F1ci-CVQ8rQxzeJ6smfWbVYDTdINLRXt8S0OZarYHc4BgnBZ_-5wsZBMy80Hn2S3oZmC6QycV03Jwj4Pl-O2fiiejxjOBIt_tDVdmwaPAOST6U-K0yWf5S2kpENbWBtuKiyHp7G29rJgk8SFln9mVO6h2RE_O6IX3ZEuqiz5BDbnLK1NmfS9doVJ5hAApnRE6BZ6tF96QvD2T_WHokPIvkCg",
    imageAlt:
      "2D animated illustration of two friends sitting on a park bench surrounded by autumn leaves in peaceful conversation.",
    youtubeUrl: "https://youtube.com",
    writtenGuideSlug: "the-art-of-gentle-speech",
    summary:
      "Why arguing online exhausts your soul and how conscious silence restores mental and spiritual composure.",
  },
];
