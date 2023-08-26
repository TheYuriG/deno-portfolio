//? Import the error type for whenever there is a failed attempt to write to KV
import FetchDataError from "../../../types/error/FetchDataError.ts";
//? Types
import type { savedVisualization } from "../../../types/component-properties/tools/expression-visualizer/SavedVisualization.ts";

//? Saves data to KV
export async function saveExpressionToKv(
  path: string,
  content: savedVisualization,
) {
  //? Attempt to save a file with our data to KV
  try {
    const kv = await Deno.openKv();
    await kv.set(["expression", path], content);
  } catch (error) {
    console.log(error);
    //? If the save fails, throw an error
    throw new FetchDataError("Failed to save file to KV!", error);
  }
}
