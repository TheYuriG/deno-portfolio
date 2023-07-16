//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Infinitely expandable insanity section
import InsanitySection from "../../islands/toys/InsanitySection.tsx";
//? Add a button to scroll to the top on the bottom right corner of the page
import ScrollToTop from "../../islands/misc/ScrollToTop.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Insanity 🤪"
        description="Testing CLS and various layout changes."
        link="https://www.theyurig.com/toys/insanity"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{ title: "Return to all toys", link: "/toys" }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title="Did I ever tell you what the definition of insanity is?" />
          {/* Infinitely expandable Insanity text section */}
          <InsanitySection />
          {/* Small notice about this page */}
          <footer class="mt-auto w-full text-right text-sm">
            This page exists to text the responsiveness of the layout whenever
            changes happens. Sorry if you were expecting some more exciting.
          </footer>

          {/* Scroll up button */}
          <ScrollToTop />
        </article>
      </Base>
    </>
  );
}
