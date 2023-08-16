//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Import the template for Blog Post summaries
import { BlogPostSummary } from "../../components/blog/BlogPostSummary.tsx";
//? Import the types so that it doesn't need to be interfaced twice
import type { BlogPostSummaryProperties } from "../../types/blog/BlogPostSummaryProperties.ts";

//? Import posts
import { createFreshThemeSwitcher } from "../../data/blog/how-create-theme-switcher-deno-fresh.ts";
import { stopThemeFlickering } from "../../data/blog/stopping-theme-flickering-deno-fresh.ts";
import { createTextChannelPost } from "../../data/blog/how-create-text-channels-discord-v14.ts";
import { createVoiceChannelPost } from "../../data/blog/how-create-voice-channels-discord-v14.ts";
import { createCategoryPost } from "../../data/blog/how-create-categories-discord-v14.ts";
import { createRolesPost } from "../../data/blog/how-create-roles-discord-v14.ts";
import { experienceDenoFreshPost } from "../../data/blog/experience-deno-fresh.ts";
import { javascriptPythonSyntaxPost } from "../../data/blog/javascript-python-syntax.ts";
import { freshTwindV0 } from "../../data/blog/fresh-twind-v0.ts";
import { customizingTwindConfig } from "../../data/blog/customizing-fresh-twind.ts";

//? All posts so far
const createdPosts: Array<BlogPostSummaryProperties> = [
  customizingTwindConfig,
  freshTwindV0,
  javascriptPythonSyntaxPost,
  experienceDenoFreshPost,
  stopThemeFlickering,
  createFreshThemeSwitcher,
  createRolesPost,
  createCategoryPost,
  createVoiceChannelPost,
  createTextChannelPost,
];

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
        <NavigationButtons />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {...createdPosts.map((post) => (
            <BlogPostSummary {...post}></BlogPostSummary>
          ))}
        </section>
      </Base>
    </>
  );
}
