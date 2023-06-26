//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../components/misc/NavigationButtons.tsx";
//? Default styled header
import { StyledHeader } from "../components/UI/StyledHeader.tsx";
//? Enable fetching the error URL
import { UnknownPageProps } from "$fresh/server.ts";

//? Renders page whenever the attempted route doesn't exist
export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <CustomHead
        title="Error! Not found!"
        description="404 Page not found"
        link="https://www.theyurig.com/404"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="Page not found!" />
          <p class="my-2 text-justify">
            Hi there! Seems like you have reached a page that doesn't exist
            (...yet?). 🤔
          </p>
        </section>
      </Base>
    </>
  );
}
