//? Import handlers to create a middleware function
//? Fetch food options from the database
import fetchFood from "../../services/food-order/fetchFood.ts";
//? Import database error instance to check for errors
import FetchDataError from "../../types/error/FetchDataError.ts";
import { Handlers } from "fresh/compat";

//? Attempts to pull food order items from the database, returns mock food otherwise
export const foodOrderMiddleware: Handlers = {
  async GET(_req, ctx) {
    const foods = await fetchFood();
    if (foods instanceof FetchDataError) {
      return ctx.render([]);
    }
    return ctx.render(foods);
  },
};
