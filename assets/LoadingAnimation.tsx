//? Import IconProperties for props typecasting
import { IconProperties } from "../types/IconProperties.ts";

//? Renders a spinning animation with fill
//! Needs to import the loading-animation.css file for @keyframes!
export default function LoadingAnimation(
  { iconHeight, iconWidth, iconStrokeColor }: Pick<
    IconProperties,
    "iconHeight" | "iconWidth" | "iconStrokeColor"
  >,
) {
  return (
    <svg
      height={iconHeight}
      width={iconWidth}
      viewBox="0 0 100 100"
    >
      <circle
        id="spinner"
        style={`fill:transparent;stroke: ${
          iconStrokeColor ?? "var(--neutral-color)"
        };stroke-width: 0.5em;stroke-linecap: round;`}
        cx="50"
        cy="50"
        r="45"
      />
    </svg>
  );
}
