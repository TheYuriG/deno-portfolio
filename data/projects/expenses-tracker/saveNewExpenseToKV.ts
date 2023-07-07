//? Import the Expense type for casting
import type { Expense } from "../../../types/component-properties/projects/expenses-tracker/Expense.ts";

//? Attempts to read database expenses and adds an expense to the list
export async function saveNewExpenseToKV(newExpense: Expense) {
  try {
    //? Open KV
    const kv = await Deno.openKv();
    //? Get database expenses
    const expenses = (await kv.get(["expenses-tracker"])).value;

    //? Return early if the database is empty
    if (expenses === null) {
      return false;
    }

    //? Sort expenses by date to save them back on the DB
    const sortedExpenses = [...(expenses as Expense[]), newExpense]
      .sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        return 1;
      });

    //? Save sorted expenses back on the database
    kv.set(["expenses-tracker"], sortedExpenses);

    return true;
  } catch (_err) {
    return false;
  }
}
