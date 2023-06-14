import { useMemo, useState } from "preact/hooks";
import { copyToClickboard } from "../services/copyToClipboard.ts";

//? Exports a code block that gets colored by
export default function HighlightedCode(
  { textToHighlight }: { textToHighlight: string },
) {
  const [hasCopied, didCopyToClipboard] = useState(false);
  return (
    <>
      {useMemo(() => (
        <div
          key="highlighted-code-block"
          class="shj-lang-js self-start select-none max-w-full"
          onClick={() => {
            const highlightedCodeBlock = document.getElementsByClassName(
              "shj-numbers",
            )[0]
              ?.nextElementSibling?.outerHTML;
            if (highlightedCodeBlock === null) {
              return;
            }

            const correctedCodeBlock = highlightedCodeBlock?.replace(
              "<div>",
              '<div class="shl-code-block">',
            )?.replaceAll("shj-syn", "shl");

            if (correctedCodeBlock === undefined) {
              console.log("unable to update outerHTML");
              return;
            }

            copyToClickboard(correctedCodeBlock);
            didCopyToClipboard(true);
            setTimeout(() => {
              didCopyToClipboard(false);
            }, 3000);
          }}
        >
          {textToHighlight}
        </div>
      ), [textToHighlight])}
      <p class="inline-block self-start mt-2 md:mb-6">
        Copy to clipboard{" "}
        <span class="inline-block">
          {hasCopied ? "✅" : "⤴️"}
        </span>
      </p>
    </>
  );
}
