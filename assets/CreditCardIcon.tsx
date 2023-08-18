//? Import IconProperties for props typecasting
import type { IconProperties } from "../types/asset-properties/IconProperties.ts";

//? Renders a Credit Card Icon with fill
export function CreditCardIcon(
  { iconHeight, iconWidth, iconFillColor }: IconProperties,
) {
  return (
    <svg
      class="custom-tr-fi"
      xmlns="http://www.w3.org/2000/svg"
      height={iconHeight ?? "1em"}
      width={iconWidth ?? "1em"}
      viewBox="0 0 576 512"
      fill={iconFillColor ?? "var(--neutral-color)"}
    >
      <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
    </svg>
  );
}
