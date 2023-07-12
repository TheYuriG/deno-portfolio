//? Information Icon to be able to hover for the tooltip
import { InformationIcon } from "../../assets/InformationIcon.tsx";

//? Define optional and required properties for inputs
interface TooltipProperties {
  //? Text to render on hover
  tooltipText: string;
  //? Dimensions for the icon
  iconSize?: string;
  //? Change tooltip position on demand
  tooltipPosition?: string;
}

//? Exports a styled Tooltip
export function Tooltip(
  {
    tooltipText,
    iconSize = "1.8em",
    tooltipPosition = "right-0 top-[2em]",
  }: TooltipProperties,
) {
  return (
    <div class="ml-2 relative inline-block group">
      {/* Information icon */}
      <InformationIcon iconHeight={iconSize} iconWidth={iconSize} />
      <span
        class={`absolute invisible opacity-0 w-max max-w-[80dvw] lg:max-w-[40em] custom-bg-ac custom-tx-nc text-center font-bold p-2 rounded-md ${tooltipPosition} z-10 group-hover:(visible opacity-100)`}
        style="transition: opacity 0.4s ease-in-out, color 0.9s ease-in-out;"
      >
        {tooltipText}
      </span>
    </div>
  );
}
