//? Type
import type { visualizer } from "../../types/component-properties/tools/expression-visualizer/Visualizer.ts";

//? Renders a single Expression to visualize
export function ExpressionVisualizationListItem(
  { leadingText, expressionText, evaluatedText, trailingText }: visualizer,
) {
  const evaluatedLength = evaluatedText.length.toString() + "ch";

  //? Render the div with relevant data
  return (
    <div class="group w-full text-center" tabIndex={0}>
      {/* Text prior to Expression */}
      <span>{leadingText}</span>
      {/* Expression */}
      <span
        class={`custom-tr-wfo inline-flex whitespace-nowrap w-[${expressionText.length.toString()}ch] group-hover:w-[0ch] group-focus:w-[0ch] overflow-hidden`}
        style="color: red;"
      >
        {expressionText}
      </span>
      {/* Expression evaluation */}
      <span
        class={`custom-tr-wfi inline-flex whitespace-nowrap w-[0ch] group-hover:w-[${evaluatedLength}] group-focus:w-[${evaluatedLength}] overflow-hidden`}
        style={"color: green;"}
      >
        {evaluatedText}
      </span>
      {/* Text after the expression */}
      <span>{trailingText}</span>
    </div>
  );
}
