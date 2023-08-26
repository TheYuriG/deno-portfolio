//? Import handlers to manage HTTP methods for GET/POST to /tools/view-expression/[parameter]
import { Handlers } from "$fresh/server.ts";

//? Slugify string
import { slugify } from "../../services/slugifyString.ts";
//? Payload validation function
import { validateVisualizationJSON } from "../../services/expression-visualizer/validateVisualizationJSON.ts";
//? HTTP response status codes
import { HttpStatusCodes } from "../../data/misc/HttpStatusCodes.ts";

//? Load expressions from KV and save expression to KV
import { readExpressionFromKv } from "../../data/tools/expression-visualizer/readExpressionFromKv.ts";
import { saveExpressionToKv } from "../../data/tools/expression-visualizer/saveExpressionToKv.ts";

//? Types
import type { savedVisualization } from "../../types/component-properties/tools/expression-visualizer/SavedVisualization.ts";

//? Export a middleware responsible for handling incoming GET/POST requests to /tools/view-expression
export const viewExpressionMiddleware: Handlers = {
  //? If the user is trying to load the page, display it
  async GET(_req, ctx) {
    const slug = ctx.params.expression.toLowerCase();

    try {
      //? Attempt to fetch an expression at the provided slug path
      const kvExpression = (await readExpressionFromKv(slug))
        .value;
      //? Check if the database request returned a valid savedVisualization object
      if (kvExpression === null) {
        //? Render not found page if no valid object is found on the database
        throw new Error("Expression not found in database.");
      }

      //? If we have a valid object, pass that to the render function
      return ctx.render(kvExpression as savedVisualization);
    } catch (error) {
      return ctx.renderNotFound(error);
    }
  },

  //? When the user attempts to submit the expression to visualize, save it to
  //? Deno KV, which later gets loaded on the next route
  async POST(req, _ctx) {
    const headers = new Headers();

    try {
      //! Slugs are created from the title, so that property needs to be omitted for now
      const sluglessExpression: Omit<savedVisualization, "slug"> = await req
        .json();

      //? Run the payload through the validation function
      const validationErrors = validateVisualizationJSON({
        ...sluglessExpression,
        slug: "",
      });
      //? Check if the validation function returned any validation errors
      if (validationErrors.length > 0) {
        return new Response(
          JSON.stringify({
            message: "Invalid form submission!",
            errors: validationErrors,
          }),
          {
            status: HttpStatusCodes.BAD_REQUEST_400,
            headers,
          },
        );
      }

      //? Create the slug
      const slug = slugify(sluglessExpression.title.toLowerCase());
      //? Recreate expression object with the created slug
      const expressionWithSlug: savedVisualization = {
        ...sluglessExpression,
        slug,
      };

      //? Attempt to pull an expression from the database with the current slug
      const kvExpression = (await readExpressionFromKv(slug)).value;
      //? Check if there was already an expression saved with the slug
      if (kvExpression !== null) {
        return new Response(
          JSON.stringify({
            message:
              "An expression has already been saved in the database with this name! Please pick another.",
          }),
          {
            status: HttpStatusCodes.CONFLICT_409,
            headers,
          },
        );
      }

      //? If the sent expression is valid and doesn't already exist on KV, save it
      await saveExpressionToKv(slug, expressionWithSlug);

      //? Redirect to the page with
      headers.set("location", "/tools/view-expression/" + slug);
      return new Response(null, {
        status: HttpStatusCodes.SEE_OTHER_303,
        headers,
      });
    } catch (_error) {
      headers.set("location", "/500");
      return new Response(null, {
        status: HttpStatusCodes.INTERNAL_SERVER_ERROR_500,
      });
    }
  },
};
