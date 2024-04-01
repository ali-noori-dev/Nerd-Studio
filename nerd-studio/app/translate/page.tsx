"use client";
import { useState } from "react";
import { languages } from "../lib/data";
import { SegmentedItem } from "../lib/definitions";
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
  const [inputSelectedLang, setInputSelectedLang] = useState(
    inputInitialLangs[0].title
  );
  const [outputSelectedLang, setOutputSelectedLang] = useState(
    languages[0].title
  );
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  return (
    <div className="max-w-[800px] mx-auto h-full w-full flex flex-col px-5">
      <h1 className="my-6 w-full text-[22px] font-bold">Translate</h1>
      <div className="flex-1 pb-5 flex flex-col gap-3 items-center">
        <TextTranslationSelector
          initialLangs={inputInitialLangs}
          selectedLang={inputSelectedLang}
          setSelectedLang={setInputSelectedLang}
          text={inputText}
          setText={setInputText}
          showAutoDetect
        />

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
