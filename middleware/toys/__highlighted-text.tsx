//? Import handlers to fetch the name of the file that is meant to be loaded from KV
import { Handlers } from "$fresh/server.ts";
//? Utility to pull data from KV
import { readHighlightFromKv } from "../../data/syntax-highlight/readHighlightFromKv.ts";

//? Attempts to load data from KV on the path related to the [text] params
export const highlightTextMiddleware: Handlers = {
  async GET(req, ctx) {
    const filePath = ctx.params.text;
    const textToHighlight = await readHighlightFromKv(["highlight", filePath]);

    //? If no data was found in KV, return message about automatic deletions
    if (textToHighlight.value === null) {
      return ctx.render({
        text:
          "Unable to find this snippet. Code snippets are automatically deleted in one hour after bring created.",
        createdAt: 0,
        expiresAt: 0,
      });
    }

    //? If there were no problems, pass the content to be rendered
    return ctx.render(textToHighlight.value);
  },
};
