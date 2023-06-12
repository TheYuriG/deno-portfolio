//? Import IconProperties for props typecasting
import { IconPropertiesWithStroke } from "../types/IconProperties.ts";

//? Renders a spinning animation with fill
export default function LoadingAnimation(
  { iconHeight, iconWidth, iconStrokeColor }: Pick<
    IconPropertiesWithStroke,
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
        class="animate-loading"
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
