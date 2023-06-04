// //? To know what is the current route
import { Handlers } from "$fresh/server.ts";
//? Fetch a post from source and return it as a CompletePost type
import fetchExpenses from "../../services/fetchExpenses.ts";
//? Import the custom error to throw if the database fetch fails
import FetchExpenseError from "../../types/FetchExpenseError.ts";
//? Import the Expense type to typecast the data we get from fetchExpenses()
import type { Expense } from "../../types/Expense.ts";
//? Create blog content inside Base component
import { Base } from "../../components/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../components/BlogNavigationButtons.tsx";
//? Import the component responsible for tracking all expenses
import ExpensesTracker from "../../islands/ExpensesTracker.tsx";
//? Describe things that were learned with this current project
import ProjectDiscovery from "../../islands/ProjectDiscovery.tsx";

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
        <link rel="stylesheet" href="/blog.css" />
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
        <section class="center">
          <ProjectDiscovery
            innerText={[
              // first paragraph
              "Sadly I didn't learn anything practical from doing this project, " +
              "as all that was taught were things I've already known about from building stuff before.",
              // second paragraph
              "I learned some theorical things which might be useful when dealing with" +
              " legacy codebases, like how React (the course's focus) can render components " +
              "by nesting React.render(component, properties, child1, child2, child3, ...," +
              " childN) and this is the way that it was done before JSX.",
              // third paragraph
              "It makes sense why everything is a component, otherwise it would get really " +
              "easy to enter a component hell with that style. JSX isn't much different, " +
              "but written as HTML instead of nesting functions.",
              // fourth paragraph
              "I felt like this specific project didn't go deep enough. It didn't make me" +
              " 'CRUD' the expenses, which I just ended up having to figure out and do by" +
              " myself (that was the fun part!). I also went the extra mile with a few" +
              " things, deviating from the project structure and styling to challenge myself a bit more.",
            ]}
          />
          <ExpensesTracker key={"all-expenses"} expenses={savedExpenses} />
        </section>
      </Base>
    </>
  );
}
