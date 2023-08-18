//? To know what is the current route
import { Handlers } from "$fresh/server.ts";
//? Import the Expense type to typecast the data we get from fetchExpenses()
import type { Expense } from "../../types/component-properties/projects/expenses-tracker/Expense.ts";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Import the component responsible for tracking all expenses
import ExpensesTracker from "../../islands/projects/expenses-tracker/ExpensesTracker.tsx";
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
          <ExpensesTracker expenses={savedExpenses} />
        </section>
      </Base>
    </>
  );
}
