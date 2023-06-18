//? Create blog content inside Base component
import { Base } from "../../../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { BlogNavigationButtons } from "../../../components/blog/BlogNavigationButtons.tsx";
//? Import the component responsible for adding the content that will eventually be highlighted
import HighlightedCode from "../../../islands/HighlightedCode.tsx";
//? Shows timer remaining on hover
import DigitalTimer from "../../../islands/DigitalTimer.tsx";
//? Imports middleware responsible for processing GET/POST requests to this route
import { highlightTextMiddleware } from "../../../middleware/toys/__highlighted-text.tsx";
//? Import interface that defines what are the required properties for this content
import type { HighlightText } from "../../../types/syntax-highlight/HighlightText.ts";
//? Import component that creates a clickable textarea that copies the inner content to clipboard
import CopyTextAreaToClipboard from "../../../islands/CopyTextAreaToClipboard.tsx";
//? Import CSS classes text example
import { syntaxHighlightClassesStyles } from "../../../types/syntax-highlight/syntaxHighlightClassesStyles.ts";
//? Import Twind config example
import { syntaxHighlightTwindConfig } from "../../../types/syntax-highlight/syntaxHighlightTwindConfig.ts";

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
        <link rel="stylesheet" href="/digital-clock.css" />
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
      <Base>
        <BlogNavigationButtons
          back={{
            title: "Create another highlighted text",
            link: "/toys/syntax-highlight",
          }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title */}
          <h1 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-center">
            Highlighted Code
          </h1>
          {/* Text that will be syntax highlighted */}
          <HighlightedCode textToHighlight={text} />
          {/* Clock to text expiration */}
          <DigitalTimer
            expiresAt={expiresAt}
            expiredText="EXPIRED"
            preppendedText="Expires in "
            classes="ml-auto text-lg"
            styles="color: red;"
          />
          {/* Warning about CSS */}
          <p class="my-4">
            You will need to also use the proper CSS classes to display the
            highlighting, you can click the box below to copy all the CSS
            classes you might need. You should also feel free to tweak the
            styling as you see fit for your own use case.
          </p>
          <CopyTextAreaToClipboard
            classes="w-full"
            content={syntaxHighlightClassesStyles}
          />
          <p class="my-4">
            Ideally, those classes will be built into whatever post-processor
            you use (like PostCSS) so the unused styles can be pruned to save
            your visitors some bytes of bandwidth. If you use{" "}
            <span class="shl-inline">Twind v0</span>, you can extend the plugins
            in your <span class="shl-inline">twind.config.ts</span>{" "}
            file to have all of that managed for you automatically.
          </p>
          <CopyTextAreaToClipboard
            classes="w-full"
            content={syntaxHighlightTwindConfig}
          />
        </section>
      </Base>
    </>
  );
}
