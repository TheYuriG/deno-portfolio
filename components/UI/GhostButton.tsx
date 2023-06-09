//? Import Preact JSX so we can define the props.children type
import { JSX, toChildArray } from "preact";

//? Define button properties
interface AccentButtonProperties {
  children: string | JSX.Element | JSX.Element[];
  onClickFunction: () => void;
}

//? Simple button that uses accent color for fill and neutral neutral for text color and border
export function GhostButton({
  children,
  onClickFunction,
}: AccentButtonProperties) {
  return (
    <button
      type="button"
      //? Apply default styling
      class="flex py-1 px-2 items-center bg-transparent border-transparent border-2 custom-tr-bo hover:custom-bo-nc rounded-2xl"
      //? Submit form or handle the button in another way
      onClick={(event) => {
        if (onClickFunction) {
          onClickFunction();
        }
      }}
    >
      {/* Renders children as pure text if needed, else create array of elements */}
      {typeof children === "string" ? children : toChildArray(children)}
    </button>
  );
}
