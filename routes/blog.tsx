//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../components/blog/BlogNavigationButtons.tsx";
//? Import the template for Blog Post summaries
import { BlogPostSummary } from "../components/blog/BlogPostSummary.tsx";
//? All posts so far
import createdPosts from "../blog_posts/all-blog-posts.ts";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Blog"
        description="Blog posts and articles about my experience with certain tech stacks or situations I had to untangle myself out of."
        link="https://www.theyurig.com/blog"
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
        <section class="center">
          {...createdPosts.map((post) => (
            <BlogPostSummary {...post}></BlogPostSummary>
          ))}
        </section>
      </Base>
    </>
  );
}
