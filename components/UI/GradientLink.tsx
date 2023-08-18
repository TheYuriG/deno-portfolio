//? Import ExternalLinkIcon to add the GradientLink
import { ExternalLinkIcon } from "../../assets/ExternalLinkIcon.tsx";

//? Define the required and optional properties of a Decorated Link
import type { DecoratedLinkProperties } from "../../types/component-properties/DecoratedLinkProperties.ts";

//? Exports an anchor tag with default styling for custom-underline-gradient, while
//? using the other attributes provided
export function GradientLink(
  { link, title, customRel, content }: DecoratedLinkProperties,
) {
  return (
    <a
      class="inline-flex items-center custom-underline-gradient hover:custom-tx-ac"
      href={link}
      title={title}
      target="_blank"
      rel={customRel}
    >
      {content}
      <ExternalLinkIcon iconHeight="1em" iconWidth="1em" classes="ml-1" />
    </a>
  );
}
