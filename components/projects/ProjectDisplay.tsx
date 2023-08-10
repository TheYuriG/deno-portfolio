//? Properties requires to create a ProjectDisplay
import type { ProjectDisplayProperties } from "../../types/component-properties/projects/ProjectDisplayProperties.ts";

//? Creates a project to be displayed on ProjectsGrid
export function ProjectDisplay(
  { projectLink, projectTitle, projectImageLink, projectName }:
    ProjectDisplayProperties,
) {
  return (
    <a
      class="w-full md:w-[50%]"
      href={projectLink}
      title={projectTitle}
    >
      <div class="flex flex-col items-center text-center font-bold">
        <img
          class="md:h-[20em]"
          src={projectImageLink}
          alt={projectName}
        />
        <span class="my-2">
          {projectName}
        </span>
      </div>
    </a>
  );
}
