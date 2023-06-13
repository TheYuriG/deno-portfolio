//? Import handlers to manage HTTP methods for GET/POST to /toys/syntax-highlight
import { Handlers } from "$fresh/server.ts";
//? Import service that handles saving temporary JSON files to disk and then deleting them later
import { saveHighlightTextToTemp } from "../../services/syntax-highlight/highlight-saved-text.ts";

//? Export a middleware responsible for handling incoming GET/POST requests to /toys/syntax-highlight
export const syntaxHighlightMiddleware: Handlers = {
  //? If the user is trying to load the page, display it
  GET(req, ctx) {
    const errors = new URL(req.url).searchParams.get("error") || "";
    console.log(errors);
    return ctx.render({ errors });
  },
  //? When the user attempts to subtmit the highlighted text, temp save it to the file system to load it on the next route
  async POST(req, ctx) {
    const form = await req.formData();
    const text = form.get("text-to-highlight")?.toString();

    const headers = new Headers();

    //! throws error, needs better status code?
    //* user error, confirmed sending empty form
    if (text === "") {
      headers.set("location", "/toys/syntax-highlight");
      return new Response(null, {
        status: 400, // Bad Request HTTP status code
        headers,
      });
    }

    //! This will only happen if the user attempts to send a form outside of the page or
    //! using external tools and failing to send a proper form
    //? Returns a "not found" page
    if (text === undefined) {
      return ctx.renderNotFound();
    }

    try {
      const now = new Date().getTime();
      await saveHighlightTextToTemp(text, now);
      // Redirect to highlighted text page
      headers.set("location", "/toys/highlighted-text/" + now.toString());
      return new Response(null, {
        status: 303, // See Other HTTP status code
        headers,
      });
    } catch (error) {
      return new Response(null, {
        status: 500, // Internal Server Error HTTP status code
      });
    }
  },
};
