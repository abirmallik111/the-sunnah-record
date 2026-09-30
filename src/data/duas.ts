export interface Dua {
  id: string;
  category: "morning" | "evening" | "sleep" | "stress";
  tag: string;
  title: string;
  subtitle: string;
  arabic: string;
  transliteration: string;
  translation: string;
  benefit: string;
  source: string;
  grading: string;
  repetitions: number;
  audioDuration: string;
}

export const DUAS: Dua[] = [
  // Morning Adhkar
  {
    id: "dua-m-1",
    category: "morning",
    tag: "Morning Anchor",
    title: "Sayyid al-Istighfar",
    subtitle: "(The Chief of Seeking Forgiveness)",
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration:
      "Allāhumma Anta Rabbī, lā ilāha illā Anta, khalaqtanī wa anā 'abduka, wa anā 'alā 'ahdika wa wa'dika ma-staṭa'tu, a'ūdhu bika min sharri mā ṣana'tu, abū'u laka bi-ni'matika 'alayya, wa abū'u bi-dhanbī faghfir lī fa-innahū lā yaghfiru-dhunūba illā Ant.",
    translation:
      "“O Allah, You are my Lord; none has the right to be worshiped but You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favors upon me, and I acknowledge my sin, so forgive me, for none forgives sins but You.”",
    benefit:
      "The Prophet (ﷺ) said: 'Whoever recites this with conviction during the morning and dies before evening will be among the people of Paradise.'",
    source: "Sahih al-Bukhari 6306",
    grading: "Sahih",
    repetitions: 1,
    audioDuration: "0:18",
  },
  {
    id: "dua-m-2",
    category: "morning",
    tag: "Morning Protection",
    title: "Protection Against All Sudden Harm",
    subtitle: "(Recited 3 times every morning)",
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillāhil-ladhī lā yaḍurru ma'as-mihī shay'un fil-arḍi wa lā fis-samā'i wa Huwas-Samī'ul-'Alīm.",
    translation:
      "“In the Name of Allah, with Whose Name nothing can cause harm in the earth or in the heavens, and He is the All-Hearing, the All-Knowing.”",
    benefit:
      "The Prophet (ﷺ) said: 'Whoever recites it three times in the morning and evening, nothing will harm him.'",
    source: "Sunan Abi Dawud 5088",
    grading: "Sahih",
    repetitions: 3,
    audioDuration: "0:12",
  },
  {
    id: "dua-m-3",
    category: "morning",
    tag: "Gratitude & Vitality",
    title: "Welcoming the Gift of a New Morning",
    subtitle: "(Affirming Faith & Divine Kingdom)",
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Aṣbaḥnā wa aṣbaḥal-mulku lillāh, wal-ḥamdu lillāh, lā ilāha illallāhu waḥdahū lā sharīka lah, lahul-mulku wa lahul-ḥamdu wa Huwa 'alā kulli shay'in Qadīr.",
    translation:
      "“We have entered the morning and the kingdom belongs to Allah, and all praise is due to Allah. None has the right to be worshiped except Allah alone, without partner. To Him belongs the dominion and praise, and He is over all things capable.”",
    benefit:
      "Fills the early hours with clarity, grounding the soul before worldly appointments begin.",
    source: "Sahih Muslim 2723",
    grading: "Sahih",
    repetitions: 1,
    audioDuration: "0:15",
  },
  {
    id: "dua-m-4",
    category: "morning",
    tag: "Inner Contentment",
    title: "Contentment with Allah as Lord",
    subtitle: "(Radiytu Billahi Rabba)",
    arabic:
      "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    transliteration:
      "Raḍītu billāhi Rabban, wa bil-Islāmi dīnan, wa bi-Muḥammadin ṣallallāhu 'alayhi wa sallama Nabiyyā.",
    translation:
      "“I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace and blessings be upon him) as my Prophet.”",
    benefit:
      "The Prophet (ﷺ) guaranteed: 'It will be a duty upon Allah to satisfy whoever says this three times in the morning.'",
    source: "Jami` at-Tirmidhi 3389",
    grading: "Hasan",
    repetitions: 3,
    audioDuration: "0:09",
  },

  // Evening Adhkar
  {
    id: "dua-e-1",
    category: "evening",
    tag: "Evening Refuge",
    title: "Shelter in the Perfect Words of Allah",
    subtitle: "(Evening Sanctuary Against Venom & Harm)",
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration:
      "A'ūdhu bi-kalimātillāhit-tāmmāti min sharri mā khalaq.",
    translation:
      "“I seek refuge in the perfect words of Allah from the evil of what He has created.”",
    benefit:
      "The Prophet (ﷺ) said: 'Whoever says this three times when evening arrives will not be harmed by any poison or creature that night.'",
    source: "Sahih Muslim 2709",
    grading: "Sahih",
    repetitions: 3,
    audioDuration: "0:08",
  },
  {
    id: "dua-e-2",
    category: "evening",
    tag: "Evening Gratitude",
    title: "Entering the Evening in Allah's Kingdom",
    subtitle: "(Amsayna wa Amsal Mulku Lillah)",
    arabic:
      "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Amsaynā wa amsal-mulku lillāh, wal-ḥamdu lillāh, lā ilāha illallāhu waḥdahū lā sharīka lah, lahul-mulku wa lahul-ḥamdu wa Huwa 'alā kulli shay'in Qadīr.",
    translation:
      "“We have reached the evening and the kingdom belongs to Allah, and all praise is for Allah. There is no deity worthy of worship except Allah alone, without partner.”",
    benefit:
      "Gently unties the workday's knots and re-centers your soul before entering family and rest time.",
    source: "Sahih Muslim 2723",
    grading: "Sahih",
    repetitions: 1,
    audioDuration: "0:16",
  },
  {
    id: "dua-e-3",
    category: "evening",
    tag: "Forgiveness & Relief",
    title: "Seeking Well-being in Body & Soul",
    subtitle: "(The Essential Evening Supplication)",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي",
    transliteration:
      "Allāhumma innī as'alukal-'afwa wal-'āfiyata fid-dunyā wal-ākhirah, Allāhumma innī as'alukal-'afwa wal-'āfiyata fī dīnī wa dunyāya wa ahlī wa mālī.",
    translation:
      "“O Allah, I ask You for pardon and well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family, and my wealth.”",
    benefit:
      "Ibn Umar (RA) narrated that the Prophet (ﷺ) never omitted this supplication morning or evening.",
    source: "Sunan Abi Dawud 5074",
    grading: "Sahih",
    repetitions: 1,
    audioDuration: "0:14",
  },

  // Before Sleep
  {
    id: "dua-s-1",
    category: "sleep",
    tag: "Bedtime Trust",
    title: "Placing Your Soul in Divine Hands",
    subtitle: "(Bismika Rabbi Wada'tu Janbi)",
    arabic:
      "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
    transliteration:
      "Bismika Rabbī waḍa'tu janbī wa bika arfa'uh, in amsakta nafsī farḥamhā, wa in arsaltahā faḥfaẓhā bimā taḥfaẓu bihī 'ibādakaṣ-ṣāliḥīn.",
    translation:
      "“In Your Name, my Lord, I lay down my side and by You I raise it up. If You take my soul, have mercy upon it; and if You release it, protect it as You protect Your righteous servants.”",
    benefit:
      "Subdues sleep anxiety and instills tranquil trust that your breathing is safeguarded through the night.",
    source: "Sahih al-Bukhari 6320",
    grading: "Sahih",
    repetitions: 1,
    audioDuration: "0:15",
  },
  {
    id: "dua-s-2",
    category: "sleep",
    tag: "Peaceful Sleep",
    title: "Surrendering Life & Death",
    subtitle: "(Allahumma Bismika Amuutu wa Ahya)",
    arabic: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    transliteration: "Allāhumma bismika amūtu wa aḥyā.",
    translation: "“O Allah, with Your Name I die and I live.”",
    benefit:
      "The simplest, most poignant prophetic reminder whispered immediately as your head touches the pillow.",
    source: "Sahih al-Bukhari 6324",
    grading: "Sahih",
    repetitions: 1,
    audioDuration: "0:05",
  },
  {
    id: "dua-s-3",
    category: "sleep",
    tag: "Night Shield",
    title: "Ayat al-Kursi (The Verse of the Throne)",
    subtitle: "(Guardian Angel Assigned Through the Night)",
    arabic:
      "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ",
    transliteration:
      "Allāhu lā ilāha illā Huwal-Ḥayyul-Qayyūm, lā ta'khudhuhū sinatuw-wa lā nawm, lahū mā fis-samāwāti wa mā fil-arḍ...",
    translation:
      "“Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep...”",
    benefit:
      "The Prophet (ﷺ) confirmed: A guardian from Allah will remain with you and no devil will approach you until morning.",
    source: "Sahih al-Bukhari 2311",
    grading: "Sahih",
    repetitions: 1,
    audioDuration: "0:35",
  },

  // Stress & Anxiety
  {
    id: "dua-a-1",
    category: "stress",
    tag: "Relief from Anxiety",
    title: "Dua of Prophet Yunus (AS)",
    subtitle: "(From the Depths of the Whale)",
    arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration:
      "Lā ilāha illā Anta subḥānaka innī kuntu minaẓ-ẓālimīn.",
    translation:
      "“There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.”",
    benefit:
      "The Prophet (ﷺ) said: 'No Muslim supplicates with this in any difficulty except that Allah answers him.'",
    source: "Jami` at-Tirmidhi 3505",
    grading: "Sahih",
    repetitions: 3,
    audioDuration: "0:07",
  },
  {
    id: "dua-a-2",
    category: "stress",
    tag: "Heart Ease",
    title: "Protection from Heavy Grief & Debt",
    subtitle: "(The 8 Burdens Dua)",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    transliteration:
      "Allāhumma innī a'ūdhu bika minal-hammi wal-ḥazan, wal-'ajzi wal-kasal, wal-jubni wal-bukhl, wa ḍala'id-dayni wa ghalabatir-rijāl.",
    translation:
      "“O Allah, I seek refuge in You from grief and sadness, from weakness and laziness, from cowardice and stinginess, and from the burden of debt and being overpowered by men.”",
    benefit:
      "Directly addresses modern stress: anticipatory worry, past regrets, cognitive inertia, and financial tightness.",
    source: "Sahih al-Bukhari 2893",
    grading: "Sahih",
    repetitions: 1,
    audioDuration: "0:12",
  },
  {
    id: "dua-a-3",
    category: "stress",
    tag: "Overcoming Overwhelm",
    title: "Affirming Divine Sufficiency",
    subtitle: "(Hasbunallahu wa Ni'mal Wakeel)",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Ḥasbunallāhu wa ni'mal-Wakīl.",
    translation: "“Allah is sufficient for us, and He is the best Disposer of affairs.”",
    benefit:
      "Said by Prophet Ibrahim (AS) when thrown into the fire, and by the Companions during severe crisis.",
    source: "Sahih al-Bukhari 4563",
    grading: "Sahih",
    repetitions: 7,
    audioDuration: "0:04",
  },
];
