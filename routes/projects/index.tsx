//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
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
          <StyledHeader title="Projects I've built" />
          {/* Grid of projects created */}
          <ProjectsGrid />
        </article>
      </Base>
    </>
  );
}
