import { useId } from "react";

interface Props {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  disableResizing?: boolean;
  rows?: number;
}
export function Textarea({
  placeholder,
  value,
  setValue,
  disableResizing,
  rows,
}: Props) {
  const id = useId();
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      id={id}
      className={`block w-full bg-secondary focus:outline-primary rounded-xl py-3 px-4 appearance-none leading-normal transition-colors duration-200 text-gray-600 placeholder:text-xs placeholder-gray-500 ${
        disableResizing && "disableResizing"
      }`}
    />
  );
}
