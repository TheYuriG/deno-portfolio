//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create visualizer content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the tools page
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
import ExpressionVisualizerAdvanced from "../../islands/tools/ExpressionVisualizerAdvanced.tsx";

export default function Home() {
  return (
    <>
      {
        /* Base Head with all common required imports, plus added
        meta-tags and imports required for this specific route */
      }
      <CustomHead
        title="Expression Visualizer Plus"
        description="Handcraft a step-by-step visualizer of how an expression develops over time so you can show to others in slow-motion how the computer processes an expression."
        link="https://www.theyurig.com/tools/expression-visualizer-advanced"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{
            title: "Switch back to the base mode",
            link: "/tools/expression-visualizer",
          }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="Advanced Expression Visualizer" />
          {/* Advanced Expression Visualizer */}
          <ExpressionVisualizerAdvanced />
        </section>
      </Base>
    </>
  );
}
