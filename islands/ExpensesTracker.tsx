//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Import IndividualExpenses component to display expenses
import { IndividualExpense } from "../components/expenses-tracker/IndividualExpense.tsx";
//? Import expense creation form
import AddNewExpense from "./AddNewExpense.tsx";
//? Import the Expense type for casting
import type { Expense } from "../types/Expense.ts";
import ExpensesYearlySummary from "./ExpensesYearlySummary.tsx";

export default function ExpensesTracker(
  { expenses: savedExpenses }: { expenses: Expense[] },
) {
  const [expenses, updateExpenses] = useState(savedExpenses);

  return (
    <div style="width: 100%;">
      <ExpensesYearlySummary
        //? Set displayed Expenses to current selected year only
        expensesFilter={(year) =>
          updateExpenses(savedExpenses.filter((expense) =>
            new Date(expense.date).getFullYear() === Number(year)
          ))}
      />
      <AddNewExpense
        //? Add new expense to the database
        addNewExpenseFunction={(newExpense) => {
          updateExpenses((currentState) => {
            return [...currentState, newExpense];
          });
        }}
      />
      <div class="expenses-group">
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
