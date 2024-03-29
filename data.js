var levels = {
    'beginner': [
	'arb', 'cmn', 'eng', 'fra', 'deu', 'hin', 'jpn', 'rus', 'spa', 'swh', 'swe', 'tur'
    ],
    'easy': [
	'arb', 'cmn', 'dan', 'nld', 'eng', 'fin', 'fra', 'deu', 'ell', 'heb', 'hin', 'ita', 'jpn', 'kor', 'nor', 'pol',
	'por', 'rus', 'spa', 'swh', 'swe', 'tha', 'tur', 'vie'
    ],
    'medium': [
	'afr', 'aln', 'amh', 'arb', 'hye', 'ben', 'bul', 'cmn', 'yue', 'ces', 'dan', 'nld', 'eng', 'ekk', 'fao', 'prs',
	'fil', 'fin', 'fra', 'deu', 'ell', 'hat', 'hau', 'heb', 'hin', 'hun', 'ind', 'ita', 'jpn', 'kor', 'lvs', 'mkd',
	'zlm', 'mlt', 'mon', 'npi', 'nor', 'pol', 'por', 'ron', 'rus', 'srp', 'slk', 'slv', 'som', 'spa', 'swh', 'swe',
	'tam', 'tha', 'tur', 'ukr', 'urd', 'uzn', 'vie', 'xho', 'ydd', 'yor'
    ],
    'hard': [
	'ace', 'afr', 'ain', 'aln', 'amh', 'arb', 'hye', 'aii', 'ban', 'ben', 'bug', 'bul', 'mya', 'cat', 'cmn', 'wuu',
	'yue', 'hrv', 'ces', 'dan', 'dik', 'nld', 'eng', 'epo', 'ekk', 'fao', 'prs', 'fij', 'fil', 'fin', 'fra', 'fry',
	'deu', 'ell', 'guj', 'hat', 'hau', 'heb', 'hin', 'hun', 'ind', 'ita', 'jpn', 'jav', 'kan', 'khm', 'kor', 'kmr',
	'lao', 'lat', 'lvs', 'ltz', 'mkd', 'zlm', 'mal', 'mlt', 'mar', 'min', 'mon', 'npi', 'nor', 'oci', 'ory', 'oss',
	'pam', 'pus', 'pol', 'por', 'pnb', 'ron', 'rus', 'smo', 'srp', 'slk', 'slv', 'som', 'spa', 'sun', 'swh', 'swe',
	'tam', 'tha', 'tir', 'ton', 'tur', 'ukr', 'urd', 'uzn', 'vie', 'xho', 'ydd', 'yor'
    ],
    'texteasy': [
	'arb', 'arm', 'ink', 'chk', 'chi', 'chn', 'cyr', 'nag', 'eth', 'geo', 'gre', 'hgl', 'heb', 'jav', 'kji', 'lat',
	'mgl', 'nsh', 'tha', 'tbt'
    ],
    'texthard': [
	'arb', 'arm', 'avs', 'bal', 'bat', 'bay', 'ben', 'brm', 'ink', 'chk', 'chi', 'chn', 'cpt', 'cyr', 'nag', 'eth',
	'geo', 'gre', 'guj', 'gmk', 'hgl', 'hno', 'heb', 'jav', 'kji', 'kda', 'khm', 'lat', 'lta', 'mym', 'mgl', 'ntf',
	'nmg', 'njk', 'nsh', 'odi', 'olc', 'shl', 'snd', 'tml', 'tel', 'tna', 'tha', 'tbt', 'vai', 'iii'
    ]
}

var allScripting = levels['texthard']

var allSpeech = levels['hard']

