//? Define the required and optional properties of a Gradient Link
interface GradientLinkProperties {
  link: string;
  title?: string;
  newTab?: boolean;
  customRel?: string;
  content: string;
}

//? Exports an anchor tag with default styling for custom-underline-gradient, while
//? using the other attributes provided
export function GradientLink(
  { link, title, newTab = true, customRel, content }: GradientLinkProperties,
) {
  return (
    <a
      class="custom-underline-gradient hover:custom-tx-ac"
      href={link}
      title={title}
      target={newTab ? "_blank" : "_self"}
      rel={customRel}
    >
      {content}
    </a>
  );
}
