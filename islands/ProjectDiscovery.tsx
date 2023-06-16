//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
import { StyledSingleCheckbox } from "../components/UI/StyledSingleCheckbox.tsx";

//? Define optional properties for the buttons
interface ProjectDiscoveryProperties {
  innerText: string[];
}

//? Exports Navigation Buttons to go to the previous page and next Article
export default function ProjectDiscovery(
  { innerText }: ProjectDiscoveryProperties,
) {
  //? Manages if the discovery text should be displayed or not
  const [displayDiscovery, toggleDisplayDiscovery] = useState(false);

  return (
    <section class="flex flex-col items-end w-full my-2">
      {/* Display a checkbox to enable/disable displaying the discovery text */}
      <StyledSingleCheckbox
        label="What did I learn?"
        onChangeFunction={() => {
          toggleDisplayDiscovery((curr) => !curr);
        }}
        shouldBeChecked={displayDiscovery}
      />
      {/* Displays the discovery text, if that was enabled with the checkbox */}
      {displayDiscovery === true &&
        innerText.map((text) => <p class="my-2 text-justify">{text}</p>)}
    </section>
  );
}
