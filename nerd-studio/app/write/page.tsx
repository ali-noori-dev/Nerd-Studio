"use client";
import { useState } from "react";
import { GeneralItem } from "../lib/definitions";
import Compose from "../ui/components/compose";
import { PageHeader } from "../ui/components/pageHeader";
import Reply from "../ui/components/reply";
import SegmentedControl from "../ui/components/segmentedControl";

const segmentedOptions: GeneralItem[] = [
  { title: "Compose", id: 1 },
  { title: "Reply", id: 2 },
];

export default function Write() {
  const [selectedOption, setSelectedOption] = useState(segmentedOptions[0]);
  return (
    <div className="flex flex-col w-full">
      <PageHeader title="Write" />

      <SegmentedControl
        options={segmentedOptions}
        selectedOption={selectedOption}
        setOption={setSelectedOption}
      />

      <div className="mt-5 flex gap-6 flex-1">
        <div className="flex flex-col flex-1">
          {selectedOption.id === 1 ? <Compose /> : <Reply />}
          <button>Regenerate</button>
        </div>

        <div className=""></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
