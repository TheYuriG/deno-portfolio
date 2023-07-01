//? Text area to provide code to be highlighted
import { StyledTextArea } from "../UI/StyledTextArea.tsx";
//? Import button to submit the POST request to the same URL
import { StyledButton } from "../UI/StyledButton.tsx";

//? Export mini form to save highlighted texts
export default function SyntaxHighlighForm() {
  return (
    // Whole form
    <form
      class="flex flex-col w-full"
      method="post"
      action="/tools/syntax-highlight"
    >
      {/* Vertically expansible textarea for user input */}
      <StyledTextArea
        minHeight="20em"
        name="text-to-highlight"
        labelLink="syntax"
        label="Code to highlight"
        labelClasses="mb-2"
      />
      {/* Submit button */}
      <StyledButton
        classes="self-center mt-4"
        text="Highlight!"
        shouldSubmit={true}
      />
    </form>
  );
}
