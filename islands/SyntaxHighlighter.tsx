import { useState } from "preact/hooks";
import StyledButton from "./StyledButton.tsx";
// import hljs from "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/es/highlight.min.js";

function clickToCopy(value: string) {
  navigator.clipboard.writeText(value);
}

export default function SyntaxHighlighter() {
  const [textToHighlight, updateText] = useState(
    "start typing on the left side to add text here",
  );
  return (
    <div class="flex flex-col w-full space-y-4 md:(flex-row space-y-0 space-x-4)">
      <form
        class="flex flex-col w-full"
        action="post"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label
          htmlFor="highlighted text"
          class="flex flex-col"
        >
          <span class="text-center text-lg f-as">
            Input
          </span>
          <textarea
            class="w-full min-h-[20em] p-2 custom-bg-bc custom-bo-ac rounded-2xl ph-nc styled-scrollbar custom-tr-txbgbo"
            name="syntax highlight"
            id="syntax"
            onInput={(e) => {
              const { target } = e;
              if (target) {
                const changedValue = (target as HTMLTextAreaElement).value;
                updateText(changedValue);
              }
            }}
          >
          </textarea>
        </label>
        <StyledButton classes="self-end mt-4" text="Highlight!" />
      </form>
      <div class="flex flex-col w-full">
        <p class="flex flex-col text-center text-lg f-as">
          Result
        </p>
        <div
          key="highlighted-output"
          class="w-full min-h-[10em] h-full p-2 custom-bg-bc custom-bo-ac rounded-2xl ph-nc styled-scrollbar custom-tr-txbgbo select-none shj-lang-js"
          onClick={() => {
            clickToCopy(textToHighlight);
          }}
        >
          {textToHighlight}
        </div>
        <p class="inline-block self-end mt-2 md:mb-6">
          <span class="inline-block" style="transform: scale(-1, 1);">
            ⤴️
          </span>{" "}
          Click to copy to clipboard!
        </p>
      </div>
    </div>
  );
}
