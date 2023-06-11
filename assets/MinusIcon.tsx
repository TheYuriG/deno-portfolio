//? Import IconProperties for props typecasting
import { IconProperties } from "../types/IconProperties.ts";

//? Renders a Minus Icon with fill
export default function MinusIcon(
  { iconHeight, iconWidth, iconFillColor }: IconProperties,
) {
  return (
    <svg
      class="tr-fi"
      xmlns="http://www.w3.org/2000/svg"
      height={iconHeight ?? "1em"}
      width={iconWidth ?? "1em"}
      viewBox="0 0 500 512"
      fill={iconFillColor ?? "var(--neutral-color)"}
    >
      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}
