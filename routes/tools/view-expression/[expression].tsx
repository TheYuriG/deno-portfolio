//? Head component with all Meta tags pre-set
import { CustomHead } from "../../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../../../components/misc/NavigationButtons.tsx";
//? Component to render expressions
import ExpressionVisualizationList from "../../../islands/tools/expression-visualizer/ExpressionVisualizationList.tsx";
//? Middleware
import { viewExpressionMiddleware } from "../../../middleware/tools/__view-expression.ts";
//? Types
import { savedVisualization } from "../../../types/component-properties/tools/expression-visualizer/SavedVisualization.ts";

//? Manage GET/POST requests to this endpoint
export const handler = viewExpressionMiddleware;

export default function Home(
  { data: { expressions, title, description, slug } }: {
    data: savedVisualization;
  },
) {
  return (
    <>
      <CustomHead
        title={"Visualize Expression: " + title}
        description="Visualize how an expression develops over time in an interactive example."
        link={"https://www.theyurig.com/tools/view-expression/" + slug}
      >
      </CustomHead>
      <Base>
        <NavigationButtons
          back={{
            title: "Create your own expression visualizer",
            link: "/tools/expression-visualizer",
          }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Expression name */}
          <StyledHeader title={title} />
          <p class="text-justify my-4 self-start">{description}</p>

          {/* Text that will be syntax highlighted */}
          <ExpressionVisualizationList
            visualizationList={expressions}
          />
        </section>
      </Base>
    </>
  );
}
