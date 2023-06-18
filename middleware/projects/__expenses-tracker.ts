//? Import handlers to create a middleware function
import { Handlers } from "$fresh/server.ts";
import { saveNewExpenseToKV } from "../../data/expenses-tracker/saveNewExpenseToKV.ts";
//? Fetch expenses from the database
import fetchExpenses from "../../services/expenses-tracker/fetchExpenses.ts";
//? Import the Expense type for casting
import type { Expense } from "../../types/Expense.ts";
//? Import database error instance to check for errors
import DatabaseFetchError from "../../types/error/DatabaseFetchError.ts";

export const expensesTrackerMiddleware: Handlers = {
  //? Attempts to pull expenses from the database, returns mock expense otherwise
  async GET(_req, ctx) {
    const expenses = await fetchExpenses();
    if (expenses instanceof DatabaseFetchError) {
      return ctx.render([]);
    }
    return ctx.render(expenses);
  },
  //? Create a new expense on the database
  async POST(req, _ctx) {
    const newExpense: Expense = await req.json();

    //! Error if invalid request was made
    if (typeof newExpense !== "object") {
      return new Response(null, {
        status: 400, // Bad Request HTTP status code
      });
    }

    //! Error if invalid request was made
    if (
      typeof newExpense.date !== "number" ||
      typeof newExpense.description !== "string" ||
      typeof newExpense.cost !== "number"
    ) {
      return new Response(null, {
        status: 400, // Bad Request HTTP status code
      });
    }

    //? Attempt to save it to KV
    const savedToDatabase = await saveNewExpenseToKV(newExpense);

    //! Error if invalid request was made, return BAD REQUEST code
    if (savedToDatabase === false) {
      const responseBody = new FormData();
      responseBody.append("message", "failed to save your data!");
      return new Response(responseBody, {
        status: 400, // Bad Request HTTP status code
      });
    }

    const responseBody = new FormData();
    responseBody.append("message", "saved successfully!");
    return new Response(responseBody, {
      status: 200, // OK HTTP status code
    });
  },
};
