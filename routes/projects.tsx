//? Create blog content inside Base component
import { Base } from "../components/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/CustomHead.tsx";
import { GradientLink } from "../components/GradientLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../islands/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Projects"
        description="Overview of all projects I've created doing various courses."
        link="https://www.theyurig.com/projects"
      >
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/blog.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/gradient-underline.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="center">
          <h1>List of Projects</h1>
          <p class="space">
            Below you can find some of the projects I needed to complete while
            undertaking the{" "}
            <GradientLink
              content=" React - The Complete Guide"
              link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              newTab={true}
              title="React couse, by Academind"
              customRel="noopener noreferrer"
            />{" "}
            course from Academind.
          </p>
          <p class="space">
            While I already had decent experience with React from previous
            projects and usage of Preact (to build this website!), I was forever
            going to have this feeling of{" "}
            <em>
              <GradientLink
                content="not knowing what I don't know"
                link="https://hbr.org/2012/05/discover-what-you-need-to-know"
                newTab={true}
                customRel="noopener noreferrer"
                title="It's not about impostor syndrome, but about being aware that you will always not know more about things than you actually know about them"
              />
            </em>{" "}
            if I don't make myself go through a full fledged course.
          </p>
          <p class="space">
            Considering that, instead of creating a new repository for every
            required project, I've just adapted everything to be used here,
            inside Deno, Fresh and Preact.
          </p>
          <p class="space">
            That way, not only I practice what I need to, but I'm also forcing
            myself to go the extra mile and solve problems that this
            unintended/unsuported setup will cause me to have. Plus, I can get
            to make them look like the way I like them, rather than using the
            default course styling.
          </p>
          <ol
            start={1}
            style="align-self: start; list-style-type: lower-greek;"
          >
            <li>
              <GradientLink
                content="Expenses tracker"
                link="/projects/expenses-tracker"
              />
            </li>
          </ol>
        </article>
      </Base>
    </>
  );
}
