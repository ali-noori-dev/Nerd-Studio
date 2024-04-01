import { GeneralResultModel, Language } from "./definitions";

export const languages: Language[] = [
  {
    title: "English",
    nativeTitle: "English",
    id: 1,
  },
  {
    title: "Spanish",
    nativeTitle: "Español",
    id: 2,
  },
  {
    title: "Arabic",
    nativeTitle: "العربية",
    id: 3,
  },
  {
    title: "Chinese (Simplified)",
    nativeTitle: "中文 (简体)",
    id: 4,
  },
  {
    title: "Hindi",
    nativeTitle: "हिन्दी",
    id: 5,
  },
  {
    title: "Bengali",
    nativeTitle: "বাংলা",
    id: 6,
  },
  {
    title: "Portuguese",
    nativeTitle: "Português",
    id: 7,
  },
  {
    title: "Russian",
    nativeTitle: "Русский",
    id: 8,
  },
  {
    title: "Japanese",
    nativeTitle: "日本語",
    id: 9,
  },
  {
    title: "Lahnda",
    nativeTitle: "لہندا",
    id: 10,
  },
  {
    title: "German",
    nativeTitle: "Deutsch",
    id: 11,
  },
  {
    title: "Javanese",
    nativeTitle: "ꦧꦱꦗꦮ",
    id: 12,
  },
  {
    title: "Punjabi",
    nativeTitle: "پنجابی",
    id: 13,
  },
  {
    title: "Wu Chinese",
    nativeTitle: "吴语",
    id: 14,
  },
  {
    title: "Malay",
    nativeTitle: "Bahasa Melayu",
    id: 15,
  },
  {
    title: "Telugu",
    nativeTitle: "తెలుగు",
    id: 16,
  },
  {
    title: "Vietnamese",
    nativeTitle: "Tiếng Việt",
    id: 17,
  },
  {
    title: "Korean",
    nativeTitle: "한국어",
    id: 18,
  },
  {
    title: "French",
    nativeTitle: "Français",
    id: 19,
  },
  {
    title: "Tamil",
    nativeTitle: "தமிழ்",
    id: 20,
  },
  {
    title: "Urdu",
    nativeTitle: "اردو",
    id: 21,
  },
  {
    title: "Turkish",
    nativeTitle: "Türkçe",
    id: 22,
  },
  {
    title: "Italian",
    nativeTitle: "Italiano",
    id: 23,
  },
  {
    title: "Yue Chinese",
    nativeTitle: "粤语",
    id: 24,
  },
  {
    title: "Thai",
    nativeTitle: "ไทย",
    id: 25,
  },
  {
    title: "Gujarati",
    nativeTitle: "ગુજરાતી",
    id: 26,
  },
  {
    title: "Jin Chinese",
    nativeTitle: "晋语",
    id: 27,
  },
  {
    title: "Southern Min",
    nativeTitle: "閩南語",
    id: 28,
  },
  {
    title: "Persian",
    nativeTitle: "فارسی",
    id: 29,
  },
  {
    title: "Polish",
    nativeTitle: "Polski",
    id: 30,
  },
  {
    title: "Pashto",
    nativeTitle: "پښتو",
    id: 31,
  },
  {
    title: "Kannada",
    nativeTitle: "ಕನ್ನಡ",
    id: 32,
  },
  {
    title: "Xiang Chinese",
    nativeTitle: "湘语",
    id: 33,
  },
  {
    title: "Malayalam",
    nativeTitle: "മലയാളം",
    id: 34,
  },
  {
    title: "Sundanese",
    nativeTitle: "ᮘᮞ ᮞᮥᮔ᮪ᮓ",
    id: 35,
  },
  {
    title: "Hausa",
    nativeTitle: "Hausa",
    id: 36,
  },
  {
    title: "Odia",
    nativeTitle: "ଓଡ଼ିଆ",
    id: 37,
  },
  {
    title: "Burmese",
    nativeTitle: "ဗမာစာ",
    id: 38,
  },
  {
    title: "Hakka Chinese",
    nativeTitle: "客家話",
    id: 39,
  },
  {
    title: "Ukrainian",
    nativeTitle: "Українська",
    id: 40,
  },
  {
    title: "Bhojpuri",
    nativeTitle: "भोजपुरी",
    id: 41,
  },
  {
    title: "Tagalog",
    nativeTitle: "Tagalog",
    id: 42,
  },
  {
    title: "Yoruba",
    nativeTitle: "Yorùbá",
    id: 43,
  },
  {
    title: "Maithili",
    nativeTitle: "मैथिली",
    id: 44,
  },
  {
    title: "Uzbek",
    nativeTitle: "Oʻzbekcha",
    id: 45,
  },
  {
    title: "Sindhi",
    nativeTitle: "سنڌي",
    id: 46,
  },
  {
    title: "Amharic",
    nativeTitle: "አማርኛ",
    id: 47,
  },
  {
    title: "Fula",
    nativeTitle: "Fula",
    id: 48,
  },
  {
    title: "Romanian",
    nativeTitle: "Română",
    id: 49,
  },
  {
    title: "Oromo",
    nativeTitle: "Oromoo",
    id: 50,
  },
];

async function postApi(content: string) {
  try {
    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            {
              role: "user",
              content,
            },
          ],
          model: "deepseek-chat",
          frequency_penalty: 0,
          max_tokens: 2048,
          presence_penalty: 0,
          stop: null,
          stream: false,
          temperature: 1,
          top_p: 1,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer sk-cb45e498a91b48fd8255dc3649420acd",
        },
      }
    );

    const data: GeneralResultModel = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function translateText({ inputText }: { inputText: string }) {
  const content = `Translate the following text from {English} to {Farsi}:\n text\n ${inputText} \n`;
  const response = await postApi(content);
  const text = response?.choices[0]?.message?.content;
  return text;
}
