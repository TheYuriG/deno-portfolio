//? Import the error type for whenever there is a failed attempt to save to disk
import FetchDataError from "../types/error/FetchDataError.ts";

//? Function to load a file from disk so it can be highlighted
export async function loadFileFromDisk(
  path: string,
): Promise<string | FetchDataError> {
  //? Attempt to save a file with our data to disk
  try {
    return await Deno.readTextFile(path);
  } catch (error) {
    //? If the load fails, throw an error to load the error page
    return new FetchDataError("Failed to load file from disk!", error);
  }
}
