//? Import handlers to create a middleware function
import { Handlers } from "$fresh/server.ts";
//? HTTP response status codes
import { HttpStatusCodes } from "../../data/misc/HttpStatusCodes.ts";
//? Database
import { saveNewExpenseToKV } from "../../data/projects/expenses-tracker/saveNewExpenseToKV.ts";
//? Fetch expenses from the database
import fetchExpenses from "../../services/expenses-tracker/fetchExpenses.ts";
//? Import the Expense type for casting
import type { Expense } from "../../types/component-properties/projects/expenses-tracker/Expense.ts";
//? Import database error instance to check for errors
import FetchDataError from "../../types/error/FetchDataError.ts";

export const expensesTrackerMiddleware: Handlers = {
  //? Attempts to pull expenses from the database, returns mock expense otherwise
  async GET(_req, ctx) {
    const expenses = await fetchExpenses();
    if (expenses instanceof FetchDataError) {
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
        status: HttpStatusCodes.BAD_REQUEST_400,
      });
    }

    //! Error if invalid request was made
    if (
      typeof newExpense.date !== "number" ||
      typeof newExpense.description !== "string" ||
      typeof newExpense.cost !== "number"
    ) {
      return new Response(null, {
        status: HttpStatusCodes.BAD_REQUEST_400,
      });
    }

    //? Attempt to save it to KV
    const savedToDatabase = await saveNewExpenseToKV({
      date: newExpense.date,
      description: newExpense.description,
      cost: newExpense.cost,
    });

    //! Error if invalid request was made, return BAD REQUEST code
    if (savedToDatabase === false) {
      const responseBody = new FormData();
      responseBody.append("message", "failed to save your data!");
      return new Response(responseBody, {
        status: HttpStatusCodes.BAD_REQUEST_400,
      });
    }

    const responseBody = new FormData();
    responseBody.append("message", "saved successfully!");
    return new Response(responseBody, {
      status: HttpStatusCodes.OK_200,
    });
  },
};
