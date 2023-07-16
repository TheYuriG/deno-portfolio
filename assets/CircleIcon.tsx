//? Import IconPropertiesWithStroke for props typecasting
import { IconPropertiesWithStroke } from "../types/asset-properties/IconProperties.ts";

//? Renders a Circle Icon with fill, stroke and stroke-width
export function CircleIcon(
  { iconHeight, iconWidth, iconFillColor, iconStrokeColor, iconStrokeWidth }:
    IconPropertiesWithStroke,
) {
  return (
    <svg
      class="custom-tr-fi"
      xmlns="http://www.w3.org/2000/svg"
      height={iconHeight}
      width={iconWidth}
      viewBox="0 0 512 512"
      fill={iconFillColor}
      stroke={iconStrokeColor}
      stroke-width={iconStrokeWidth}
    >
      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </svg>
  );
}
