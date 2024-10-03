//? Component that renders a single project on the grid
import { ProjectDisplay } from "./ProjectDisplay.tsx";
//? Properties requires to create a ProjectDisplay
import type { ProjectDisplayProperties } from "../../types/component-properties/projects/ProjectDisplayProperties.ts";

//? Array of projects to be rendered and displayed
const projects: ProjectDisplayProperties[] = [
  //* Expenses tracker
  {
    projectLink: "/projects/expenses-tracker",
    projectTitle:
      "Expenses tracker that allow filtering by year and provides simple bar charts for each month's totals.",
    projectImageLink: "https://iili.io/dyqwwPf.png",
    projectName: "Expenses tracker",
  },
  //* Food order
  {
    projectLink: "/projects/food-order",
    projectTitle:
      "Mock of a food order app. Comes with a built-in cart system that allows the user to manage their items.",
    projectImageLink: "https://iili.io/dyqwecl.png",
    projectName: "Food order",
  },
  //* Stimulus Check Form
  {
    projectLink: "/projects/stimulus-check",
    projectTitle:
      "Mock form required to request a stimulus check from the USA government during the pandemic.",
    projectImageLink: "https://iili.io/dyqwOF4.png",
    projectName: "Stimulus Check request",
  },
  //* Tic Tac Toe
  {
    projectLink: "/projects/tictactoe",
    projectTitle:
      "An offline version of the multiplayer version at tictactoe.deno.dev.",
    projectImageLink: "https://iili.io/dyqwjMG.png",
    projectName: "Tic Tac Toe (offline)",
  },
];

//
//? Creates a column grid of projects created
export function ProjectsGrid() {
  return (
    <div class="flex flex-wrap w-full mb-4">
      {projects.map((project) => <ProjectDisplay {...project} />)}
    </div>
  );
}
