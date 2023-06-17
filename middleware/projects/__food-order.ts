//? Import handlers to fetch the name of the file that is meant to be loaded from KV
import { Handlers } from "$fresh/server.ts";
//? Fetch food options from the database
import fetchFood from "../../services/food-order/fetchFood.ts";
//? Import database error instance to check for errors
import DatabaseFetchError from "../../types/error/DatabaseFetchError.ts";

//? Attempts to pull food order items from the database, returns mock food otherwise
export const foodOrderMiddleware: Handlers = {
  async GET(_req, ctx) {
    const foods = await fetchFood();
    if (foods instanceof DatabaseFetchError) {
      return ctx.render([]);
    }
    return ctx.render(foods);
  },
};
