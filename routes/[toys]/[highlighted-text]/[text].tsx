//? Create blog content inside Base component
import { Base } from "../../../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../../components/blog/BlogNavigationButtons.tsx";
//? Import the component responsible for adding the content that will eventually be highlighted
import HighlightedCode from "../../../components/toys/HighlightedCode.tsx";
//? Imports middleware responsible for processing GET/POST requests to this route
import { highlightTextMiddleware } from "../../../middleware/toys/__highlighted-text.tsx";
//? Import interface that defines what are the required properties for this content
import type { HighlightText } from "../../../types/syntax-highlight/HighlightText.ts";

//? Manages saving text input remotely and redirects
export const handler = highlightTextMiddleware;

export default function Home(
  { data: { text, expiresAt, createdAt } }: {
    data: HighlightText;
  },
) {
  return (
    <>
      <CustomHead
        title="Highlighted code"
        description="Turn a boring code block into syntax highlighted text to use in your blog"
        link="https://www.theyurig.com/toys/syntax-highlight"
      >
        {/* Syntax highlighting CSS */}
        <link rel="stylesheet" href="/syntax-highlighting.css" />
        {/* Syntax highlighting function */}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html:
              `import { highlightAll } from 'https://unpkg.com/@speed-highlight/core/dist/index.js';
              highlightAll()`,
          }}
        />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{
            title: "Create another highlighted text",
            link: "/toys/syntax-highlight",
          }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title */}
          <h1 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-2xl lg:text-4xl text-center">
            Highlighted Code
          </h1>
          <HighlightedCode textToHighlight={text} />
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
