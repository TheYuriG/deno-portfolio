//? Lateral text with theme switcher
import { Aside } from "./Aside.tsx";
//? Footer with tech stack
import { Footer } from "./Footer.tsx";
//? Import Preact JSX so we can define the props.children type
import { JSX, toChildArray } from "preact";

export function Base(props: { children: Array<JSX.Element> | JSX.Element }) {
  return (
    <body
      class="styled-scrollbar custom-bg-bc custom-tx-nc"
      style="font-family: 'Fragment Mono', monospace;"
    >
      {/* Main content: name, role, company */}
      <main
        class="absolute p-4 m-6 custom-bo-ac rounded-xl custom-tr-bo"
        style="width: calc(100dvw - 2 * 1.5rem); min-height: calc(100dvh - 2 * 1.5rem);"
      >
        {/* Theme switcher */}
        <Aside />
        {...toChildArray(props.children)}
        {/* Footer with Tech Stack on bottom right corner */}
        <Footer />
      </main>
    </body>
  );
}
