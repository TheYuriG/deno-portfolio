//? To know what is the current route
import { Handlers } from "$fresh/server.ts";
//? Import the Expense type to typecast the data we get from fetchExpenses()
import type { Expense } from "../../types/expenses-tracker/Expense.ts";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Import the component responsible for tracking all expenses
import ExpensesTracker from "../../islands/projects/ExpensesTracker.tsx";
//? Describe things that were learned with this current project
import Collapsible from "../../islands/misc/Collapsible.tsx";
//? Import middleware responsible for pulling expenses tracked
import { expensesTrackerMiddleware } from "../../middleware/projects/__expenses-tracker.ts";

//? Runs before the render function to fetch the expenses from the
//? database, then pushes the data into the rendered page function
export const handler: Handlers = expensesTrackerMiddleware;

export default function Home(
  { data: savedExpenses }: { data: Expense[] },
) {
  return (
    <>
      {
        /* Base Head with all common required imports, plus added
        meta-tags and imports required for this specific route */
      }
      <CustomHead
        title="Expenses Tracker"
        description="Simple expense tracker that allows filtering by year."
        link="https://www.theyurig.com/projects/expenses-tracker"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{ title: "Return to projects overview", link: "/projects" }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <Collapsible
            checkboxText="What did I learn?"
            innerText={[
              // first paragraph
              "Sadly I didn't learn anything practical from doing this project, as all that was taught were things I've already known about from building stuff before.",
              // second paragraph
              "I learned some theorical things which might be useful when dealing with legacy codebases, like how React (the course's focus) can render components by nesting React.createElement(component, properties, child1, child2, child3, ..., childN) and this is the way that it was done before JSX.",
              // third paragraph
              "It makes sense why everything is a component, otherwise it would get really easy to enter a component hell with that style. JSX isn't much different, but written as HTML instead of nesting functions.",
              // fourth paragraph
              "I felt like this specific project didn't go deep enough. It didn't make me 'CRUD' the expenses, which I just ended up having to figure out and do by myself (that was the fun part!). I also went the extra mile with a few things, deviating from the project structure and styling to challenge myself a bit more.",
            ]}
          />
          <ExpensesTracker key={"all-expenses"} expenses={savedExpenses} />
        </section>
      </Base>
    </>
  );
}
