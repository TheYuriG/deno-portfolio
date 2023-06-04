//? Create blog content inside Base component
import { Base } from "../../components/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../components/BlogNavigationButtons.tsx";
//? Infinitely expandable insanity section
import InsanitySection from "../../islands/InsanitySection.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Insanity 🤪"
        description="Testing CLS and various layout changes."
        link="https://www.theyurig.com/toys/insanity"
      >
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/styled-button.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to all toys", link: "/toys" }}
        />
        <article>
          {/* Static Insanity Heading */}
          <h1>Did I ever tell you what the definition of insanity is?</h1>
          {/* Infinitely expandable Insanity text section */}
          <InsanitySection />
          {/* Spacer to push the post footer text to the bottom */}
          <div class="spacer"></div>
          {/* Small notice about this page */}
          <footer class="blog-footer">
            This page exists to text the responsiveness of the layout whenever
            changes happens. Sorry if you were expecting some more exciting.
          </footer>
        </article>
      </Base>
    </>
  );
}