var speechCodes = {
  "ace": "Acehnese",
  "afr": "Afrikaans",
  "ain": "Ainu",
  "aln": "Albanian",
  "amh": "Amharic",
  "arb": "Arabic",
  "hye": "Armenian",
  "aii": "Assyrian",
  "ban": "Balinese",
  "ben": "Bengali",
  "bug": "Buginese",
  "bul": "Bulgarian",
  "mya": "Burmese",
  "cat": "Catalan",
  "cmn": "Chinese,  Mandarin",
  "wuu": "Chinese,  Wu",
  "yue": "Chinese,  Yue",
  "hrv": "Croatian",
  "ces": "Czech",
  "dan": "Danish",
  "dik": "Dinka",
  "nld": "Dutch",
  "eng": "English",
  "epo": "Esperanto",
  "ekk": "Estonian",
  "fao": "Faroese",
  "prs": "Farsi",
  "fij": "Fijian",
  "fil": "Filipino",
  "fin": "Finnish",
  "fra": "French",
  "fry": "Frisian",
  "deu": "German",
  "ell": "Greek",
  "guj": "Gujarati",
  "hat": "Haitian Creole",
  "hau": "Hausa",
  "heb": "Hebrew",
  "hin": "Hindi",
  "hun": "Hungarian",
  "ind": "Indonesian",
  "ita": "Italian",
  "jpn": "Japanese",
  "jav": "Javanese",
  "kan": "Kannada",
  "khm": "Khmer",
  "kor": "Korean",
  "kmr": "Kurdish",
  "lao": "Lao",
  "lat": "Latin",
  "lvs": "Latvian",
  "ltz": "Luxembourgish",
  "mkd": "Macedonian",
  "zlm": "Malay",
  "mal": "Malayalam",
  "mlt": "Maltese",
  "mar": "Marathi",
  "min": "Minangkabau",
  "mon": "Mongolian",
  "npi": "Nepali",
  "nor": "Norwegian",
  "oci": "Occitan",
  "ory": "Odia",
  "oss": "Ossetian",
  "pam": "Pampangan",
  "pus": "Pashto",
  "pol": "Polish",
  "por": "Portuguese",
  "pnb": "Punjabi",
  "ron": "Romanian",
  "rus": "Russian",
  "smo": "Samoan",
  "srp": "Serbian",
  "slk": "Slovak",
  "slv": "Slovenian",
  "som": "Somali",
  "spa": "Spanish",
  "sun": "Sundanese",
  "swh": "Swahili",
  "swe": "Swedish",
  "tam": "Tamil",
  "tha": "Thai",
  "tir": "Tigrinya",
  "ton": "Tongan",
  "tur": "Turkish",
  "ukr": "Ukrainian",
  "urd": "Urdu",
  "uzn": "Uzbek",
  "vie": "Vietnamese",
  "xho": "Xhosa",
  "ydd": "Yiddish",
  "yor": "Yoruba"
}

var scriptCodes = {
  "arb": "Arabic",
  "arm": "Armenian",
  "avs": "Avestan",
  "bal": "Balinese",
  "bat": "Batak",
  "bay": "Baybayin",
  "ben": "Bengal",
  "brm": "Burmese",
  "ink": "Canadian Aboriginal",
  "chk": "Cherokee",
  "chi": "Chinese, Simplified",
  "chn": "Chinese, Traditional",
  "cpt": "Coptic",
  "cyr": "Cyrillic",
  "nag": "Devanagari",
  "eth": "Ethiopic",
  "geo": "Georgian",
  "gre": "Greek",
  "guj": "Gujarati",
  "gmk": "Gurmukhi",
  "hgl": "Hangul",
  "hno": "Hanunó'o",
  "heb": "Hebrew",
  "jav": "Javanese",
  "kji": "Kana/Kanji",
  "kda": "Kannada",
  "khm": "Khmer",
  "lat": "Latin",
  "lta": "Lontara",
  "mym": "Malayalam",
  "mgl": "Mongol",
  "ntf": "Neo-Tifinagh",
  "nmg": "New Mong",
  "njk": "Njuka",
  "nsh": "Nu Shu",
  "odi": "Odia",
  "olc": "Santali",
  "shl": "Sinhala",
  "snd": "Sundanese",
  "tml": "Tamil",
  "tel": "Telugu",
  "tna": "Thaana",
  "tha": "Thai",
  "tbt": "Tibetan",
  "vai": "Vai",
  "iii": "Yi"
}

