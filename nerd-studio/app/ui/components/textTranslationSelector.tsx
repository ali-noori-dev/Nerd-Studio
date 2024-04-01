import { languages } from "@/app/lib/data";
import { SegmentedItem } from "@/app/lib/definitions";
import { useState } from "react";
import Autocomplete from "./autocomplete";
import SegmentedControl from "./segmentedControl";
import { Textarea } from "./textArea";

interface Props {
  initialLangs: SegmentedItem[];
  selectedLang: string;
  setSelectedLang: (value: string) => void;
  text: string;
  setText: (value: string) => void;
  showAutoDetect?: boolean;
}

export function TextTranslationSelector({
  initialLangs,
  selectedLang,
  setSelectedLang,
  text,
  setText,
  showAutoDetect,
}: Props) {
  const [translationOptions, setTranslationOptions] =
    useState<SegmentedItem[]>(initialLangs);

  const handleLangChange = (selectedOption: SegmentedItem) => {
    setSelectedLang(selectedOption.title);
    // Check if the selected option is already in the list
    const isOptionInList = translationOptions.some(
      (item) => item.id === selectedOption.id
    );
    if (!isOptionInList) updateTranslationOptions(selectedOption);
  };

  const updateTranslationOptions = (selectedOption: SegmentedItem) => {
    const newOptions = [...translationOptions];
    if (showAutoDetect) {
      // Insert the selected option after "Auto detect" at index 1
      newOptions.splice(1, 0, selectedOption);
    } else newOptions.unshift(selectedOption);
    // Remove the last option to keep the list size consistent
    newOptions.pop();
    setTranslationOptions(newOptions);
  };

  return (
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
        rows={8}
      />
    </div>
  );
}
