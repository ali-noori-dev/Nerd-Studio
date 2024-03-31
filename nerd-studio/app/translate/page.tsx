"use client";
import { useState } from "react";
import { languages } from "../lib/data";
import { SegmentedItem } from "../lib/definitions";
import Autocomplete from "../ui/components/autocomplete";
import SegmentedControl from "../ui/components/segmentedControl";
import { Textarea } from "../ui/components/textArea";

// Define the segmented item list with "Auto detect" and the first two languages
const initialOptions: SegmentedItem[] = [
  {
    title: "Auto detect",
    id: 0,
  },
  ...languages.slice(0, 2),
];

export default function Translate() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [text, setText] = useState("");
  const [translationOptions, setTranslationOptions] =
    useState<SegmentedItem[]>(initialOptions);

  const handleLangChange = (selectedOption: SegmentedItem) => {
    setSelectedLang(selectedOption.id);
    // Check if the selected option is already in the list
    const isOptionInList = translationOptions.some(
      (item) => item.id === selectedOption.id
    );
    if (!isOptionInList) updateTranslationOptions(selectedOption);
  };

  const updateTranslationOptions = (selectedOption: SegmentedItem) => {
    const newOptions = [...translationOptions];
    // Insert the selected option after "Auto detect" at index 1
    newOptions.splice(1, 0, selectedOption);
    // Remove the last option to keep the list size consistent
    newOptions.pop();
    setTranslationOptions(newOptions);
  };

  return (
    <div className="max-w-[800px] mx-auto h-full w-full flex flex-col px-5">
      <h1 className="my-6 w-full text-[22px] font-bold">Translate</h1>
      <div className="flex-1 pb-5 flex flex-col items-center">
        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <SegmentedControl
              options={translationOptions}
              selectedOption={selectedLang}
              setOption={setSelectedLang}
            />

            <Autocomplete
              options={languages}
              selectedOption={selectedLang}
              setOption={handleLangChange}
            />
          </div>

          <Textarea
            placeholder="Enter text"
            value={text}
            setValue={setText}
            disableResizing
          />
        </div>
      </div>
    </div>
  );
}
