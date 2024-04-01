import { GeneralItem, Language } from "@/app/lib/definitions";
import { useEffect, useMemo, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineExpandMore } from "react-icons/md";
import { Input } from "./input";

interface Props {
  options: Language[];
  selectedOption: GeneralItem;
  setOption: (value: Language) => void;
}

function Autocomplete({ options, selectedOption, setOption }: Props) {
  const [value, setValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && showOptions) {
      inputRef.current.focus(); // Focus the input element when options are shown
    }
  }, [showOptions]);

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.title.toLowerCase().includes(value.toLowerCase())
      ),
    [options, value]
  );

  const handleOptionClick = (option: Language) => {
    setValue("");
    setShowOptions(false);
    if (option.id !== selectedOption.id) setOption(option);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(event.relatedTarget)) {
      setShowOptions(false);
      setValue("");
    }
  };

  const handleFocus = () => {
    if (!showOptions) setShowOptions(true);
  };

  return (
    <div
      ref={containerRef}
      tabIndex={-1} // This makes the div focusable
      className="outline-none relative"
      onBlur={(e) => handleBlur(e)}
      onClick={handleFocus}
    >
      <div className="cursor-pointer p-1 hover:bg-secondary w-[28px] h-[28px] rounded-lg">
        <MdOutlineExpandMore
          className={` text-xl transition-all ${showOptions && "rotate-180"}`}
        />
      </div>

      {showOptions && (
        <div className="flex flex-col gap-1 absolute p-2 top-[100%] right-0 z-10 w-[252px] h-[368px] max-h-[368px] py-1 mt-1 text-gray-600 bg-white rounded-lg shadow">
          <Input
            value={value}
            setValue={setValue}
            startIcon={<CiSearch />}
            inputRef={inputRef}
            placeholder="Search"
          />

          <ul className="flex flex-col gap-1 flex-1 overflow-auto">
            {filteredOptions.map((option, index) => {
              const isSelected = option.id === selectedOption.id;
              return (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`px-3 py-1 cursor-pointer hover:bg-secondary rounded-lg`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-medium ${
                        isSelected && "text-primary"
                      }`}
                    >
                      {option.title}
                    </span>
                    {isSelected && <FaCheck className="text-primary text-sm" />}
                  </div>

                  <div className="text-xs font-medium text-gray-400 mt-1">
                    {option.nativeTitle}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
