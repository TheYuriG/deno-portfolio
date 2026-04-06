import { App, staticFiles, trailingSlashes } from "fresh";
import { define, type State } from "./utils.ts";

const exampleLoggerMiddleware = define.middleware((ctx) => {
  console.log(`${ctx.req.method} ${ctx.req.url}`);
  return ctx.next();
});

export const app = new App<State>()
  // Add static file serving middleware
  .use(staticFiles())
  // Enable file-system based routing
  .fsRoutes()
  // Shares something between all routes
  .use(async (ctx) => {
    ctx.state.shared = "hello";
    return await ctx.next();
  })
  // Log requests
  .use(exampleLoggerMiddleware)
  // Remove trailing slashes from URLs
  .use(trailingSlashes("never"));