var audiofiles = {
    'ace': ['pcut_1_human_rights_un_ace_adam.mp3', 'pcut_3_human_rights_un_ace_adam.mp3',
	    'pcut_5_human_rights_un_ace_adam.mp3', 'pcut_2_human_rights_un_ace_adam.mp3',
	    'pcut_4_human_rights_un_ace_adam.mp3'],
    'afr': ['pcut_3_afrikaans_20160911_DIE_TALE_WAT_ONS_PRAAT.mp3', 'pcut_4_20151108_HOE_VERKLAAR_JY_DIT.mp3',
	    'pcut_5_human_rights_un_afk_cdb.mp3', 'pcut_2_20151025_HOE_VERKLAAR_JY_DIT.mp3',
	    'pcut_1_20151018_HOE_VERKLAAR_JY_DIT.mp3'],
    'ain': ['pcut_4_ainu.mp3', 'pcut_3_ainu.mp3', 'pcut_5_ainu.mp3', 'pcut_1_ainu.mp3', 'pcut_2_ainu.mp3'],
    'aln': ['pcut_5_albanian_151114_453289.mp3', 'pcut_2_albanian_130809_281900.mp3',
	    'pcut_1_albanian_130731_280275.mp3', 'pcut_4_albanian_160911_553497.mp3', 'pcut_3_albanian_130809_281908.mp3'],
    'amh': ['pcut_1_amharic.mp3', 'pcut_4_amharic.mp3', 'pcut_5_amharic.mp3', 'pcut_3_amharic.mp3',
	    'pcut_2_amharic.mp3'],
    'arb': ['pcut_1_arabic.mp3', 'pcut_5_arabic_egyptian_human_rights_un_arz_ef.mp3', 'pcut_4_arabic_150410_404131.mp3',
	    'pcut_2_arabic_150324_400482.mp3', 'pcut_3_arabic.mp3'],
    'hye': ['pcut_5_armenian.mp3', 'pcut_3_armenian.mp3', 'pcut_1_armenian.mp3', 'pcut_4_armenian.mp3',
	    'pcut_2_armenian.mp3'],
    'aii': ['pcut_3_assyrian.mp3', 'pcut_5_assyrian.mp3', 'pcut_1_assyrian.mp3', 'pcut_2_assyrian.mp3',
	    'pcut_4_assyrian.mp3'],
    'ban': ['pcut_2_balinese.mp3', 'pcut_4_balinese.mp3', 'pcut_5_balinese.mp3', 'pcut_1_balinese.mp3',
	    'pcut_3_balinese.mp3'],
    'ben': ['pcut_4_bengali_160912_553972.mp3',
	    'pcut_3_bengali_gangolpo_waqeel_ahad_270315_150327_pg_gangolpo_wakil_ahad_au_bb.mp3',
	    'pcut_2_bengali_130720_278354.mp3', 'pcut_5_bengali_150316_398622.mp3',
	    'pcut_1_bengali_2b704d5c_bd_blogger_killing_analysis_150330_pg_bd_blogger_murder_analysis_au_bb.mp3'],
    'bug': ['pcut_2_buginese.mp3', 'pcut_5_buginese.mp3', 'pcut_4_buginese.mp3', 'pcut_1_buginese.mp3',
	    'pcut_3_buginese.mp3'],
    'bul': ['pcut_5_bulgarian.mp3', 'pcut_2_bulgarian.mp3', 'pcut_4_bulgarian.mp3', 'pcut_3_bulgarian.mp3',
	    'pcut_1_bulgarian.mp3'],
    'mya': ['pcut_3_burmese.mp3', 'pcut_4_burmese.mp3', 'pcut_2_burmese.mp3', 'pcut_5_burmese.mp3',
	    'pcut_1_burmese.mp3'],
    'cat': ['pcut_4_catalan.mp3', 'pcut_2_catalan.mp3', 'pcut_1_catalan.mp3', 'pcut_3_catalan.mp3',
	    'pcut_5_catalan.mp3'],
    'cmn': ['pcut_1_mandarin_49c45e9e-1975-4df8-ac76-3fc73c2de72f.mp3', 'pcut_5_mandarin_150324_400270.mp3',
	    'pcut_3_mandarin_150320_399518.mp3', 'pcut_4_mandarin_150320_399602.mp3', 'pcut_2_mandarin_150319_399246.mp3'],
    'wuu': ['pcut_3_wu.mp3', 'pcut_5_wu.mp3', 'pcut_1_wu.mp3', 'pcut_4_wu.mp3', 'pcut_2_wu.mp3'],
    'yue': ['pcut_1_cantonese.mp3', 'pcut_4_cantonese.mp3', 'pcut_5_cantonese.mp3', 'pcut_3_cantonese.mp3',
	    'pcut_2_cantonese.mp3'],
    'hrv': ['pcut_4_croatian.mp3', 'pcut_5_croatian.mp3', 'pcut_2_croatian.mp3', 'pcut_3_croatian.mp3',
	    'pcut_1_croatian.mp3'],
    'ces': ['pcut_3_czech.mp3', 'pcut_5_czech.mp3', 'pcut_2_czech.mp3', 'pcut_4_czech.mp3', 'pcut_1_czech.mp3'],
    'dan': ['pcut_1_danish.mp3', 'pcut_2_danish.mp3', 'pcut_4_danish.mp3', 'pcut_3_danish.mp3', 'pcut_5_danish.mp3'],
    'dik': ['pcut_1_dinka.mp3', 'pcut_4_dinka.mp3', 'pcut_2_dinka.mp3', 'pcut_3_dinka.mp3', 'pcut_5_dinka.mp3'],
    'nld': ['pcut_5_human_rights_un_dut_mb.mp3', 'pcut_2_dutch_130810_282046.mp3', 'pcut_3_dutch_130810_282048.mp3',
	    'pcut_4_dutch.mp3', 'pcut_1_dutch_130810_282044.mp3'],
    'eng': ['pcut_1_english_20150320_me_the_man_who_measures_the_pain_of_insect_stings.mp3',
	    'pcut_5_enlgish_r1407090_20127031.mp3', 'pcut_4_english_r1388595_19725022.mp3',
	    'pcut_2_english_20150320_me_march_madness_kicks_off_with_high_drama.mp3',
	    'pcut_3_enlgish_human_rights_un_eng_drb.mp3'],
    'epo': ['pcut_1_esperanto.mp3', 'pcut_4_esperanto.mp3', 'pcut_2_esperanto.mp3', 'pcut_5_esperanto.mp3',
	    'pcut_3_esperanto.mp3'],
    'ekk': ['pcut_1_estonian.mp3', 'pcut_5_estonian.mp3', 'pcut_3_estonian.mp3', 'pcut_4_estonian.mp3',
	    'pcut_2_estonian.mp3'],
    'fao': ['pcut_1_faroese.mp3', 'pcut_5_faroese.mp3', 'pcut_2_faroese.mp3', 'pcut_3_faroese.mp3',
	    'pcut_4_faroese.mp3'],
    'prs': ['pcut_3_farsi.mp3', 'pcut_4_farsi.mp3', 'pcut_1_farsi.mp3', 'pcut_2_farsi.mp3', 'pcut_5_farsi.mp3'],
    'fij': ['pcut_5_fijian.mp3', 'pcut_4_fijian.mp3', 'pcut_2_fijian.mp3', 'pcut_3_fijian.mp3', 'pcut_1_fijian.mp3'],
    'fil': ['pcut_2_filipino.mp3', 'pcut_1_filipino.mp3', 'pcut_4_filipino.mp3', 'pcut_3_filipino.mp3',
	    'pcut_5_filipino.mp3'],
    'fin': ['pcut_1_finnish_6b090019d63d43fb84900658ac306969.mp3', 'pcut_5_finnish_160908_552070.mp3',
	    'pcut_3_finnish_9bc5dfe2013d4c3fa3086c9e8c846185.mp3', 'pcut_2_finnish.mp3',
	    'pcut_4_finnish_44ae1ca4fb5c4f9998681dc0bcdb51df.mp3'],
    'fra': ['pcut_2_french_grand_reportage_20150319.mp3', 'pcut_1_french_4CA5FBD2_2-podcast-1854-17987522.mp3',
	    'pcut_4_french_hobjets-20130625-1450.mp3', 'pcut_5_french_hobjets-20130726-1713.mp3',
	    'pcut_3_french_human_rights_un_frn_ezwa.mp3'],
    'fry': ['pcut_1_frisian.mp3', 'pcut_5_frisian.mp3', 'pcut_3_frisian.mp3', 'pcut_4_frisian.mp3',
	    'pcut_2_frisian.mp3'],
    'deu': ['pcut_5_german_human_rights_un_ger_robu.mp3', 'pcut_1_german_150321_399844.mp3',
	    'pcut_4_german_sri_tyska_20150320_1600_37f3e4b.mp3', 'pcut_3_german_150324_400494.mp3',
	    'pcut_2_german_150323_400210.mp3'],
    'ell': ['pcut_5_greek_human_rights_un_grc_pi.mp3', 'pcut_2_greek_151116_453611.mp3',
	    'pcut_3_greek_160916_556122.mp3', 'pcut_4_greek_160916_556081.mp3', 'pcut_1_greek_130808_281735.mp3'],
    'guj': ['pcut_4_gujarati.mp3', 'pcut_3_gujarati.mp3', 'pcut_2_gujarati.mp3', 'pcut_1_gujarati.mp3',
	    'pcut_5_gujarati.mp3'],
    'hat': ['pcut_1_haitiancreole.mp3', 'pcut_5_haitiancreole.mp3', 'pcut_4_haitiancreole.mp3',
	    'pcut_2_haitiancreole.mp3', 'pcut_3_haitiancreole.mp3'],
    'hau': ['pcut_5_hausa.mp3', 'pcut_1_hausa.mp3', 'pcut_2_hausa.mp3', 'pcut_3_hausa.mp3', 'pcut_4_hausa.mp3'],
    'heb': ['pcut_5_hebrew.mp3', 'pcut_3_hebrew.mp3', 'pcut_4_hebrew.mp3', 'pcut_2_hebrew.mp3', 'pcut_1_hebrew.mp3'],
    'hin': ['pcut_2_hindi_150322_399956.mp3', 'pcut_4_hindi_150324_400384.mp3', 'pcut_5_hindi_150403_402682.mp3',
	    'pcut_3_hindi_150323_400142.mp3', 'pcut_1_hindi_150321_399822.mp3'],
    'hun': ['pcut_1_hungarian.mp3', 'pcut_3_hungarian.mp3', 'pcut_2_hungarian.mp3', 'pcut_4_hungarian.mp3',
	    'pcut_5_hungarian.mp3'],
    'ind': ['pcut_3_indonesian.mp3', 'pcut_5_indonesian.mp3', 'pcut_4_indonesian.mp3', 'pcut_2_indonesian.mp3',
	    'pcut_1_indonesian.mp3'],
    'ita': ['pcut_5_italian_160916_555733.mp3', 'pcut_1_italian_151005-24mattino-s.mp3',
	    'pcut_3_italian_151009_445079.mp3', 'pcut_4_italian_160916_555720.mp3',
	    'pcut_2_italian_human_rights_un_ita_dan.mp3'],
    'jpn': ['pcut_3_japanese_130810_282066.mp3', 'pcut_2_japanese_130810_282064.mp3',
	    'pcut_1_japanese_human_rights_un_jpn_k.mp3', 'pcut_5_japanese_160914_554833.mp3',
	    'pcut_4_japanese_150320_399548.mp3'],
    'jav': ['pcut_3_javanese.mp3', 'pcut_5_javanese.mp3', 'pcut_1_javanese.mp3', 'pcut_4_javanese.mp3',
	    'pcut_2_javanese.mp3'],
    'kan': ['pcut_5_kannada.mp3', 'pcut_2_kannada.mp3', 'pcut_4_kannada.mp3', 'pcut_3_kannada.mp3',
	    'pcut_1_kannada.mp3'],
    'khm': ['pcut_4_khmer.mp3', 'pcut_2_khmer.mp3', 'pcut_1_khmer.mp3', 'pcut_5_khmer.mp3', 'pcut_3_khmer.mp3'],
    'kor': ['pcut_3_korean_130808_281693.mp3', 'pcut_1_korean_20150319-120000-VKO-program.mp3',
	    'pcut_2_korean_20150320-110000-VKO-program.mp3', 'pcut_4_korean_150321_399816.mp3',
	    'pcut_5_korean_150403_402782.mp3'],
    'kmr': ['pcut_3_kurdish.mp3', 'pcut_4_kurdish.mp3', 'pcut_2_kurdish.mp3', 'pcut_5_kurdish.mp3',
	    'pcut_1_kurdish.mp3'],
    'lao': ['pcut_1_lao.mp3', 'pcut_2_lao.mp3', 'pcut_5_lao.mp3', 'pcut_4_lao.mp3', 'pcut_3_lao.mp3'],
    'lat': ['pcut_3_latin.mp3', 'pcut_2_latin.mp3', 'pcut_4_latin.mp3', 'pcut_5_latin.mp3', 'pcut_1_latin.mp3'],
    'lvs': ['pcut_1_latvian.mp3', 'pcut_5_latvian.mp3', 'pcut_3_latvian.mp3', 'pcut_4_latvian.mp3',
	    'pcut_2_latvian.mp3'],
    'ltz': ['pcut_2_luxembourgish.mp3', 'pcut_1_luxembourgish.mp3', 'pcut_5_luxembourgish.mp3',
	    'pcut_3_luxembourgish.mp3', 'pcut_4_luxembourgish.mp3'],
    'mkd': ['pcut_1_macedonian.mp3', 'pcut_5_macedonian.mp3', 'pcut_3_macedonian.mp3', 'pcut_2_macedonian.mp3',
	    'pcut_4_macedonian.mp3'],
    'zlm': ['pcut_1_malay_130718_278022.mp3', 'pcut_5_malay_human_rights_un_mli_rh.mp3',
	    'pcut_2_malay_130719_278188.mp3', 'pcut_4_malay.mp3', 'pcut_3_malay_130720_278376.mp3'],
    'mal': ['pcut_5_malayalam.mp3', 'pcut_3_malayalam.mp3', 'pcut_2_malayalam.mp3', 'pcut_4_malayalam.mp3',
	    'pcut_1_malayalam.mp3'],
    'mlt': ['pcut_3_maltese.mp3', 'pcut_4_maltese.mp3', 'pcut_1_maltese.mp3', 'pcut_2_maltese.mp3',
	    'pcut_5_maltese.mp3'],
    'mar': ['pcut_5_marathi.mp3', 'pcut_1_marathi.mp3', 'pcut_2_marathi.mp3', 'pcut_3_marathi.mp3',
	    'pcut_4_marathi.mp3'],
    'min': ['pcut_4_minangkabau.mp3', 'pcut_3_minangkabau.mp3', 'pcut_5_minangkabau.mp3', 'pcut_2_minangkabau.mp3',
	    'pcut_1_minangkabau.mp3'],
    'mon': ['pcut_5_mongolian.mp3', 'pcut_2_mongolian.mp3', 'pcut_1_mongolian.mp3', 'pcut_4_mongolian.mp3',
	    'pcut_3_mongolian.mp3'],
    'npi': ['pcut_4_nepali.mp3', 'pcut_2_nepali.mp3', 'pcut_5_nepali.mp3', 'pcut_3_nepali.mp3', 'pcut_1_nepali.mp3'],
    'nor': ['pcut_3_norwegian.mp3', 'pcut_4_norwegian.mp3', 'pcut_2_norwegian.mp3', 'pcut_1_norwegian.mp3',
	    'pcut_5_norwegian.mp3'],
    'oci': ['pcut_4_occitan.mp3', 'pcut_5_occitan.mp3', 'pcut_1_occitan.mp3', 'pcut_2_occitan.mp3',
	    'pcut_3_occitan.mp3'],
    'ory': ['pcut_3_odia.mp3', 'pcut_4_odia.mp3', 'pcut_1_odia.mp3', 'pcut_2_odia.mp3', 'pcut_5_odia.mp3'],
    'oss': ['pcut_2_ossetian.mp3', 'pcut_3_ossetian.mp3', 'pcut_5_ossetian.mp3', 'pcut_4_ossetian.mp3',
	    'pcut_1_ossetian.mp3'],
    'pam': ['pcut_5_pampangan.mp3', 'pcut_3_pampangan.mp3', 'pcut_1_pampangan.mp3', 'pcut_2_pampangan.mp3',
	    'pcut_4_pampangan.mp3'],
    'pus': ['pcut_2_pashto.mp3', 'pcut_3_pashto.mp3', 'pcut_5_pashto.mp3', 'pcut_4_pashto.mp3', 'pcut_1_pashto.mp3'],
    'pol': ['pcut_2_polish_81dae23e-1ade-48d9-a57b-4113cfab18f8.mp3',
	    'pcut_1_polish_8bcfc624-aa34-4816-adf2-089e3ef63cde.mp3',
	    'pcut_4_polish_552a2a02-5a1f-4280-8cab-e498db66ad4a.mp3', 'pcut_5_polish_160914_554585.mp3',
	    'pcut_3_polish_00227d28-7b33-4016-ac55-ccb8a53d808c.mp3'],
    'por': ['pcut_2_portuguese_human_rights_un_bra_rljb.mp3', 'pcut_1_portuguese.mp3',
	    'pcut_4_portuguese_130811_282204.mp3', 'pcut_3_portuguese_human_rights_un_por_sl.mp3',
	    'pcut_5_portuguese_150401_402166.mp3'],
    'pnb': ['pcut_3_punjabi.mp3', 'pcut_2_punjabi.mp3', 'pcut_5_punjabi.mp3', 'pcut_1_punjabi.mp3',
	    'pcut_4_punjabi.mp3'],
    'ron': ['pcut_3_romanian.mp3', 'pcut_4_romanian.mp3', 'pcut_5_romanian.mp3', 'pcut_2_romanian.mp3',
	    'pcut_1_romanian.mp3'],
    'rus': ['pcut_5_russian_150323_400150.mp3', 'pcut_3_russian_130810_282034.mp3',
	    'pcut_1_russian_human_rights_un_rus_sd.mp3', 'pcut_4_russian_150323_400084.mp3',
	    'pcut_2_russian_130810_282028.mp3'],
    'smo': ['pcut_3_samoan.mp3', 'pcut_4_samoan.mp3', 'pcut_2_samoan.mp3', 'pcut_1_samoan.mp3', 'pcut_5_samoan.mp3'],
    'srp': ['pcut_2_serbian.mp3', 'pcut_1_serbian.mp3', 'pcut_5_serbian.mp3', 'pcut_4_serbian.mp3',
	    'pcut_3_serbian.mp3'],
    'slk': ['pcut_5_slovak.mp3', 'pcut_2_slovak.mp3', 'pcut_4_slovak.mp3', 'pcut_1_slovak.mp3', 'pcut_3_slovak.mp3'],
    'slv': ['pcut_3_slovenian.mp3', 'pcut_5_slovenian.mp3', 'pcut_2_slovenian.mp3', 'pcut_4_slovenian.mp3',
	    'pcut_1_slovenian.mp3'],
    'som': ['pcut_4_somali.mp3', 'pcut_3_somali.mp3', 'pcut_2_somali (1).mp3', 'pcut_5_somali.mp3',
	    'pcut_1_somali.mp3'],
    'spa': ['pcut_3_spanish_421bca28-d834-4709-985a-28ca1f69ba11.mp3',
	    'pcut_1_spanish_0b6f61ad-aec6-4f29-8f86-87e93e9c107e.mp3', 'pcut_4_spanish_human_rights_un_spa_mr.mp3',
	    'pcut_2_spanish_73adfa94-b923-4d04-9100-adaf64a22d43.mp3', 'pcut_5_spanish_150320_399570.mp3'],
    'sun': ['pcut_4_sundanese.mp3', 'pcut_1_sundanese.mp3', 'pcut_3_sundanese.mp3', 'pcut_2_sundanese.mp3',
	    'pcut_5_sundanese.mp3'],
    'swh': ['pcut_4_swahili.mp3', 'pcut_2_swahili.mp3', 'pcut_5_swahili_20151113-030000-VSW070-program.mp3',
	    'pcut_3_swahili_20151111-133000-VSW070-program.mp3', 'pcut_1_swahili.mp3'],
    'swe': ['pcut_4_swedish_151105_451201.mp3', 'pcut_5_swedish_151112_452837.mp3', 'pcut_2_swedish_151112_452833.mp3',
	    'pcut_1_swedish_130725_279148.mp3', 'pcut_3_swedish_151112_452833.mp3'],
    'tam': ['pcut_2_tamil.mp3', 'pcut_5_tamil.mp3', 'pcut_3_tamil.mp3', 'pcut_1_tamil.mp3', 'pcut_4_tamil.mp3'],
    'tha': ['pcut_1_thai.mp3', 'pcut_4_thai.mp3', 'pcut_5_thai.mp3', 'pcut_2_thai.mp3', 'pcut_3_thai.mp3'],
    'tir': ['pcut_1_tigrinya.mp3', 'pcut_2_tigrinya.mp3', 'pcut_3_tigrinya.mp3', 'pcut_5_tigrinya.mp3',
	    'pcut_4_tigrinya.mp3'],
    'ton': ['pcut_5_tongan.mp3', 'pcut_4_tongan.mp3', 'pcut_1_tongan.mp3', 'pcut_3_tongan.mp3', 'pcut_2_tongan.mp3'],
    'tur': ['pcut_1_turkish_130809_281922.mp3', 'pcut_4_turkish_160917_556314.mp3', 'pcut_2_turkish_130809_281928.mp3',
	    'pcut_5_turkish_150324_400404.mp3', 'pcut_3_turkish_150410_404259.mp3'],
    'ukr': ['pcut_5_ukrainian.mp3', 'pcut_3_ukrainian.mp3', 'pcut_2_ukrainian.mp3', 'pcut_1_ukrainian.mp3',
	    'pcut_4_ukrainian.mp3'],
    'urd': ['pcut_1_urdu.mp3', 'pcut_2_urdu.mp3', 'pcut_4_urdu.mp3', 'pcut_5_urdu.mp3', 'pcut_3_urdu.mp3'],
    'uzn': ['pcut_5_uzbek.mp3', 'pcut_2_uzbek.mp3', 'pcut_3_uzbek.mp3', 'pcut_4_uzbek.mp3', 'pcut_1_uzbek.mp3'],
    'vie': ['pcut_3_vietnamese_130810_282088.mp3',
	    'pcut_1_vietnamese_1e916a0f-bc09-427e-ace8-8b61d62298f9_original.mp3',
	    'pcut_2_vietnamese_42f0a737-43f2-4515-bed2-fce13559749b_original.mp3', 'pcut_4_vietnamese_150404_402858.mp3',
	    'pcut_5_vietnamese_150324_400428.mp3'],
    'xho': ['pcut_3_xhosa.mp3', 'pcut_1_xhosa.mp3', 'pcut_5_xhosa.mp3', 'pcut_2_xhosa.mp3', 'pcut_4_xhosa.mp3'],
    'ydd': ['pcut_1_yiddish.mp3', 'pcut_4_yiddish.mp3', 'pcut_2_yiddish.mp3', 'pcut_5_yiddish.mp3',
	    'pcut_3_yiddish.mp3'],
    'yor': ['pcut_2_yoruba.mp3', 'pcut_3_yoruba.mp3', 'pcut_5_yoruba.mp3', 'pcut_1_yoruba.mp3', 'pcut_4_yoruba.mp3']
}
