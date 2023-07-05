//? Import the error type for whenever there is a failed attempt to save to disk
import { deleteHighlightFromKv } from "../../data/tools/syntax-highlight/deleteHighlightFromKv.ts";
import { saveHighlightToKv } from "../../data/tools/syntax-highlight/saveHighlightToKv.ts";
import FetchDataError from "../../types/error/FetchDataError.ts";
import type { HighlightText } from "../../types/syntax-highlight/HighlightText.ts";

//? Function to save text to disk so it can be read by another route
export async function manageHighlightTextOnKv(text: string, now: number) {
  //? Instantiate variables that will be reused
  const ONE_HOUR_IN_MS = 3600000;
  const fileExpiration = now + ONE_HOUR_IN_MS;
  const dataToSave: HighlightText = {
    createdAt: now,
    expiresAt: fileExpiration,
    text,
  };

  //? Attempt to save a file with our data to disk
  try {
    await saveHighlightToKv(now.toString(), dataToSave);
  } catch (error) {
    //? If the save fails, throw an error to load the error page
    throw new FetchDataError("Failed to save file to KV!", error);
  }

  //? After saving the file to disk, create a timer to automatically delete the file
  //? from disk after 'fileExpiration' passed
  try {
    setTimeout(() => {
      deleteHighlightFromKv(now.toString());
    }, ONE_HOUR_IN_MS);
  } catch (error) {
    //? If the deletion fails, there is no need to throw an error because it wouldn't
    //? render an error page. The user had already been long redirected to another page
    console.log(error);
  }
}
