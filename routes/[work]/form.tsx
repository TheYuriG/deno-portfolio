//? Create blog content inside Base component
import { Base } from "../../components/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../islands/BlogNavigationButtons.tsx";
//? Stylized and functional Form Island
import FormWithValidation from "../../islands/FormWithValidation.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Form"
        description="A form built with Preact. Alerts the window on submit."
        link="https://www.theyurig.com/work/form"
      >
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/blog.css" />
        <link rel="stylesheet" href="/form.css" />
        <link rel="stylesheet" href="/gradient-underline.css" />
        <link rel="stylesheet" href="/styled-button.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="center">
          <h1 class="blog-title">Form (with validation)</h1>
          <FormWithValidation />
        </article>
      </Base>
    </>
  );
}