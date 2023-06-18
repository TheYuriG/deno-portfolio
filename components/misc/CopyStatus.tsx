//? Import type for typecasting useState
import type { booleanOrUndefined } from "../../types/misc/booleanOrUndefined.ts";

//? Exports dinamically rendered status indicator for copy status
export function CopyStatus({ copyStatus }: { copyStatus: booleanOrUndefined }) {
  return (
    <p class="inline-block self-start mt-2 md:mb-6">
      {copyStatus === undefined
        ? "Copy to clipboard ⤴️"
        : copyStatus === true
        ? "Copied to clipboard! ✅"
        : `Failed to copy to clipboard ❌ This usually happens because the content you provided has nothing to actually highlight.`}
    </p>
  );
}
