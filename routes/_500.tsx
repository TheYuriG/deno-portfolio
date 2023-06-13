//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../components/blog/BlogNavigationButtons.tsx";
//? Enable fetching the error
import { ErrorPageProps } from "$fresh/server.ts";

//? Renders page whenever the attempted route doesn't exist
export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <>
      <CustomHead
        title="Internal Server Error"
        description="505 Something went wrong"
        link="https://www.theyurig.com/"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <h1 class="f-as my-4 text-2xl lg:text-4xl text-center">
            An internal server error occurred!
          </h1>
          <p class="my-2 text-justify">
            Something bad happened internally! Sorry about that. 🤒
          </p>
        </section>
      </Base>
    </>
  );
}
