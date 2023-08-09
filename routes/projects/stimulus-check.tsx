//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Stylized and functional Form Island
import StimulusCheckForm from "../../islands/projects/stimulus-check/StimulusCheckForm.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Stimulus Checks Eligibility Form"
        description="A form to pretend to request Stimulus Check built with Preact."
        link="https://www.theyurig.com/projects/stimulus-check"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{ title: "Return to projects", link: "/projects" }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title="Stimulus Checks Eligibility Form" />
          <StimulusCheckForm />
        </article>
      </Base>
    </>
  );
}
