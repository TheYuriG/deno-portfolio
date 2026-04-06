import { HttpError } from "fresh";
import { PageProps } from "fresh";
import { CustomHead } from "../components/base/CustomHead.tsx";
import { Base } from "../components/base/Base.tsx";
import { StyledHeader } from "../components/UI/StyledHeader.tsx";
import { NavigationButtons } from "../components/misc/NavigationButtons.tsx";

export default function ErrorPage(props: PageProps) {
  const error = props.error; // Contains the thrown Error or HTTPError
  if (error instanceof HttpError) {
    const status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === 404) {
      return (
        <>
          <CustomHead
            title="Error! Not found!"
            description="404 Page not found"
            link="https://www.theyurig.com/404"
          >
          </CustomHead>
          <NavigationButtons />
          <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
            <StyledHeader title="Page not found!" />
            <p class="my-2 text-justify">
              Hi there! Seems like you have reached a page that doesn't exist
              (...yet?). 🤔
            </p>
          </section>
        </>
      );
    }

    return (
      <>
        <CustomHead
          title="Internal Server Error"
          description="505 Something went wrong"
          link="https://www.theyurig.com/"
        >
        </CustomHead>
        <NavigationButtons />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="An internal server error occurred!" />
          <p class="my-2 text-justify">
            Something bad happened internally! Sorry about that. 🤒
          </p>
        </section>
      </>
    );
  }
}
