//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { BlogNavigationButtons } from "../../components/blog/BlogNavigationButtons.tsx";
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
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to all toys", link: "/toys" }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <h1 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-2xl lg:text-4xl text-center">
            Did I ever tell you what the definition of insanity is?
          </h1>
          {/* Infinitely expandable Insanity text section */}
          <InsanitySection />
          {/* Small notice about this page */}
          <footer class="mt-auto w-full text-right text-sm">
            This page exists to text the responsiveness of the layout whenever
            changes happens. Sorry if you were expecting some more exciting.
          </footer>
        </article>
      </Base>
    </>
  );
}
