//? Import the error type for whenever there is a failed attempt to save to KV
import FetchDataError from "../types/error/FetchDataError.ts";

//? Saves data to KV
export async function saveToKv(
  path: Array<string>,
  content: Record<string, boolean | string | number>,
) {
  //? Attempt to save a file with our data to KV
  try {
    const kv = await Deno.openKv();
    await kv.set(path, content);
  } catch (error) {
    console.log(error);
    //? If the save fails, throw an error
    throw new FetchDataError("Failed to save file to KV!", error);
  }
}
