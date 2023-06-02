// //? To know what is the current route
import { Handlers } from "$fresh/server.ts";
//? Fetch a post from source and return it as a CompletePost type
import fetchExpenses from "../../services/fetchExpenses.ts";
//todo Import
import FetchExpenseError from "../../types/FetchExpenseError.ts";
//todo
import { Expense } from "../../types/Expense.ts";
//? Create blog content inside Base component
import { Base } from "../../components/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../islands/BlogNavigationButtons.tsx";
import ExpensesTracker from "../../islands/ExpensesTracker.tsx";

//? Runs before the render function to fetch the post from the files, then
//? pushes
export const handler: Handlers = {
  async GET(req, ctx) {
    const expenses = await fetchExpenses();
    if (expenses instanceof FetchExpenseError) {
      return ctx.render([]);
    }
    return ctx.render(expenses);
  },
};

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
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/expenses-tracker.css" />
        <link rel="stylesheet" href="/form.css" />
        <link rel="stylesheet" href="/styled-button.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to projects overview", link: "/projects" }}
        />
        <ExpensesTracker expenses={savedExpenses} />
      </Base>
    </>
  );
}
