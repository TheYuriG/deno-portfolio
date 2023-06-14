//? Import the error type for whenever there is a failed attempt to read from KV
import FetchDataError from "../types/error/FetchDataError.ts";

//? Reads data from KV
export async function readFromKv(path: Array<string>) {
  //? Attempt to read data from KV
  try {
    const kv = await Deno.openKv();
    return await kv.get(path);
  } catch (error) {
    console.log(error);
    //? If the load fails, throw an error
    throw new FetchDataError("Failed to read data from KV!", error);
  }
}
