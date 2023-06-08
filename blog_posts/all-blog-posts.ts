//? Import the types so that it doesn't need to be interfaced twice
import BlogPostSummaryProperties from "../types/BlogPostSummaryProperties.ts";

//? Mock array of posts
// todo Implement pagination
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

export default createdPosts;
