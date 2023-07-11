//? Require the interface to ensure we receive the proper data
import type { BlogPostSummaryProperties } from "../../types/blog/BlogPostSummaryProperties.ts";
//? Default styled header
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";

//? Exports a single Blog Post Summary
export function BlogPostSummary(summary: BlogPostSummaryProperties) {
  return (
    // What a Post Summary looks like
    <article class="my-4 w-full">
      {/* Post link */}
      <a href={summary.link}>
        {/* Centered heading */}
        <StyledSubHeader title={summary.title} />
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
