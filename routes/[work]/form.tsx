//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../components/blog/BlogNavigationButtons.tsx";
//? Stylized and functional Form Island
import FormWithValidation from "../../islands/FormWithValidation.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Form"
        description="A form to pretend to request Stimulus Check built with Preact."
        link="https://www.theyurig.com/work/form"
      >
        <link rel="stylesheet" href="/form.css" />
        <link rel="stylesheet" href="/styled-button.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to the works page", link: "/work" }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <h1 class="f-as my-4 text-2xl lg:text-4xl text-center">
            Stimulus Checks Eligibility Form
          </h1>
          <FormWithValidation />
        </article>
      </Base>
    </>
  );
}
