//? Define the required and optional properties of a decorated Link
import { DecoratedLinkProperties } from "../../types/component-properties/DecoratedLinkProperties.ts";

//? Exports an anchor tag with default styling for custom-underline-dotted, while
//? using the other attributes provided
export function DottedLink(
  { link, title, customRel, content }: DecoratedLinkProperties,
) {
  return (
    <a
      class="inline-flex items-center custom-underline-dotted hover:custom-tx-ac"
      href={link}
      title={title}
      target="_self"
      rel={customRel}
    >
      {content}
    </a>
  );
}
