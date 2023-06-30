//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../components/misc/NavigationButtons.tsx";
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
        <NavigationButtons />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="An internal server error occurred!" />
          <p class="my-2 text-justify">
            Something bad happened internally! Sorry about that. 🤒
          </p>
        </section>
      </Base>
    </>
  );
}
