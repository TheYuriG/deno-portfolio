//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create retirement content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the tools page
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Retirement calculator form and table
import RetirementCalculator from "../../islands/RetirementCalculator.tsx";

//? Renders the retirement calculator page, with a form to calculate your retirement plan
export default function Home() {
  return (
    <>
      {
        /* Base Head with all common required imports, plus added
        meta-tags and imports required for this specific route */
      }
      <CustomHead
        title="Retirement Calculator"
        description="Calculate how much you need to save monthly, and for how many months, to build permanent retirement funds, regardless of how many years you live after stop working."
        link="https://www.theyurig.com/projects/retirement-calculator"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{ title: "Return to tools", link: "/tools" }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Retirement calculator */}
          <StyledHeader title="Retirement Calculator" />
          {/* Form and results */}
          <RetirementCalculator />
        </section>
      </Base>
    </>
  );
}
