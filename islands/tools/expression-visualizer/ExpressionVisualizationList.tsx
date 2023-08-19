//? JSX to define array properties
import type { JSX } from "preact";
//? State management
import { useState } from "preact/hooks";
//? Component
import { ExpressionVisualizationListItem } from "../../../components/tools/expression-visualizer/ExpressionVisualizationListItem.tsx";
//? Type
import type { visualizer } from "../../../types/component-properties/tools/expression-visualizer/Visualizer.ts";
import { XMarkIcon } from "../../../assets/XMarkIcon.tsx";

//? Renders an Expression list
export default function ExpressionVisualizationList(
  { visualizationList, deleteItem }: {
    visualizationList: visualizer[];
    deleteItem?: (item: string) => void;
  },
) {
  //? Instantiate array that will hold all the animation states
  const playStateArray: boolean[] = [];
  visualizationList.forEach(() => {
    playStateArray.push(false);
  });
  const [shouldAnimationPlay, toggleAnimationPlayStatus] = useState(
    playStateArray,
  );

  //? Instantiate current loop index
  let listIndex = 0;

  //? Create an array of Visualization JSX elements that gets rendered
  const visualizationListElements: JSX.Element[] = visualizationList.map(
    (listItem) => {
      //? Instantiate current index to search the arrays
      //! If not instantiated, all indexes will have the value after the last loop
      const currentIndex = listIndex;
      //? Pull the animation status state for this expression
      const animationStatus = shouldAnimationPlay[currentIndex];

      //? Create update function for this expression. It will only update the
      //? animation state of itself
      const updateFunction = () => {
        toggleAnimationPlayStatus((currentStatuses) => {
          const updatedStatuses = [...currentStatuses];
          updatedStatuses[currentIndex] = !updatedStatuses[currentIndex];
          return updatedStatuses;
        });
      };

      //? Increase index to start over for the next component
      listIndex++;

      //? Create an Expression item for this object
      return (
        <div class="flex w-full">
          <ExpressionVisualizationListItem
            {...listItem}
            playState={animationStatus}
            updateFunction={updateFunction}
          />
          {/* If a delete item function is provided, add a button to delete this item */}
          {deleteItem &&
            (
              <button
                onClick={() => {
                  deleteItem(listItem.id);
                }}
              >
                <XMarkIcon
                  iconHeight="1.5em"
                  iconWidth="1.5em"
                  iconFillColor="red"
                />
              </button>
            )}
        </div>
      );
    },
  );

  //? Render a list with all Expressions to be displayed
  return (
    <div class="flex flex-col w-full items-center">
      {/* Generate steps dynamically */}
      {...visualizationListElements}
    </div>
  );
}
