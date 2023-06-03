//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
import StyledSingleCheckbox from "./StyledSingleCheckbox.tsx";

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
    <section style="display: flex; flex-direction: column; align-items: end; width: 100%;">
      <StyledSingleCheckbox
        label="What did this project teach me?"
        onChangeFunction={() => {
          toggleDisplayDiscovery((curr) => !curr);
        }}
        shouldBeChecked={displayDiscovery}
      />
      {displayDiscovery === true &&
        innerText.map((text) => <p class="space">{text}</p>)}
    </section>
  );
}
