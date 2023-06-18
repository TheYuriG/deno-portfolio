//? Import Expense type
import type { Expense } from "../../types/expenses-tracker/Expense.ts";
//? Import mock expenses to save to database if not yet saved
import { mockExpenses } from "../../types/expenses-tracker/mockExpenses.ts";
//? Import fetch error
import FetchDataError from "../../types/error/FetchDataError.ts";

//? Attempts to pull data from KV, uses mock otherwise
export default async function fetchExpenses(): Promise<
  FetchDataError | Expense[]
> {
  try {
    const kv = await Deno.openKv();
    const dbExpenses = await kv.get(["expenses-tracker"]);
    if (dbExpenses.value === null) {
      kv.set(["expenses-tracker"], mockExpenses);
      return mockExpenses;
    }
    return dbExpenses.value as Expense[];
  } catch (error) {
    return new FetchDataError(
      "Unable to find any Expenses!",
      error.trace,
    );
  }
}
