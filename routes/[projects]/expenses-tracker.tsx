//? Create blog content inside Base component
import { Base } from "../../components/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/CustomHead.tsx";
import { IndividualExpense } from "../../components/expenses-tracker/IndividualExpense.tsx";
import AddNewExpense from "../../islands/AddNewExpense.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../islands/BlogNavigationButtons.tsx";

export default function Home() {
  const expenses = [
    {
      date: new Date(2022, 5, 3),
      description: "Shoes",
      cost: 200,
    },
    {
      date: new Date(2022, 9, 20),
      description: "Car",
      cost: 40000,
    },
    {
      date: new Date(2022, 8, 18),
      description: "House",
      cost: 250000,
    },
    {
      date: new Date(2022, 1, 1),
      description: "Medical Insurance",
      cost: 3600,
    },
    {
      date: new Date(2022, 11, 28),
      description: "Kids",
      cost: 10000,
    },
  ];

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
        <section class="center">
          <div class="year-expenses">
          </div>
          <AddNewExpense />
          <div class="expenses-group">
            {expenses.map((expense) => (
              <IndividualExpense
                date={expense.date}
                description={expense.description}
                cost={expense.cost}
              />
            ))}
          </div>
        </section>
      </Base>
    </>
  );
}
