//? Create blog content inside Base component
import { Base } from "../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../components/blog/BlogNavigationButtons.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../components/base/GradientLink.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Previous work"
        description="Work that I've done for people in the past."
        link="https://www.theyurig.com/work"
      >
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/blog.css" />
        <link rel="stylesheet" href="/gradient-underline.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="center">
          <h1 class="blog-title">Past and Current work</h1>
          <p class="space">
            There is nothing to display here yet. I'm still deciding if I'll
            rewrite my projects in Deno or if I'll just host them somewhere and
            link here. Maybe come back at a later point? 🤔
          </p>
          <p class="space">Meanwhile, here are some smaller snippets:</p>
          <ol
            start={1}
            style="align-self: start; list-style-type: lower-greek;"
          >
            <li>
              <GradientLink
                content="Form (with validation)"
                title="A simple form that uses Alert() once you submit it."
                link="/work/form"
                newTab={false}
              />
            </li>
          </ol>
        </article>
      </Base>
    </>
  );
}
