//? Import Preact JSX so we can define the props.children type
import { JSX, toChildArray } from "preact";

//? Define button properties
interface AccentButtonProperties {
  children: string | JSX.Element | JSX.Element[];
  style?: string;
  classes?: string;
  onClickFunction: () => void;
}

//? Simple button that uses accent color for fill and neutral neutral for text color and border
//! Requires importing accent-button.css!
//* Style buttons on-demand by providing a optional style prop!
export default function AccentButton({
  children,
  style,
  classes = "",
  onClickFunction,
}: AccentButtonProperties) {
  return (
    <button
      //? Apply default styling
      class={"flex py-1 px-2 items-center custom-bg-ac custom-bo-nc rounded-2xl custom-button-ac " +
        classes}
      //? Apply additional styling, if provided
      style={style}
      //? When clicked, run provided function
      onClick={(event) => {
        event.preventDefault();
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
