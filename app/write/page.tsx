"use client";
import { useState } from "react";
import { generateAIResponse, languages } from "../lib/data";
import { GeneralItem } from "../lib/definitions";
import Autocomplete from "../ui/components/autocomplete";
import ChipList from "../ui/components/chipList";
import { PageHeader } from "../ui/components/pageHeader";
import SegmentedControl from "../ui/components/segmentedControl";
import { Textarea } from "../ui/components/textArea";

const segmentedOptions: GeneralItem[] = [
  { title: "Compose", id: 1 },
  { title: "Reply", id: 2 },
];

type Length = "Auto" | "Short" | "Medium" | "Long";
const lengthList: Length[] = ["Auto", "Short", "Medium", "Long"];

type Format = "Auto" | "Email" | "Message" | "Comment";
const formatList: Format[] = ["Auto", "Email", "Message", "Comment"];

type Tone = "Auto" | "Amicable" | "Casual" | "Friendly";
const toneList: Tone[] = ["Auto", "Amicable", "Casual", "Friendly"];

export default function Write() {
  const [selectedOption, setSelectedOption] = useState(segmentedOptions[0]);
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [composeText, setComposeText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [length, setLength] = useState<Length>(lengthList[0]);
  const [format, setFormat] = useState<Format>(formatList[0]);
  const [tone, setTone] = useState<Tone>(toneList[0]);
  const [language, setLanguage] = useState<GeneralItem>(languages[0]);

  const getResponse = async () => {
    const composePrompt = `Write about below text in length {${length}} and format {${format}} and tone {${tone}} in {${language.title}} without additional explanations:\n ${composeText}`;

    const replayPrompt = `Write a reply in length {${length}} and format {${format}} and tone {${tone}} in {${language.title}}. The original text to which you want to reply is {${originalText}} and The general content of your reply to the original text is {${replyText}}. Only write reply without additional explanations`;

    const prompt = selectedOption.id === 1 ? composePrompt : replayPrompt;

    setLoading(true);
    const response = await generateAIResponse(prompt);
    setLoading(false);
    if (response) setGeneratedContent(response);
  };

  const isButtonDisabled =
    (selectedOption.id === 1 && !composeText) ||
    (selectedOption.id === 2 && !replyText) ||
    loading;

  const composeField = (
    <div className="flex flex-col gap-2">
      <div className="font-medium text-sm">Write About</div>
      <Textarea
        value={composeText}
        setValue={setComposeText}
        rows={5}
        placeholder="Tell me what to write for you. Hit Ctrl+Enter to generate."
      />
    </div>
  );

  const replyFields = (
    <>
      <div className="flex flex-col gap-2">
        <div className="font-medium text-sm">Original Text</div>
        <Textarea
          value={originalText}
          setValue={setOriginalText}
          rows={5}
          placeholder="The original text to which you want to reply"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-medium text-sm">What To Reply</div>
        <Textarea
          value={replyText}
          setValue={setReplyText}
          rows={5}
          placeholder="The general content of your reply to the above text. Hit Ctrl+Enter to generate draft"
        />
      </div>
    </>
  );

  return (
    <div className="flex flex-col w-full">
      <PageHeader title="Write" />

      <SegmentedControl
        options={segmentedOptions}
        selectedOption={selectedOption}
        setOption={(option) => {
          setSelectedOption(option);
          setGeneratedContent("");
        }}
      />

      <div className="mt-5 flex gap-6 flex-1">
        <div className="flex flex-col flex-1 pb-3">
          <div className="flex flex-1 flex-col gap-2 max-h-[526px] overflow-y-auto">
            {selectedOption.id === 1 ? composeField : replyFields}

            <div className="flex flex-col gap-5">
              <ChipList<Length>
                title="Length"
                items={lengthList}
                selectedItem={length}
                setItem={setLength}
              />

              <ChipList<Format>
                title="Format"
                items={formatList}
                selectedItem={format}
                setItem={setFormat}
              />

              <ChipList<Tone>
                title="Tone"
                items={toneList}
                selectedItem={tone}
                setItem={setTone}
              />

              <div className="flex flex-col gap-2">
                <div className="font-medium text-sm">Output Language</div>
                <Autocomplete
                  options={languages}
                  selectedOption={language}
                  setOption={setLanguage}
                  showSelectedOption
                  showOptionsAbove
                />
              </div>
            </div>
          </div>

          <button
            onClick={getResponse}
            disabled={isButtonDisabled}
            className="w-[50%] rounded-3xl h-11 flex justify-center items-center bg-primary hover:bg-[#9373ff] text-white disabled:bg-lightPrimary disabled:cursor-not-allowed mt-3"
          >
            {loading && <div className="loading mr-3"></div>}
            Regenerate
          </button>
        </div>

        <div className="w-[1px] h-full bg-[#4f596614]"></div>

        <div className="flex-1 overflow-y-auto">
          <div className="h-full flex flex-col gap-2 text-sm leading-6 font-medium">
            <div>Preview</div>

            {generatedContent ? (
              <Textarea
                value={generatedContent}
                setValue={setGeneratedContent}
                disableResizing
                fullHeight
              />
            ) : (
              <div className="text-[#c0c5cc] cursor-not-allowed flex-1">
                Generated content will display here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
