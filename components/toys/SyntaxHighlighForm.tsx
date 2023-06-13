//? Import button to submit the POST request to the same URL
import StyledButton from "../../islands/StyledButton.tsx";

//? Export mini form to save highlighted texts
export default function SyntaxHighlighForm() {
  return (
    // Whole form
    <form
      class="flex flex-col w-full"
      method="post"
      action="/toys/syntax-highlight"
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
      <textarea
        class="w-full min-h-[20em] p-2 custom-bg-bc custom-bo-ac rounded-2xl ph-nc styled-scrollbar custom-tr-txbgbo"
        name="text-to-highlight"
        id="syntax"
      >
      </textarea>
      {/* Submit button */}
      <StyledButton
        classes="self-center mt-4"
        text="Highlight!"
        shouldSubmit={true}
      />
    </form>
  );
}
