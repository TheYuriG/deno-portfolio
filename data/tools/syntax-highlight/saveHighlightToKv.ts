//? Import the error type for whenever there is a failed attempt to save to KV
import FetchDataError from "../../../types/error/FetchDataError.ts";
import type { HighlightText } from "../../../types/component-properties/tools/syntax-highlight/HighlightText.ts";

//? Saves data to KV
export async function saveHighlightToKv(
  path: string,
  content: HighlightText,
) {
  //? Attempt to save a file with our data to KV
  try {
    const kv = await Deno.openKv();
    await kv.set(["highlight", path], content);
  } catch (error) {
    console.log(error);
    //? If the save fails, throw an error
    throw new FetchDataError("Failed to save file to KV!", error);
  }
}
