//? Import JSX so we can inject children elements
import { JSX } from "preact";

//? Dynamically display a list of lowercase greek numerals
export function GreekList({ items }: { items: Array<string | JSX.Element> }) {
  return (
    //? Ordered list using greek alphabet characters for counting
    <ol
      start={1}
      class="self-start list-[lower-greek]"
    >
      {items.map((item) => (
        <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
          {item}
        </li>
      ))}
    </ol>
  );
}
