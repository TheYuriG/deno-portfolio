//? Visualizer type to define props
import type { visualizer } from "../../../types/component-properties/tools/expression-visualizer/Visualizer.ts";

//? State related properties
interface StateManagement {
  playState: boolean;
  updateFunction: () => void;
}

//? Renders a single Expression to visualize
export function ExpressionVisualizationListItem(
  {
    leadingText,
    expressionText,
    evaluatedText,
    trailingText,
    playState,
    updateFunction,
  }:
    & visualizer
    & StateManagement,
) {
  //? Define how wide the evaluatedText span should be
  const evaluatedLength = evaluatedText.length.toString() + "ch";

  //? Render the div with relevant data
  return (
    <button
      class="w-full text-center cursor-help"
      onClick={updateFunction} //? Toggles the state for this item between true/false
    >
      {/* Text prior to Expression */}
      <span>{leadingText}</span>
      {/* Expression */}
      <span
        class={`custom-tr-wfo inline-flex whitespace-nowrap w-[${
          //! Before being clicked = expanded. After click = collapsed
          playState === true
            ? "0"
            : expressionText.length.toString()}ch] overflow-hidden`}
        style="color: red;"
      >
        {expressionText}
      </span>
      {/* Expression evaluation */}
      <span
        class={`custom-tr-wfi inline-flex whitespace-nowrap w-[${
          //! Before being clicked = collapsed. After click = expanded
          playState === true ? evaluatedLength : "0ch"}] overflow-hidden`}
        style={"color: green;"}
      >
        {evaluatedText}
      </span>
      {/* Text after the expression */}
      <span>{trailingText}</span>
    </button>
  );
}
