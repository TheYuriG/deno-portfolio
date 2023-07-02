//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Import single checkbox to toggle content on and off
import { StyledSingleCheckbox } from "../../components/UI/StyledSingleCheckbox.tsx";

//? Define optional properties for the buttons
interface CollapsibleProperties {
  innerText: string[];
  checkboxText: string;
}

//? Exports Navigation Buttons to go to the previous page and next Article
export default function Collapsible(
  { innerText, checkboxText }: CollapsibleProperties,
) {
  //? Manages if the discovery text should be displayed or not
  const [displayDiscovery, toggleDisplayDiscovery] = useState(false);

  return (
    <section class="flex flex-col items-end w-full my-2">
      {/* Display a checkbox to enable/disable displaying the discovery text */}
      <StyledSingleCheckbox
        label={checkboxText}
        labelName="toggle-content"
        onChangeFunction={() => {
          toggleDisplayDiscovery((curr) => !curr);
        }}
        shouldBeChecked={displayDiscovery}
      />
      {/* Displays the discovery text, if that was enabled with the checkbox */}
      <div
        class={"styled-scrollbar custom-tr-h " +
          (displayDiscovery === true
            ? "h-60 pr-4 overflow-auto"
            : "h-0 pr-7 overflow-hidden")}
      >
        {innerText.map((text) => <p class="my-2 text-justify">{text}</p>)}
      </div>
    </section>
  );
}
