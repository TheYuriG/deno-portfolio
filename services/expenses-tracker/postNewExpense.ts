//? Import the Expense type for casting
import type { Expense } from "../../types/Expense.ts";

export async function postNewExpense(expense: Expense) {
  const headers = new Headers({ "content-type": "application/json" });
  const res = await fetch("/projects/expenses-tracker", {
    method: "POST",
    headers,
    body: JSON.stringify(expense),
  });
  return res.status;
}
