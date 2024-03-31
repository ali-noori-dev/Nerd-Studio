interface Props {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  disableResizing?: boolean;
}
export function Textarea({
  placeholder,
  value,
  setValue,
  disableResizing,
}: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      rows={8}
      className={`block w-full bg-secondary focus:outline-primary rounded-xl py-3 px-8 appearance-none leading-normal transition-colors duration-200 text-gray-600 placeholder:text-xs ${
        disableResizing && "disableResizing"
      }`}
    />
  );
}
