//? Create blog content inside Base component
import { Base } from "../../components/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/CustomHead.tsx";
import { IndividualExpense } from "../../components/expenses-tracker/IndividualExpense.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../islands/BlogNavigationButtons.tsx";

export default function Home() {
  const expenses = [
    {
      date: new Date(2022, 5, 3),
      description: "Shoes",
      price: 200,
    },
    {
      date: new Date(2022, 9, 20),
      description: "Car",
      price: 40000,
    },
    {
      date: new Date(2022, 8, 18),
      description: "House",
      price: 250000,
    },
    {
      date: new Date(2022, 1, 1),
      description: "Medical Insurance",
      price: 3600,
    },
    {
      date: new Date(2022, 11, 28),
      description: "Kids",
      price: 10000,
    },
  ];

  return (
    <>
      <CustomHead
        title="Expenses Tracker"
        description="Simple expense tracker that allows filtering by year."
        link="https://www.theyurig.com/projects/expenses-tracker"
      >
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/expenses-tracker.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to projects overview", link: "/projects" }}
        />
        <article class="center">
          {expenses.map((expense) => (
            <IndividualExpense
              date={expense.date}
              description={expense.description}
              price={expense.price}
            />
          ))}
        </article>
      </Base>
    </>
  );
}
