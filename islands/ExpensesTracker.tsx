//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Import IndividualExpenses component to display expenses
import { IndividualExpense } from "../components/expenses-tracker/IndividualExpense.tsx";
//? Import expense creation form
import AddNewExpense from "./AddNewExpense.tsx";
//? Import the Expense type for casting
import type { Expense } from "../types/Expense.ts";
import ExpensesYearSelect from "./ExpensesYearSelect.tsx";
import { ExpenseChart } from "../components/expenses-tracker/ExpensesChart.tsx";
import { postNewExpense } from "../services/expenses-tracker/postNewExpense.ts";

//? Filters expenses by year
function filterExpensesByYear(year: string, savedExpenses: Expense[]) {
  return savedExpenses.filter((expense) =>
    new Date(expense.date).getFullYear() === Number(year)
  );
}

export default function ExpensesTracker(
  { expenses: savedExpenses }: { expenses: Expense[] },
) {
  //? Tracks what year's expenses are being displayed
  const [expensesYear, setExpensesYear] = useState("2020");
  //? Manages currently displayed expenses for the chosen year
  const [expenses, updateExpenses] = useState(
    filterExpensesByYear(expensesYear, savedExpenses),
  );

  return (
    <div class="w-full">
      <div class="custom-bo-nc rounded-xl py-2 px-4 custom-sh-nc py-2 px-4 mb-4 flex flex-col items-center">
        {/* Displays bars for each month of the year */}
        <ExpenseChart year={expensesYear} expenses={expenses} />
        {/* Changes what is the current year being displayed */}
        <ExpensesYearSelect
          selectedYear={expensesYear}
          expensesFilter={(year) => {
            //? Update expensesYear on value change
            setExpensesYear(year);
            //? Set displayed Expenses to current selected year only
            updateExpenses(filterExpensesByYear(year, savedExpenses));
          }}
        />
      </div>
      {/* Adds a new expense to the list */}
      <AddNewExpense
        //? Add new expense to the database
        addNewExpenseFunction={(newExpense) => {
          //? Parse the expense into useful data
          const newExpenseWithDateAsNumber: Expense = {
            ...newExpense,
            date: new Date(newExpense.date).getTime(),
          };

          //! Can return 200 for OK or 400 for Bad Request
          postNewExpense(newExpenseWithDateAsNumber);

          //? Optimistically add the expense to the list
          savedExpenses.push(newExpenseWithDateAsNumber);

          //? Display new list of arrays for the given year
          //! Only matters if the user added an expense to the year that is being currently viewed
          updateExpenses(filterExpensesByYear(expensesYear, savedExpenses));
        }}
      />
      {/* Displays all expenses */}
      <div class="w-full space-y-4">
        {/* Display all expenses filtered */}
        {expenses.map((expense) => (
          <IndividualExpense
            date={expense.date}
            description={expense.description}
            cost={expense.cost}
          />
        ))}
      </div>
    </div>
  );
}
