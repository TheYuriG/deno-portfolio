import { useState } from "preact/hooks";
//? Display wether the content was successfully copied to clipboard
import { CopyStatus } from "../components/misc/CopyStatus.tsx";
//? Function to copy content to clipboard
import { copyToClipboard } from "../services/copyToClipboard.ts";

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
        <textarea class="w-full min-h-[20em] p-2 custom-bg-bc custom-bo-ac rounded-2xl ph-nc styled-scrollbar custom-tr-txbgbo">
          {content}
        </textarea>
      </div>
      <CopyStatus copyStatus={didCopy} />
    </>
  );
}
