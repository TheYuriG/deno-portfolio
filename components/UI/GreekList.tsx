//? Import JSX so we can inject children elements
import { JSX } from "preact";

//? Dynamically display a list of lowercase greek numerals
export function GreekList({ items }: { items: Array<string | JSX.Element> }) {
  return (
    //? Ordered list using greek alphabet characters for counting
    <ol
      start={1}
      class="greek-list my-4"
    >
      {items.map((item) => (
        <li class="ml-10 lg:ml-0 custom-tr-ml-tx hover:custom-tx-ac">
          {item}
        </li>
      ))}
    </ol>
  );
}
