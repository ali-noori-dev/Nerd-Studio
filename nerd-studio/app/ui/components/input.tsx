interface Props {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  startIcon?: JSX.Element;
}
export function Input({
  placeholder,
  value,
  setValue,
  inputRef,
  startIcon,
}: Props) {
  return (
    <div className={`relative`}>
      {startIcon && (
        <span className="absolute top-1/2 -translate-y-1/2 left-4">
          {startIcon}
        </span>
      )}

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        ref={inputRef}
        className={`block w-full h-9 bg-secondary focus:outline-primary rounded-xl py-3 pr-8 pl-10 appearance-none leading-normal transition-colors duration-200 text-gray-600 placeholder:text-xs`}
      />
    </div>
  );
}
