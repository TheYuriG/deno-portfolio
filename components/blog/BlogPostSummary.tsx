//? Require the interface to ensure we receive the proper data
import BlogPostSummaryProperties from "../../types/BlogPostSummaryProperties.ts";

//? Exports a single Blog Post Summary
export function BlogPostSummary(summary: BlogPostSummaryProperties) {
  return (
    // What a Post Summary looks like
    <article class="my-4 w-full">
      {/* Post link */}
      <a href={"/blog" + summary.link}>
        {/* Centered heading */}
        <h2 class="custom-underline-thick f-as my-4 text-center">
          {summary.title}
        </h2>
      </a>
      {/* Post creation date */}
      <p class="text-sm mb-2 text-center">
        {new Date(summary.date).toLocaleString()}
      </p>
      {/* Post summary */}
      <p class="text-justify">{summary.shortSummary}</p>
    </article>
  );
}
