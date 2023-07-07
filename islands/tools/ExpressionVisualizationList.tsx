//todo State management
import { useState } from "preact/hooks";
//? Component
import { ExpressionVisualizationListItem } from "../../components/tools/ExpressionVisualizationListItem.tsx";
//? Type
import type { visualizer } from "../../types/component-properties/tools/expression-visualizer/Visualizer.ts";

//? Renders an Expression list
export default function ExpressionVisualizationList(
  { visualizationList }: { visualizationList: visualizer[] },
) {
  return (
    <div class="flex flex-col w-full items-center">
      {/* Generate steps dynamically */}
      {visualizationList.map((visualizationItem) => (
        <ExpressionVisualizationListItem {...visualizationItem} />
      ))}
    </div>
  );
}
