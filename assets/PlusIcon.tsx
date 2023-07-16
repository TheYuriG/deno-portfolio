//? Import IconProperties for props typecasting
import { IconProperties } from "../types/asset-properties/IconProperties.ts";

//? Renders a Plus Icon with fill color
export function PlusIcon(
  { iconHeight, iconWidth, iconFillColor }: IconProperties,
) {
  return (
    <svg
      class="custom-tr-fi"
      xmlns="http://www.w3.org/2000/svg"
      height={iconHeight ?? "1em"}
      width={iconWidth ?? "1em"}
      viewBox="0 0 500 512"
      fill={iconFillColor ?? "var(--neutral-color)"}
    >
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    </svg>
  );
}
