//? Import IconProperties for props typecasting
import type { IconProperties } from "../types/asset-properties/IconProperties.ts";

//? Renders a Pull Request Icon with fill, stroke and stroke-width
export function PullRequestIcon(
  { iconHeight, iconWidth, iconFillColor }: IconProperties,
) {
  return (
    <svg
      class="custom-tr-fi group-hover:fill-[var(--accent-color)]"
      xmlns="http://www.w3.org/2000/svg"
      height={iconHeight}
      width={iconWidth}
      fill={iconFillColor ?? "var(--neutral-color)"}
      viewBox="0 0 512 512"
    >
      <path d="M305.8 2.1C314.4 5.9 320 14.5 320 24V64h16c70.7 0 128 57.3 128 128V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-35.3-28.7-64-64-64H320v40c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1zM104 80A24 24 0 1 0 56 80a24 24 0 1 0 48 0zm8 73.3V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80c0 32.8-19.7 61-48 73.3zM104 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm328 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </svg>
  );
}
