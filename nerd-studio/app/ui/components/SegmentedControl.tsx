import { GeneralItem } from "@/app/lib/definitions";
import { useId } from "react";

interface Props {
  options: GeneralItem[];
  selectedOption: GeneralItem;
  setOption: (option: GeneralItem) => void;
}

export default function SegmentedControl({
  options,
  selectedOption,
  setOption,
}: Props) {
  const id = useId();
  return (
    <ul className="flex rounded-[20px] overflow-hidden bg-secondary p-1 w-fit">
      {options.map((item, index) => (
        <li key={index} className="float-left list-none">
          <input
            className="absolute hidden"
            type="radio"
            value={item.id}
            name="option"
            id={`${id}-${item.id}`}
            checked={selectedOption.id === item.id}
            onChange={() => setOption(item)}
          />

          <label
            className={`block p-[5px_12px] text-center cursor-pointer rounded-[40px] text-sm font-medium transition-colors select-none duration-200 ${
              selectedOption.id === item.id && "bg-black text-white"
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
