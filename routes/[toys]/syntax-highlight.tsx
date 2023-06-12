//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../components/blog/BlogNavigationButtons.tsx";
import SyntaxHighlighter from "../../islands/SyntaxHighlighter.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Syntax highlight"
        description="Turn a boring code block into syntax highlighted text to use in your blog"
        link="https://www.theyurig.com/toys/syntax-highlight"
      >
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html:
              `import { highlightAll } from 'https://unpkg.com/@speed-highlight/core/dist/index.js'`,
          }}
        />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to all toys", link: "/toys" }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title */}
          <h1 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-2xl lg:text-4xl text-center">
            Syntax Highlighter
          </h1>
          {/* Introduction */}
          <p class="mb-4">
            Insert your text on the left side and click the button to highlight
            the text. Click 'copy' to copy the HTML code to clipboard, which you
            can then past in your React/Solid code to have it highlighted.
          </p>
          {/* Syntax highlight input + result */}
          <SyntaxHighlighter />
          {/* Warning about CSS */}
          <p className="my-4">
            You will need to also use the proper CSS classes to display the
            highlighting, you can find an example file below. Ideally, those
            classes will be built into whatever post-processor you use (like
            PostCSS) so the unused styles can be pruned to save your visitors
            some bytes of bandwidth.
          </p>
        </section>
      </Base>
    </>
  );
}
