//? Define the required and optional properties of a Gradient Link
interface GradientLinkProperties {
  link: string;
  title?: string;
  newTab?: boolean;
  customRel?: string;
  content: string;
}

//? Exports an anchor tag with default styling for gradient-underline, while
//? using the other attributes provided
export function GradientLink(
  { link, title, newTab = true, customRel, content }: GradientLinkProperties,
) {
  return (
    <a
      class="gradient-underline"
      href={link}
      title={title}
      target={newTab ? "_blank" : "_self"}
      rel={customRel}
    >
      {content}
    </a>
  );
}
