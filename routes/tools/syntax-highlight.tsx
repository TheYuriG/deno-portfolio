//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { BlogNavigationButtons } from "../../components/blog/BlogNavigationButtons.tsx";
//? Import Syntax Highlight form to handle sending data to the server
import SyntaxHighlighForm from "../../components/tools/SyntaxHighlighForm.tsx";
//? Imports middleware responsible for processing GET/POST requests to this route
import { syntaxHighlightMiddleware } from "../../middleware/tools/__syntax-highlight.tsx";
import { ErrorAlert } from "../../components/UI/ErrorAlert.tsx";

//? Manages saving text input remotely and redirects
export const handler = syntaxHighlightMiddleware;

export default function Home(
  { data: { errors } }: { data: { errors: string } },
) {
  return (
    <>
      <CustomHead
        title="Syntax highlight"
        description="Turn a boring code block into syntax highlighted text to use in your blog"
        link="https://www.theyurig.com/tools/syntax-highlight"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to tools", link: "/tools" }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Error message, if necessary */}
          {errors.length > 0 && <ErrorAlert errorText={errors} />}
          {/* Title header */}
          <StyledHeader title="Syntax Highlighting as HTML+CSS" />
          {/* Introduction */}
          <p class="mb-4">
            Insert your text below and click "Highlight!". After submitting, a
            page will be created that hosts the highlighted HTML code for the
            next 60 minutes, before getting deleted from the database.
          </p>
          {/* Syntax highlight input + result */}
          <SyntaxHighlighForm />
          <p class="mt-4">
            You can share or revisit the highlighted snippet as many times as
            you want within that time. There is no limit to how many snippets
            you can create, just make sure you are not submitting any sensitive
            data (all links are public!).
          </p>
        </section>
      </Base>
    </>
  );
}
