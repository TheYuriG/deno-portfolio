//? Import the error type for whenever there is a failed attempt to delete from KV
import FetchDataError from "../../types/error/FetchDataError.ts";

//? Deletes data from KV
export async function deleteHighlightFromKv(path: Array<string>) {
  //? Attempt to delete data from KV
  try {
    const kv = await Deno.openKv();
    await kv.delete(path);
  } catch (error) {
    console.log(error);
    //? If the delete fails, throw an error
    throw new FetchDataError("Failed to delete data from KV!", error);
  }
}
