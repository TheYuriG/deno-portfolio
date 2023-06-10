//? Create blog content inside Base component
import { Base } from "../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
import { GradientLink } from "../components/base/GradientLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../components/blog/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Projects"
        description="Overview of all projects I've created doing various courses."
        link="https://www.theyurig.com/projects"
      >
        <link rel="stylesheet" href="/gradient-underline.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <h1 class="f-as my-4 text-2xl lg:text-4xl text-center">
            List of Projects
          </h1>
          <p class="my-2 text-justify">
            Below you can find the projects I completed while going through the
            {" "}
            <GradientLink
              content=" React - The Complete Guide"
              link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              newTab={true}
              title="React couse, by Academind"
              customRel="noopener noreferrer"
            />{" "}
            course from Academind.
          </p>
          <p class="my-2 text-justify">
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
          <p class="my-2 text-justify">
            Considering that, instead of creating a new repository for every
            required project, I've just adapted everything to be used here,
            inside Deno, Fresh and Preact.
          </p>
          <p class="my-2 text-justify">
            That way, not only I practice what I need to, but I'm also forcing
            myself to go the extra mile and solve problems that this
            unintended/unsuported setup will cause me to have. Plus, I can get
            to make them look like the way I like them, rather than using the
            default course styling.
          </p>
          <p class="my-2 text-justify">
            Every project page includes a toggleable summary of what I learned
            when completing the project. Overall, I don't think it was that
            useful for me because I had already learned the large bulk of React
            features previously by building websites for my freelance clients.
            While it was nice to learn about Fragments, React.createElement(),
            Portals and Context, almost none of my clients jobs would benefit by
            any of those, so it was mostly nice-to-know course for me.
          </p>
          <ol
            start={1}
            class="self-start list-[lower-greek]"
          >
            {/* Expenses tracker */}
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              <GradientLink
                content="Expenses tracker"
                link="/projects/expenses-tracker"
                title="Expenses tracker that allow filtering by year and provides simple bar charts for each month's totals"
                newTab={false}
              />
            </li>
            {/* Food order */}
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              <GradientLink
                content="Food order"
                link="/projects/food-order"
                title="Mock of a food order app. Comes with a built-in cart system that allows the user to manage their items"
                newTab={false}
              />
            </li>
          </ol>
        </article>
      </Base>
    </>
  );
}
