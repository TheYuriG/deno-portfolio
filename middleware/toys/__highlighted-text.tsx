//? Import handlers to fetch the name of the file that is meant to be loaded from disk
import { Handlers } from "$fresh/server.ts";
//? Utility to load file from disk and return parsed as JSON
import { loadFileFromDisk } from "../../services/loadFileFromDisk.ts";
//? Error class to handle loading failures
import FetchDataError from "../../types/error/FetchDataError.ts";

//? Attempts to load file from disk on the path related to the [text] params
export const highlightTextMiddleware: Handlers = {
  async GET(req, ctx) {
    const filePath = ctx.params.text;
    const textToHighlight = await loadFileFromDisk(`./temp/${filePath}.json`);

    //? If there was an error trying to read the file from ./temp, create error message
    if (textToHighlight instanceof FetchDataError) {
      return ctx.render({
        text:
          "Unable to find this snippet. Code snippets are automatically deleted in one hour after bring created.",
        createdAt: 0,
        expiresAt: 0,
      });
    }

    //? If there were no problems, pass the content to be rendered
    return ctx.render({ ...JSON.parse(textToHighlight) });
  },
};
