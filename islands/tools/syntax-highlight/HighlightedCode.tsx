import { useMemo, useRef, useState } from "preact/hooks";
//? Function to copy content to clipboard
import { copyToClipboard } from "../../../services/copyToClipboard.ts";
//? Import type for typecasting useState
import type { booleanOrUndefined } from "../../../types/misc/booleanOrUndefined.ts";
//? Import status report toggle
import { CopyStatus } from "../../../components/misc/CopyStatus.tsx";

//? Define function that will try to copy the edited content to
//? clipboard and then update the success state
function copyCodeBlockContentToClipboard(
  didCopyToClipboard: (toggleCopy: boolean | undefined) => void,
  codeBlockDivElement: HTMLDivElement | null,
) {
  //? Attempts to find the element that was highlighted
  const highlightedCodeBlock = (codeBlockDivElement?.firstChild?.firstChild
    ?.nextSibling as HTMLDivElement)?.outerHTML;

  //? Check if nothing was highlighted to be replaced, returns error if so
  if (highlightedCodeBlock === undefined) {
    didCopyToClipboard(false);
    return;
  }

  //? Attempt to update the content of 'highlightedCodeBlock' with
  //? the proper classes, if anything was highlighted at all
  const correctedCodeBlock = highlightedCodeBlock?.replace(
    "<div>",
    '<div class="shl-block">',
  )
    //* Replace class tag
    ?.replaceAll("shj-syn", "shl")
    //* Replace opening bracket "{" with HTML symbol
    ?.replaceAll("{", "&#123;")
    //* Replace closing bracket "}" with HTML symbol
    ?.replaceAll("}", "&#125;")
    //* Fix highlighter bug of putting the span end tag of the comment on the next line
    //* ↓</span>(spaces) => </span>↓(spaces)
    //! If this isn't done, every line after a comment line will
    //! display 2 spaces before the code
    ?.replace(/\n<\/span>(\s+)/g, "</span>\n$1")
    //* Preserving spaces and newlines
    ?.replace(
      /(\n\s*)/g,
      "{`$1`}",
    );

  //? If everything worked fine, copy to clipboard
  copyToClipboard(correctedCodeBlock);
  //? Update status message and reset it later
  didCopyToClipboard(true);
  setTimeout(() => {
    didCopyToClipboard(undefined);
  }, 3000);
}

//? Exports a code block that gets colored by
export default function HighlightedCode(
  { textToHighlight }: { textToHighlight: string },
) {
  //? Store the HTML element reference to the code block
  const codeBlock = useRef<HTMLDivElement>(null);
  //? Tracks what is the message to be displayed about the "copy to clipboard" status
  const [hasCopied, didCopyToClipboard] = useState<booleanOrUndefined>();

  return (
    <>
      {useMemo(() => (
        <div
          ref={codeBlock}
          key="highlighted-code-block"
          class="shj-lang-js self-start select-none max-w-full"
          onClick={() => {
            copyCodeBlockContentToClipboard(
              didCopyToClipboard,
              codeBlock.current,
            );
          }}
        >
          {textToHighlight}
        </div>
      ), [])}
      {/* Updates user if code block content was copied */}
      <CopyStatus copyStatus={hasCopied} />
    </>
  );
}
