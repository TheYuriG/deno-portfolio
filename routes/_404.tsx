//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../components/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../components/BlogNavigationButtons.tsx";
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
        <link rel="stylesheet" href="/home.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/blog.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <BlogNavigationButtons />
        <article class="center">
          <h2 class="navigation-link blog-title">Page not found!</h2>
          <p>
            Hi there! Seems like you have reached a page that doesn't exist
            (...yet?). 🤔
          </p>
          <p>↖️ Maybe go back to the previous page?</p>
          <details>Dead URL path: {url.href}</details>
        </article>
      </Base>
    </>
  );
}
