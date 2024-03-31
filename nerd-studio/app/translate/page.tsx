"use client";
import { useState } from "react";
import { SegmentedItem } from "../lib/definitions";
import SegmentedControl from "../ui/components/SegmentedControl";

const typeList: SegmentedItem[] = [
  {
    title: "Auto detect",
    id: 1,
  },
  {
    title: "English",
    id: 2,
  },
  {
    title: "Spanish",
    id: 3,
  },
];

export default function Translate() {
  const [selectedType, setSelectedType] = useState(1);

  return (
    <div className="max-w-[800px] mx-auto h-full w-full flex flex-col px-5">
      <h1 className="my-6 w-full text-[22px] font-bold">Translate</h1>
      <div className="flex-1 pb-5 flex flex-col items-center">
        <div className="w-full flex flex-col">
          <div className="flex gap-2">
            <SegmentedControl
              options={typeList}
              selectedOption={selectedType}
              setOption={setSelectedType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
