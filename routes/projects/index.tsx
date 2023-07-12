//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/UI/GradientLink.tsx";
import { DottedLink } from "../../components/UI/DottedLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Component to create a column grid of projects created
import { ProjectsGrid } from "../../components/projects/ProjectsGrid.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Projects"
        description="Overview of all projects I've created doing various courses."
        link="https://www.theyurig.com/projects"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="Projects built" />
          {/* Grid of projects created */}
          <ProjectsGrid />
          {/* Summary - React course */}
          <p class="my-2 text-justify">
            These are the projects I built inspired by the{" "}
            <GradientLink
              content="React - The Complete Guide"
              link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              title="React couse, by Academind"
              customRel="noopener noreferrer"
            />{" "}
            course from Academind. It uses the features taught, but not a single
            resource file. Everything was adapted to feel like it belong to my
            website.
          </p>
          {/* Was already experienced with React */}
          <p class="my-2 text-justify">
            While I already had decent experience with React from previous
            projects and usage of Preact (to build this website!), I was forever
            going to have this feeling of{" "}
            <em>
              <GradientLink
                content="not knowing what I don't know"
                link="https://hbr.org/2012/05/discover-what-you-need-to-know"
                customRel="noopener noreferrer"
                title="It's not about impostor syndrome, but about being aware that you will always not know more about things than you actually know about them"
              />
            </em>{" "}
            if I don't make myself go through a full fledged course.
          </p>
          {/* I wanted problems */}
          <p class="my-2 text-justify">
            That way, not only I practice what I need to, but I'm also forcing
            myself to go the extra mile and solve problems that this
            unintended/unsuported setup will cause me to have. Plus, I can get
            to make them look like the way I like them, rather than using the
            default course styling.
          </p>
          {/* Setting expectations */}
          <p class="my-2 text-justify">
            Most projects includes a toggleable summary of what I learned when
            completing the project. While it was nice to learn about why{" "}
            <span class="shl-inline">Fragments</span> exist, what is{" "}
            <span class="shl-inline">React.createElement()</span>,{" "}
            <span class="shl-inline">Portals</span> and{" "}
            <span class="shl-inline">Context</span>, it was mostly nice-to-know
            course for me. Check{" "}
            <DottedLink
              content="tools"
              link="/tools"
              title="The things I've built alone"
            />{" "}
            if you are curious to know about the things I've built zero
            guidance.
          </p>
        </article>
      </Base>
    </>
  );
}
