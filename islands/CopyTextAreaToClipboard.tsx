import { useState } from "preact/hooks";
//? Display wether the content was successfully copied to clipboard
import { CopyStatus } from "../components/misc/CopyStatus.tsx";
//? Function to copy content to clipboard
import { copyToClipboard } from "../services/copyToClipboard.ts";
import { StyledTextArea } from "../components/UI/StyledTextArea.tsx";

//?
export default function CopyTextAreaToClipboard(
  { content, classes }: { content: string; classes: string },
) {
  //? Manages what CopyStatus should be displaying
  const [didCopy, updateDidCopy] = useState<true | undefined>(undefined);

  return (
    <>
      <div
        class={classes}
        onClick={() => {
          copyToClipboard(content);
          updateDidCopy(true);
          setTimeout(() => {
            updateDidCopy(undefined);
          }, 3000);
        }}
      >
        <StyledTextArea
          placeholder={content}
          disabled={true}
          labelLink="copy-to-clipboard"
        />
      </div>
      <CopyStatus copyStatus={didCopy} />
    </>
  );
}
