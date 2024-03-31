import { SegmentedItem } from "@/app/lib/definitions";

interface Props {
  options: SegmentedItem[];
  selectedOption: number;
  setOption: (value: number) => void;
}

export default function SegmentedControl({
  options,
  selectedOption,
  setOption,
}: Props) {
  return (
    <ul className="flex rounded-[20px] overflow-hidden bg-[#f1f2f3] p-1">
      {options.map((item) => (
        <li key={item.id} className="float-left list-none">
          <input
            className="absolute hidden"
            type="radio"
            value={item.id}
            name="option"
            id={`option-${item.id}`}
            checked={selectedOption === item.id}
            onChange={() => setOption(item.id)}
          />

          <label
            className={`block p-[5px_12px] text-center cursor-pointer rounded-[40px] text-sm font-[500] transition-colors select-none duration-200 ${
              selectedOption === item.id ? "bg-black text-white" : ""
            }`}
            htmlFor={`option-${item.id}`}
          >
            {item.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
