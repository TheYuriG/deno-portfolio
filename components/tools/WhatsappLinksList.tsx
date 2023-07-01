//? Create gradient links to all numbers provided
import { GradientLink } from "../UI/GradientLink.tsx";

//? Dynamically display a list of links to messaging one or more numbers on Whatsapp
export function WhatsappLinksList({ links }: { links: string[] }) {
  return (
    //? Ordered list using greek alphabet characters for counting
    <ol
      start={1}
      class="self-start list-[lower-greek]"
    >
      {/* Display a gradient link for every string received */}
      {links.map((link) => (
        <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
          <GradientLink
            newTab={true}
            content={link.replace(/.*\//, "").replace(/\?.*/, "")}
            link={link}
            customRel="nofollow noreferrer"
          />
        </li>
      ))}
    </ol>
  );
}
