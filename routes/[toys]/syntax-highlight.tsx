//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../components/blog/BlogNavigationButtons.tsx";
//? Import Syntax Highlight form to handle sending data to the server
import SyntaxHighlighForm from "../../components/toys/SyntaxHighlighForm.tsx";
//? Imports middleware responsible for processing GET/POST requests to this route
import { syntaxHighlightMiddleware } from "../../middleware/toys/__syntax-highlight.tsx";

//? Manages saving text input remotely and redirects
export const handler = syntaxHighlightMiddleware;

export default function Home(
  { data: { errors } }: { data: { errors: string } },
) {
  console.log("errors at /toys/syntax-highlight:", errors);
  return (
    <>
      <CustomHead
        title="Syntax highlight"
        description="Turn a boring code block into syntax highlighted text to use in your blog"
        link="https://www.theyurig.com/toys/syntax-highlight"
      >
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
          <SyntaxHighlighForm />
        </section>
      </Base>
    </>
  );
}
