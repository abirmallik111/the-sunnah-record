export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  readTime: string;
  updatedAt: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  episodeTag?: string;
  hadith: {
    arabic: string;
    english: string;
    source: string;
    grading: string;
    book: string;
    narrator: string;
  };
  struggleText: string[];
  sunnahText: string[];
  science: {
    title: string;
    quote: string;
    source: string;
    publicGivingTitle: string;
    publicGivingDesc: string;
    secretGivingTitle: string;
    secretGivingDesc: string;
  };
  actions: {
    id: string;
    number: number;
    title: string;
    description: string;
  }[];
  videoCompanion: {
    title: string;
    duration: string;
    episode: string;
    youtubeUrl: string;
    thumbnail: string;
    description: string;
  };
}

export const STORIES: Story[] = [
  {
    slug: "why-islam-tells-you-to-give-charity-in-secret",
    title: "Why Does Islam Tell You to Give Charity in Secret?",
    subtitle:
      "We naturally crave acknowledgment. Yet the Sunnah nudges us toward quiet giving where the left hand remains oblivious to what the right dispenses.",
    category: "Peace of Mind",
    categorySlug: "peace-of-mind",
    readTime: "3 min read",
    updatedAt: "Updated 2 days ago",
    excerpt:
      "We love being acknowledged. Yet the Sunnah nudges us toward quiet giving where the left hand doesn’t know what the right gives. Discover how quiet kindness protects your heart from digital fatigue and hidden pride.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH6b1tWLjDKCFIANlU0C7G9OmKtJ_J9i2KMsMn0fCHtdY9BPR5yEXWs-9QZcOffAMbyN3jObjR4LvS20nb7dWlT3LCprCS8C4gJezKXlJ-KZA1eA1cun5zitEJTkC5yiKyazgi9Jsq7njYhNPEqKa57qpx0VXwi2Pi_gmuKYZ9YR0GVbP5a0OBVtLQhIBVCg4TM6W19npJUhWcINnwEobGWDJHIYAwxKtIpctj58XulWLcfKniqgWVFg",
    imageAlt:
      "Charming hand-drawn 2D doodle illustration of open vintage books, warm cup of tea, and gentle botanical leaves in terracotta and sage green.",
    episodeTag: "Episode 23 Companion",
    hadith: {
      arabic:
        "وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ",
      english:
        "“…And a person who gives in charity and conceals it such that his left hand does not know what his right hand has spent.”",
      source: "Sahih al-Bukhari 1423",
      grading: "Sahih",
      book: "Book of Zakat (كتاب الزكاة)",
      narrator: "Narrated by Abu Hurairah (RA)",
    },
    struggleText: [
      "Have you ever completed an online donation, watched the confirmation banner glow, and felt your thumb hover quietly above the ‘Share to Story’ button? There is nothing inherently wrong with inspiring your peers to give. But deep down, there is that subtle, persistent tremor: if nobody saw it, did it count?",
      "Moments after posting, a dull heaviness frequently settles in—as though the quiet crystalline purity of the intention was auctioned off for a dozen ephemeral digital notifications. In our hyper-connected reality, sincerity faces unprecedented friction. Every gesture asks to be cataloged, displayed, and measured in validation metrics.",
    ],
    sunnahText: [
      "Fourteen centuries ago, the Prophet Muhammad ﷺ addressed this exact instinct of the human ego. In describing the seven unique individuals sheltered under the shade of the Divine Throne on the Day of Resurrection—a day when no other sanctuary exists—he singled out this radical standard.",
      "Consider the poetic imagery: your own left hand is right next to your right, joined by the same nervous system. Yet the metaphor demands such fierce inner detachment that your own self remains untempted by applause or mental self-congratulation. You are freed from being your own audience.",
    ],
    science: {
      title: "The Neuroscience of Quiet Sincerity",
      quote:
        "When an act of giving is witnessed and applauded, the cognitive focus shifts rapidly from empathy to social reputation management. The biological reward becomes dependent upon external consensus. In contrast, anonymous giving activates deeper autonomous satisfaction and triggers enduring neurochemical resilience.",
      source: "Harvard University & University of British Columbia Altruism Studies",
      publicGivingTitle: "Public Giving",
      publicGivingDesc:
        "Ignites short-term dopamine spikes tied directly to notification metrics and peer appraisal. Heightens nervous system anxiety over public perception.",
      secretGivingTitle: "Secret Giving",
      secretGivingDesc:
        "Fosters sustained oxytocin release and stabilizes heart-rate variability. Cultivates internal agency and sovereign spiritual peace (Ikhlās).",
    },
    actions: [
      {
        id: "action-1",
        number: 1,
        title: "Lock your phone for 10 minutes immediately after giving",
        description:
          "Resist the temptation to screenshot your transaction receipt or post it to social media. Let the receipt rest exclusively between you and your Creator.",
      },
      {
        id: "action-2",
        number: 2,
        title: "Give something so small no one would ever brag about it",
        description:
          "Carry a spare cup of tea to a colleague, wipe a shared countertop, or leave clean change in an unexpected place. Train the heart to rejoice in deeds stripped of prestige.",
      },
      {
        id: "action-3",
        number: 3,
        title: "Anchor it with a 3-second silent dua",
        description:
          "Whenever you slip cash into an anonymous box, whisper internally: ‘Yā Muqallib al-Qulūb (O Turner of hearts), preserve this purely for Your Countenance.’",
      },
    ],
    videoCompanion: {
      title: "Episode 23: The Science & Sunnah of Secret Charity",
      duration: "5:42",
      episode: "Episode 23",
      youtubeUrl: "https://youtube.com",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Z4UK_J4nDzfbftltaZohlb2ODS6Tir4gUVPz2ksYAYdW6smeifpHCcGGZyoRuFIzBJnYIh8NowuA-9lKPTdwPnMovxnyB9DWrpRYN3N0iBN2BPXYKAp5LzGrwfpVEfbDTEbL42UbeJIftgkJvn30O8E6pP0EYMIMzXwP7MSVp868JwSxfVwNeh_N6bPOrAoSWNE7Aq2oog6MhZqAgfDZUlqPmSgzVQrtrfC8TFOFWd4YM_29uwZyHQ",
      description:
        "Immerse yourself in our hand-illustrated 2D episode walking through the neurological scans and classical commentaries on anonymous generosity.",
    },
  },
  {
    slug: "how-phone-scrolling-breaks-focus",
    title: "How Phone Scrolling Breaks Your Focus (And How Salah Rebuilds It)",
    subtitle:
      "Why constant dopamine micro-hits fragment our khushu—and 3 gentle Sunnah resets before stepping onto the prayer rug.",
    category: "Phone & Focus",
    categorySlug: "phone-focus",
    readTime: "4 min read",
    updatedAt: "Updated 4 days ago",
    excerpt:
      "Why the constant dopamine hit from short-form feeds scatters our khushu—and 3 gentle Sunnah resets before you pray.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOeFJ5znog-P4vFh1LuS_v25flNGKgE3pw67e77yauNzv2Ww-Rh1er_atXOyfAjr_JPwRrrCKVpRkZFJcrZpWdvIM7ltjPsi9ZgCkn4keNrqUnvdlULV84rfvsSsyYXzEShPKvp-xANwYAPVJ4X6G73hYHdvRUHRG7RH0FzitZ-IQUBa8i5gII61nQODMluX34vqHwogCw35p4D0ngVsDj5xWswtDjME_xpXNsDdkHkaDC8pSmTebp-g",
    imageAlt:
      "2D cozy editorial line art of a glowing smartphone on a small side table contrasting with a peaceful prayer rug laid out in the quiet dawn.",
    episodeTag: "Episode 21 Companion",
    hadith: {
      arabic:
        "إِنَّ الرَّجُلَ لَيَنْصَرِفُ وَمَا كُتِبَ لَهُ إِلاَّ عُشْرُ صَلاَتِهِ تُسْعُهَا ثُمُنُهَا سُبُعُهَا سُدُسُهَا خُمُسُهَا رُبُعُهَا ثُلُثُهَا نِصْفُهَا",
      english:
        "“A person may pray and have recorded for him only a tenth of his prayer, or a ninth, an eighth, a seventh, a sixth, a fifth, a fourth, a third, or a half.”",
      source: "Sunan Abi Dawud 796",
      grading: "Hasan Sahih",
      book: "Book of Prayer (كتاب الصلاة)",
      narrator: "Narrated by Ammar bin Yasir (RA)",
    },
    struggleText: [
      "You rush to pray Asr. Your phone is resting barely two feet away on your desk. As soon as you pronounce the opening Takbir, an urgent thought races into your mind: Did that email reply arrive? Did they see my text?",
      "Our prefrontal cortex is constantly stimulated by notifications. Switching abruptly from high-speed digital feeds to standing motionless in Salah creates cognitive friction. We aren't broken; our attention is simply exhausted.",
    ],
    sunnahText: [
      "The Prophet Muhammad ﷺ never treated Salah as a transaction to be rushed through. He described it to Bilal (RA) by saying: 'O Bilal, call the Adhan so we may find comfort and rest in it.'",
      "The prophetic remedy begins well before the prayer rug: performing slow wudu, washing away mental clutter, and walking calmly rather than sprinting to catch the bowing posture.",
    ],
    science: {
      title: "Attention Residue and Cognitive Switching",
      quote:
        "Every time you glance at your phone before an intellectually or spiritually deep task, a fraction of your attention stays stuck to that previous message. This is known as attention residue.",
      source: "Dr. Sophie Leroy, University of Washington",
      publicGivingTitle: "Doom-Scrolling Before Prayer",
      publicGivingDesc:
        "Keeps cortisol and adrenaline elevated. The brain remains on standby for the next ring or notification ping.",
      secretGivingTitle: "The 2-Minute Wudu Buffer",
      secretGivingDesc:
        "Activates the parasympathetic nervous system via thermal tactile contact with cool water, slowing pulse rate and calming eye saccades.",
    },
    actions: [
      {
        id: "action-1",
        number: 1,
        title: "Leave your phone in another room while praying",
        description:
          "Physical distance cuts the brain's subconscious anticipatory reflex by over 80%.",
      },
      {
        id: "action-2",
        number: 2,
        title: "Do wudu with intentional sensory slowness",
        description:
          "Feel each drop of cool water on your forearms and face. Use this physical sensation as a conscious mental transition.",
      },
      {
        id: "action-3",
        number: 3,
        title: "Sit for 30 seconds in stillness before Takbir",
        description:
          "Take three deep diaphragmatic breaths and remind yourself Whom you are about to address.",
      },
    ],
    videoCompanion: {
      title: "Episode 21: Reclaiming Khushu in the Smartphone Age",
      duration: "6:20",
      episode: "Episode 21",
      youtubeUrl: "https://youtube.com",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOeFJ5znog-P4vFh1LuS_v25flNGKgE3pw67e77yauNzv2Ww-Rh1er_atXOyfAjr_JPwRrrCKVpRkZFJcrZpWdvIM7ltjPsi9ZgCkn4keNrqUnvdlULV84rfvsSsyYXzEShPKvp-xANwYAPVJ4X6G73hYHdvRUHRG7RH0FzitZ-IQUBa8i5gII61nQODMluX34vqHwogCw35p4D0ngVsDj5xWswtDjME_xpXNsDdkHkaDC8pSmTebp-g",
      description:
        "Discover practical nervous system resets and prophetic transitions to transform your daily prayer into deep rest.",
    },
  },
  {
    slug: "the-3-second-pause-anger-control",
    title: "The 3-Second Pause: What the Prophet Taught About Anger",
    subtitle:
      "Sitting when standing, sipping water, and taking a mindful breath: how neurobiology validates ancient prophetic advice.",
    category: "Peace of Mind",
    categorySlug: "peace-of-mind",
    readTime: "3 min read",
    updatedAt: "Updated 1 week ago",
    excerpt:
      "Sitting down when standing, sipping water, and taking a mindful breath: how neurobiology validates ancient prophetic advice.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa-H_Uhkcs7mDHxgt5dlyE2G-JLF4KkjvBsNkmq_qjZXNYuJExNrqnygkpJsaWQ27Fb6Bv8ElDVnWMVPqTT-X5xfNn1DzkY4iAlbfpQ9iId_WK87OQKHDPiI-lGEZKzjN6W5W-hKunD-YUr0c_FgzPhAUxUP2Y_oSgpSBBUEuK9-fFPifZSyMmJpoOv1j8HLeigX1ieacMW77POWWVx47J5V__WpWHQD-Vg5T_UhEJ_4Kr0lyqDmQp6Q",
    imageAlt:
      "Warm cozy line art showing a handmade ceramic cup with cool water and ripples, serene warm pastel background evoking tranquility.",
    episodeTag: "Episode 19 Companion",
    hadith: {
      arabic:
        "إِذَا غَضِبَ أَحَدُكُمْ وَهُوَ قَائِمٌ فَلْيَجْلِسْ فَإِنْ ذَهَبَ عَنْهُ الْغَضَبُ وَإِلاَّ فَلْيَضْطَجِعْ",
      english:
        "“If one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down.”",
      source: "Sunan Abi Dawud 4782",
      grading: "Sahih",
      book: "Book of General Behavior (كتاب الأدب)",
      narrator: "Narrated by Abu Dharr (RA)",
    },
    struggleText: [
      "A rude text message, an interrupted sentence, or bad traffic—our first instinct is to fire back with sharp words that we inevitably regret thirty seconds later.",
      "In that split second, adrenaline surges through our veins. We feel justified in striking back, confusing emotional reactivity with personal strength.",
    ],
    sunnahText: [
      "The Prophet Muhammad ﷺ redefined genuine strength entirely: 'The strong man is not the one who wrestles someone to the ground; rather, the strong man is the one who controls himself when angry.'",
      "Notice his advice was never purely philosophical—it was somatic and physical: change your physical posture, lower your center of gravity, and wash with water.",
    ],
    science: {
      title: "The Amygdala Hijack and Postural Feedback",
      quote:
        "During sudden anger, the amygdala bypasses the reasoning centers of the prefrontal cortex within milliseconds. Physical posture shifts alter blood flow and sympathetic nervous tone.",
      source: "Journal of Psychophysiology & Somatic Regulation",
      publicGivingTitle: "Standing & Pacing in Fury",
      publicGivingDesc:
        "Reinforces aggressive motor priming and triggers elevated adrenaline levels.",
      secretGivingTitle: "Sitting Down & Sipping Water",
      secretGivingDesc:
        "Engages the vagus nerve, reduces heart rate, and re-engages the prefrontal cortex within 3 to 5 seconds.",
    },
    actions: [
      {
        id: "action-1",
        number: 1,
        title: "Change your height immediately",
        description:
          "If standing, sit. If sitting, lean back or rest your hands quietly on your lap.",
      },
      {
        id: "action-2",
        number: 2,
        title: "Drink a slow sip of room-temperature water",
        description:
          "Swallowing forces the breathing rhythm to pause and resets the throat and vocal cord tension.",
      },
      {
        id: "action-3",
        number: 3,
        title: "Whisper the refuge formula silently",
        description:
          "Say: 'A'udhu billahi minash-shaytanir-rajeem' (I seek refuge in Allah from Satan).",
      },
    ],
    videoCompanion: {
      title: "Episode 19: The Biology of Prophetic Patience",
      duration: "5:15",
      episode: "Episode 19",
      youtubeUrl: "https://youtube.com",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCa-H_Uhkcs7mDHxgt5dlyE2G-JLF4KkjvBsNkmq_qjZXNYuJExNrqnygkpJsaWQ27Fb6Bv8ElDVnWMVPqTT-X5xfNn1DzkY4iAlbfpQ9iId_WK87OQKHDPiI-lGEZKzjN6W5W-hKunD-YUr0c_FgzPhAUxUP2Y_oSgpSBBUEuK9-fFPifZSyMmJpoOv1j8HLeigX1ieacMW77POWWVx47J5V__WpWHQD-Vg5T_UhEJ_4Kr0lyqDmQp6Q",
      description:
        "Learn why changing your posture and taking three mindful seconds halts emotional reactivity in its tracks.",
    },
  },
  {
    slug: "why-we-fast-sunnah-brain-science",
    title: "Why We Fast: Ancient Sunnah Meets Modern Brain Science",
    subtitle:
      "The biological magic of Monday & Thursday fasting, autophagy, and the mental clarity that comes from intentional hunger.",
    category: "Fasting",
    categorySlug: "fasting",
    readTime: "5 min read",
    updatedAt: "Updated 1 week ago",
    excerpt:
      "The biological magic of Monday & Thursday fasting, autophagy, and the mental clarity that comes from intentional hunger.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsRL_Q3sFA-1liyMtWHiZ44bAtUU6azOMqnyJWdE-MxZJrXSGXyVl78kRpQfqlAAn-Ay_PGpmaOtGkNHVQvt7pVgEi12ndN-fDwpbx1dcaNG2DHZ07hfrmtzZl7Bu1dc-SyVenRNGDSJcVv3Ah2QAAFvr9NU2FkwQ-Re3lLt7O7eRcy8ke-kQmGsDK-QaMtz_lT2oShCygm2EBjbsHzvFYjy6eMycu2pqwWC2IZqu_05KOPMu9158Hw",
    imageAlt:
      "Charming hand-drawn still life with fresh dates in a small earthy bowl, clear water bottle, and gentle morning sunrise light.",
    episodeTag: "Episode 18 Companion",
    hadith: {
      arabic:
        "تُعْرَضُ الأَعْمَالُ يَوْمَ الاِثْنَيْنِ وَالْخَمِيسِ فَأُحِبُّ أَنْ يُعْرَضَ عَمَلِي وَأَنَا صَائِمٌ",
      english:
        "“Deeds are presented on Monday and Thursday, and I love that my deeds be presented while I am fasting.”",
      source: "Jami` at-Tirmidhi 747",
      grading: "Sahih",
      book: "Book on Fasting (كتاب الصوم)",
      narrator: "Narrated by Abu Hurairah (RA)",
    },
    struggleText: [
      "We eat when bored, we snack when anxious, and we constantly graze while typing at our desks. The modern food landscape has severed our connection to genuine appetite and intentional nourishment.",
      "Fasting often feels intimidating because we assume our energy will plunge without an uninterrupted influx of sugar and caffeine.",
    ],
    sunnahText: [
      "The Prophet Muhammad ﷺ routinely fasted every Monday and Thursday, alongside the White Days (13th, 14th, 15th of the lunar month).",
      "Far from being an act of deprivation, it was a rhythm of weekly physical purification and spiritual elevation.",
    ],
    science: {
      title: "Autophagy and Neurotrophic Factors",
      quote:
        "Periodic intermittent fasting triggers cellular cleanup known as autophagy, where damaged proteins and organelles are recycled. Furthermore, it elevates Brain-Derived Neurotrophic Factor (BDNF), sharpening memory and mental acuity.",
      source: "The Salk Institute for Biological Studies",
      publicGivingTitle: "Continuous Constant Snacking",
      publicGivingDesc:
        "Incurs chronic insulin elevations, brain fog, and inflammatory cellular stress.",
      secretGivingTitle: "Monday / Thursday Fasting (14-16h)",
      secretGivingDesc:
        "Induces metabolic switching, enhances mitochondrial efficiency, and sharpens cognitive acuity.",
    },
    actions: [
      {
        id: "action-1",
        number: 1,
        title: "Test one Monday or Thursday this month",
        description:
          "Start small with intention: eat a nourishing Suhur with complex oats and water before dawn.",
      },
      {
        id: "action-2",
        number: 2,
        title: "Notice your emotional triggers for snacking",
        description:
          "When you feel a sudden craving at 2 PM, recognize it as fatigue or boredom rather than true biological starvation.",
      },
      {
        id: "action-3",
        number: 3,
        title: "Break your fast with fresh dates and water quietly",
        description:
          "Savor the sweetness and say a heart-felt dua: 'Dhahaba adh-dhama'u wabtallat al-'urooq...' (The thirst has gone, the veins are moist, and the reward is confirmed).",
      },
    ],
    videoCompanion: {
      title: "Episode 18: Why We Fast — Prophetic Nutrition",
      duration: "7:10",
      episode: "Episode 18",
      youtubeUrl: "https://youtube.com",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsRL_Q3sFA-1liyMtWHiZ44bAtUU6azOMqnyJWdE-MxZJrXSGXyVl78kRpQfqlAAn-Ay_PGpmaOtGkNHVQvt7pVgEi12ndN-fDwpbx1dcaNG2DHZ07hfrmtzZl7Bu1dc-SyVenRNGDSJcVv3Ah2QAAFvr9NU2FkwQ-Re3lLt7O7eRcy8ke-kQmGsDK-QaMtz_lT2oShCygm2EBjbsHzvFYjy6eMycu2pqwWC2IZqu_05KOPMu9158Hw",
      description:
        "Explore how weekly intermittent fasting rejuvenates our cells, clears mental fog, and connects us with gratitude.",
    },
  },
  {
    slug: "the-fajr-wake-up-ritual",
    title: "The Fajr Wake-Up Ritual: Overcoming the Heavy Blanket",
    subtitle:
      "Transforming the morning struggle into effortless calm with the 3 knots sunnah routine and gradual circadian syncing.",
    category: "Sleep & Mornings",
    categorySlug: "sleep-mornings",
    readTime: "3 min read",
    updatedAt: "Updated 2 weeks ago",
    excerpt:
      "Transforming the morning struggle into effortless calm with the 3 knots sunnah routine and gradual circadian syncing.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGTjFZ5p-dHpBATHM2HCU7PAkOyNnYr5_ZZk20mDMMquVbCEKTbcbxoB7GPX38UjRnya9qVOish0oVU_N3vyCtben8uA775EO0iVqqTEF-lXdcgV8dndnwWzcLfPUy4MJrxGfD6zlOx3AE_tcfmK5X-CrIF4x9Red71aa7q9Wnw_xJhjk9kdbcFZcRV9pqYVbeljR3dlNia_mj9MWr4pgY00VfRLeENiAiv_CakXWEkX4wj7brTYk4KA",
    imageAlt:
      "Cozy illustrated scene of dawn light breaking through a cottage bedroom window with soft pastel clouds, open notebook, and warm blanket.",
    episodeTag: "Episode 24 Companion",
    hadith: {
      arabic:
        "يَعْقِدُ الشَّيْطَانُ عَلَى قَافِيَةِ رَأْسِ أَحَدِكُمْ إِذَا هُوَ نَامَ ثَلاَثَ عُقَدٍ... فَإِنِ اسْتَيْقَظَ فَذَكَرَ اللَّهَ انْحَلَّتْ عُقْدَةٌ، فَإِنْ تَوَضَّأَ انْحَلَّتْ عُقْدَةٌ، فَإِنْ صَلَّى انْحَلَّتْ عُقَدُهُ كُلُّهَا، فَأَصْبَحَ نَشِيطًا طَيِّبَ النَّفْسِ",
      english:
        "“Satan ties three knots over the crown of your head when you sleep... If you awaken and remember Allah, one knot is untied. If you perform wudu, another knot is untied. If you pray, all the knots are untied and you enter the morning full of energy and good spirits.”",
      source: "Sahih al-Bukhari 1142",
      grading: "Sahih",
      book: "Book of Tahajjud (كتاب التهجد)",
      narrator: "Narrated by Abu Hurairah (RA)",
    },
    struggleText: [
      "The alarm goes off in the pitch black. The room is cool and the blanket feels like a hundred pounds of warm lead. Your mind whispers: 'Just five more minutes; you have time.'",
      "We all know that heavy, foggy feeling known scientifically as sleep inertia. When we surrender to snooze, we wake up feeling drained and spiritually discouraged.",
    ],
    sunnahText: [
      "The Prophet Muhammad ﷺ broke down this morning inertia into three clear, sequential milestones: Awakening & Dhikr, Wudu with water, and the Physical Movement of Salah.",
      "By breaking the giant wall of waking up into three small micro-steps, the psychological resistance dissolves effortlessly.",
    ],
    science: {
      title: "Circadian Cortisol Awakening Response (CAR)",
      quote:
        "Natural morning alertness requires a synchronized surge in cortisol and daylight exposure. Splashing cold water stimulates facial trigeminal nerve endings, inducing rapid hemodynamic arousal.",
      source: "Stanford Sleep & Circadian Neurobiology Lab",
      publicGivingTitle: "Hitting Snooze 4 Times",
      publicGivingDesc:
        "Fragments REM cycles, leaving adenosine levels elevated and causing lingering mental fog for up to four hours.",
      secretGivingTitle: "The 3-Step Sunnah Awakening",
      secretGivingDesc:
        "Immediately halts sleep inertia through verbal remembrance, sensory temperature shock from wudu, and gentle bodily elongation in prayer.",
    },
    actions: [
      {
        id: "action-1",
        number: 1,
        title: "Sit upright and whisper the awakening dhikr",
        description:
          "Say immediately: 'Alhamdulillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushoor' (Praise be to Allah Who brought us to life after death).",
      },
      {
        id: "action-2",
        number: 2,
        title: "Walk directly to the sink without touching your phone",
        description:
          "Keep your eyes off email and social media until your feet have touched the prayer rug.",
      },
      {
        id: "action-3",
        number: 3,
        title: "Embrace the morning freshness with light",
        description:
          "Open your curtains or turn on a warm light to signal to your brain that the new day has begun.",
      },
    ],
    videoCompanion: {
      title: "Episode 24: The Fajr Wake-Up Ritual",
      duration: "8:42",
      episode: "Episode 24",
      youtubeUrl: "https://youtube.com",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvRRP7O05Mj50XULFdLwzdeUuorlKhtH8Ru8t2Anb1D0Q6nDULyp0buAf3kVS1h5cP7VcEAVgc2IF-dHbmWiA_HB0pDgHBG65Y72u_Pgcd6Dpj9gFNKWSKwFSSI5LkbjbHIPj7-EMV159-ghwX399TjcWeqhGjN6dadWuUh-FvVz3m0IA9-HWdF9fIZtbhWpiZSBhlDU53tPolx0ANCWgtwN-bNyusw5Iiml9UdqVkwmUEGuT7BJ2c3w",
      description:
        "Why is dawn prayer accompanied by 3 psychological knots? Uncover the neuroscience of morning inertia and the prophetic secrets to waking refreshed.",
    },
  },
  {
    slug: "the-art-of-gentle-speech",
    title: "The Art of Gentle Speech in an Era of Internet Arguments",
    subtitle:
      "Guarding your tongue and inner serenity when modern algorithms are designed to keep you outraged and restless.",
    category: "Peace of Mind",
    categorySlug: "peace-of-mind",
    readTime: "4 min read",
    updatedAt: "Updated 3 weeks ago",
    excerpt:
      "Guarding your tongue and inner serenity when modern algorithms are designed to keep you outraged and restless.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3oveHlC8WcudsWOD4Adi8B2fspQWg42F1ci-CVQ8rQxzeJ6smfWbVYDTdINLRXt8S0OZarYHc4BgnBZ_-5wsZBMy80Hn2S3oZmC6QycV03Jwj4Pl-O2fiiejxjOBIt_tDVdmwaPAOST6U-K0yWf5S2kpENbWBtuKiyHp7G29rJgk8SFln9mVO6h2RE_O6IX3ZEuqiz5BDbnLK1NmfS9doVJ5hAApnRE6BZ6tF96QvD2T_WHokPIvkCg",
    imageAlt:
      "Artistic 2D animated style illustration of two friends sitting on a park bench surrounded by gently falling autumn leaves, in patient conversation.",
    episodeTag: "Episode 16 Companion",
    hadith: {
      arabic:
        "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
      english:
        "“Whoever believes in Allah and the Last Day, let him speak good or remain silent.”",
      source: "Sahih al-Bukhari 6018",
      grading: "Sahih",
      book: "Book of Good Manners (كتاب الأدب)",
      narrator: "Narrated by Abu Hurairah (RA)",
    },
    struggleText: [
      "Every social platform rewards controversy, hot takes, and sharp retorts. Leaving a snarky comment produces an immediate rush of dopamine and likes.",
      "Yet an hour later, that familiar spiritual dryness coats our tongue. We traded our peace of heart for fleeting internet applause.",
    ],
    sunnahText: [
      "The Prophet Muhammad ﷺ never spoke with harshness, mockery, or cynicism. His words were deliberate, gentle, and measured.",
      "He promised: 'I guarantee a house on the outskirts of Paradise for whoever abandons argumentation, even if they are in the right.'",
    ],
    science: {
      title: "Algorithmic Outrage and Affective Polarization",
      quote:
        "Online engagement algorithms deliberately elevate conflict because anger generates the highest interaction rates. Choosing silence stops the emotional contagion loop.",
      source: "MIT Sloan Media & Polarization Study",
      publicGivingTitle: "Typing Angry Retorts",
      publicGivingDesc:
        "Heightens blood pressure, triggers social rumination, and disrupts evening sleep.",
      secretGivingTitle: "Practicing Mindful Silence",
      secretGivingDesc:
        "Preserves internal energy, keeps cortisol balanced, and fosters profound emotional sovereignty.",
    },
    actions: [
      {
        id: "action-1",
        number: 1,
        title: "Delete the reply draft before hitting send",
        description:
          "Type your honest thought into a private notepad if you must vent, then delete it. Notice the quiet relief.",
      },
      {
        id: "action-2",
        number: 2,
        title: "Practice the 24-hour cooling off rule",
        description:
          "If a discussion triggers your ego, wait 24 hours before responding. Most debates become completely irrelevant by morning.",
      },
      {
        id: "action-3",
        number: 3,
        title: "Compliment someone sincerely behind their back",
        description:
          "Mention someone's virtue to a third person when they aren't around. The angels say: 'And for you the same.'",
      },
    ],
    videoCompanion: {
      title: "Episode 16: The Grace of Silence",
      duration: "5:50",
      episode: "Episode 16",
      youtubeUrl: "https://youtube.com",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3oveHlC8WcudsWOD4Adi8B2fspQWg42F1ci-CVQ8rQxzeJ6smfWbVYDTdINLRXt8S0OZarYHc4BgnBZ_-5wsZBMy80Hn2S3oZmC6QycV03Jwj4Pl-O2fiiejxjOBIt_tDVdmwaPAOST6U-K0yWf5S2kpENbWBtuKiyHp7G29rJgk8SFln9mVO6h2RE_O6IX3ZEuqiz5BDbnLK1NmfS9doVJ5hAApnRE6BZ6tF96QvD2T_WHokPIvkCg",
      description:
        "Discover why silence is not weakness, but a rare prophetic superpower that shields your heart from digital burnout.",
    },
  },
];
