//? Import handlers to pull the delivery timestamp from the URL
import { Handlers } from "$fresh/server.ts";

//? Renders a Not Found page if no timestamp is present on the URL,
//? renders success page otherwise
export const foodOrderSuccessMiddleware: Handlers = {
  GET(req, ctx) {
    //? Extract the delivery timestamp from the URL
    const url = new URL(req.url);
    const query = url.searchParams.get("delivery") || "";

    //? If no timestamp is present on the URL, render a page not found
    if (isNaN(Number(query))) {
      return ctx.renderNotFound();
    }

    //? If there were no problems, pass the timestamp to render the delivery estimate
    return ctx.render(query);
  },
};
