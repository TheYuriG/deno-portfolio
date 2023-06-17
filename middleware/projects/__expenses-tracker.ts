//? Import handlers to create a middleware function
import { Handlers } from "$fresh/server.ts";
//? Fetch expenses from the database
import fetchExpenses from "../../services/expenses-tracker/fetchExpenses.ts";
//? Import database error instance to check for errors
import DatabaseFetchError from "../../types/error/DatabaseFetchError.ts";

//? Attempts to pull epxenses from the database, returns mock expense otherwise
export const expensesTrackerMiddleware: Handlers = {
  async GET(_req, ctx) {
    const expenses = await fetchExpenses();
    if (expenses instanceof DatabaseFetchError) {
      return ctx.render([]);
    }
    return ctx.render(expenses);
  },
};
