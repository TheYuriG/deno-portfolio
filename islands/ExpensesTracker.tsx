//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Import IndividualExpenses component to display expenses
import { IndividualExpense } from "../components/expenses-tracker/IndividualExpense.tsx";
//? Import expense creation form
import AddNewExpense from "./AddNewExpense.tsx";
//? Import the Expense type for casting
import { Expense } from "../types/Expense.ts";

export default function ExpensesTracker(
  { expenses: savedExpenses }: { expenses: Expense[] },
) {
  const [expenses, updateExpenses] = useState(savedExpenses);

  return (
    <div style="width: 100%;">
      <div class="year-expenses">
      </div>
      <AddNewExpense
        addNewExpenseFunction={(newExpense) => {
          updateExpenses((currentState) => {
            return [...currentState, newExpense];
          });
        }}
      />
      <div class="expenses-group">
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
