//? Import IconProperties for props typecasting
import type { IconProperties } from "../types/asset-properties/IconProperties.ts";

//? Renders a chevron Icon with fill, can be rotated using transform
export function ChevronIcon(
  { iconHeight, iconWidth, iconFillColor, rotation }: IconProperties & {
    rotation?: string;
  },
) {
  return (
    <svg
      class="duration-[800ms] ease-in-out group-hover:fill-[var(--accent-color)]"
      transform={`rotate(${rotation ?? "0"})`}
      height={iconHeight}
      width={iconWidth}
      fill={iconFillColor ?? "var(--neutral-color)"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
    </svg>
  );
}
