//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { BlogNavigationButtons } from "../../components/blog/BlogNavigationButtons.tsx";
//? Import the template for Blog Post summaries
import { BlogPostSummary } from "../../components/blog/BlogPostSummary.tsx";
//? Import the types so that it doesn't need to be interfaced twice
import BlogPostSummaryProperties from "../../types/BlogPostSummaryProperties.ts";

//? All posts so far
const createdPosts: Array<BlogPostSummaryProperties> = [{
  link: "/how-create-theme-switcher-deno-fresh",
  title: "How to Create a Theme Switcher with Fresh",
  shortSummary:
    "A guide on how to create your own Theme Switcher using Deno and Fresh",
  date: 1684849328672,
}, {
  link: "/stopping-theme-flickering-deno-fresh",
  title: "How to stop Theme flickering in Fresh",
  shortSummary:
    "A guide on how to make your Theme Switcher stop flickering when the page loads",
  date: 1684951466007,
}];

export default function Home() {
  return (
    <>
      <CustomHead
        title="Blog"
        description="Blog posts and articles about my experience with certain tech stacks or situations I had to untangle myself out of."
        link="https://www.theyurig.com/blog"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <BlogNavigationButtons />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {...createdPosts.map((post) => (
            <BlogPostSummary {...post}></BlogPostSummary>
          ))}
        </section>
      </Base>
    </>
  );
}
