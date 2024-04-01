import { useState } from "react";
import ChipList from "./chipList";
import { Textarea } from "./textArea";

type Length = "Auto" | "Short" | "Medium" | "Long";
const lengthList: Length[] = ["Auto", "Short", "Medium", "Long"];

export default function Compose() {
  const [text, setText] = useState("");
  const [length, setLength] = useState<Length>(lengthList[0]);

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="font-medium text-sm">Write About</div>
        <Textarea
          value={text}
          setValue={setText}
          rows={5}
          placeholder="Tell me what to write for you. Hit Ctrl+Enter to generate."
        />
      </div>

      <div className="flex flex-col gap-5">
        <ChipList<Length>
          title="Length"
          items={lengthList}
          selectedItem={length}
          setItem={setLength}
        />
      </div>
    </div>
  );
}
