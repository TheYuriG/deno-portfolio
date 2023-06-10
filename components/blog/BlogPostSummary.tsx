//? Require the interface to ensure we receive the proper data
import BlogPostSummaryProperties from "../../types/BlogPostSummaryProperties.ts";

//? Exports a single Blog Post Summary
export function BlogPostSummary(summary: BlogPostSummaryProperties) {
  return (
    // What a Post Summary looks like
    <article style="margin: 1em 0; width: 100%;">
      {/* Post link */}
      <a href={"/blog" + summary.link}>
        {/* Centered heading */}
        <h2 class="navigation-link f-as my-4 text-4xl text-center">
          {summary.title}
        </h2>
      </a>
      {/* Post creation date */}
      <p class="post-date">{new Date(summary.date).toLocaleString()}</p>
      {/* Post summary */}
      <p class="justified">{summary.shortSummary}</p>
    </article>
  );
}
