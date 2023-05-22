//? Lateral text with theme switcher
import { Base } from "../components/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/CustomHead.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Blog"
        description="Blog posts and articles about my experience with certain tech stacks or situations I had to untangle myself out of."
        link="https://www.theyurig.com/blog"
      >
        <link rel="stylesheet" href="home.css" />
        <link rel="stylesheet" href="/starry-night.css" />
        <link rel="stylesheet" href="/gradient-underline.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
      </Base>
    </>
  );
}
