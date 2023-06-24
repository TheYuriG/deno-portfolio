//? Import button to submit the POST request to the same URL
import { StyledButton } from "../UI/StyledButton.tsx";
import { StyledTextArea } from "../UI/StyledTextArea.tsx";

//? Export mini form to save highlighted texts
export default function SyntaxHighlighForm() {
  return (
    // Whole form
    <form
      class="flex flex-col w-full"
      method="post"
      action="/tools/syntax-highlight"
    >
      {/* Input label */}
      <label
        htmlFor="text-to-highlight"
        class="flex flex-col"
      >
        <span class="text-center text-xl f-as mb-2">
          Input
        </span>
      </label>
      {/* Vertically expansible textarea for user input */}
      <StyledTextArea minHeight="20em" name="text-to-highlight" id="syntax" />
      {/* Submit button */}
      <StyledButton
        classes="self-center mt-4"
        text="Highlight!"
        shouldSubmit={true}
      />
    </form>
  );
}
