//? Import Expense type
import type { Expense } from "../types/Expense.ts";
//? Import fetch error
import FetchExpenseError from "../types/FetchExpenseError.ts";

//todo remove the warning below once this is moved to a database fetch
// deno-lint-ignore require-await
export default async function fetchExpenses(): Promise<
  FetchExpenseError | Expense[]
> {
  try {
    //? Mock expenses
    const expenses = [
      {
        date: new Date(2020, 1, 1),
        description: "Medical Insurance",
        cost: 3600,
      },
      {
        date: new Date(2020, 5, 3),
        description: "Shoes",
        cost: 200,
      },
      {
        date: new Date(2020, 8, 18),
        description: "House",
        cost: 250000,
      },
      {
        date: new Date(2020, 9, 20),
        description: "Car",
        cost: 40000,
      },
      {
        date: new Date(2020, 11, 28),
        description: "Kids",
        cost: 10000,
      },
    ];
    return expenses;
  } catch (error) {
    return new FetchExpenseError(
      "Unable to find any Expenses!",
      error.trace,
    );
  }
}
