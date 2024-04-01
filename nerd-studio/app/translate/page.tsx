"use client";
import { useEffect, useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { languages, translateText } from "../lib/data";
import { SegmentedItem } from "../lib/definitions";
import { PageHeader } from "../ui/components/pageHeader";
import { TextTranslationSelector } from "../ui/components/textTranslationSelector";

// Define the segmented item list with "Auto detect" and the first two languages
const inputInitialLangs: SegmentedItem[] = [
  {
    title: "Auto detect",
    id: 0,
  },
  ...languages.slice(0, 2),
];

export default function Translate() {
  // State variables for selected input and output languages, input text, and translated output
  const [inputSelectedLang, setInputSelectedLang] = useState(
    inputInitialLangs[0].title
  );
  const [outputSelectedLang, setOutputSelectedLang] = useState(
    languages[0].title
  );
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  // Effect to translate input text when it changes
  useEffect(() => {
    const delay = 1500;
    let timeoutId: NodeJS.Timeout;

    if (inputText) {
      timeoutId = setTimeout(() => {
        translateText({ inputText }).then((translatedText) => {
          if (translatedText) setOutputText(translatedText);
        });
      }, delay);
    }

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or inputText change
  }, [inputText]);

  return (
    <div className="max-w-[800px] mx-auto h-full w-full flex flex-col">
      <PageHeader title="Translate" />

      <div className="flex-1 pb-5 flex flex-col gap-3 items-center">
        {/* Input language selector */}
        <TextTranslationSelector
          initialLangs={inputInitialLangs}
          selectedLang={inputSelectedLang}
          setSelectedLang={setInputSelectedLang}
          text={inputText}
          setText={setInputText}
          showAutoDetect
        />

        {/* Swap button */}
        <AiOutlineSwap className="rotate-90 text-4xl text-gray-600 bg-secondary hover:bg-gray-200 p-2 rounded-full cursor-pointer" />

        {/* Output language selector */}
        <TextTranslationSelector
          initialLangs={languages.slice(0, 3)}
          selectedLang={outputSelectedLang}
          setSelectedLang={setOutputSelectedLang}
          text={outputText}
          setText={setOutputText}
        />
      </div>
    </div>
  );
}
