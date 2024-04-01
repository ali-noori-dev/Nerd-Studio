import { SegmentedItem } from "@/app/lib/definitions";
import { useId } from "react";

interface Props {
  options: SegmentedItem[];
  selectedOption: string;
  setOption: (value: string) => void;
}

export default function SegmentedControl({
  options,
  selectedOption,
  setOption,
}: Props) {
  const id = useId();
  return (
    <ul className="flex rounded-[20px] overflow-hidden bg-secondary p-1">
      {options.map((item, index) => (
        <li key={index} className="float-left list-none">
          <input
            className="absolute hidden"
            type="radio"
            value={item.id}
            name="option"
            id={`${id}-${item.id}`}
            checked={selectedOption === item.title}
            onChange={() => setOption(item.title)}
          />

          <label
            className={`block p-[5px_12px] text-center cursor-pointer rounded-[40px] text-sm font-medium transition-colors select-none duration-200 ${
              selectedOption === item.title && "bg-black text-white"
            }`}
            htmlFor={`${id}-${item.id}`}
          >
            {item.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
