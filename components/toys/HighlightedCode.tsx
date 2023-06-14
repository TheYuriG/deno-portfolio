//todo
function clickToCopy(value: string) {
  //todo
  navigator.clipboard.writeText(value);
}

//todo
export default function HighlightedCode(
  { textToHighlight }: { textToHighlight: string },
) {
  return (
    <>
      <div
        class="shj-lang-js self-start select-none"
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
    </>
  );
}
