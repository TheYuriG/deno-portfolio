//? Diff functions
import { commonTrailingIndexesInArrays } from "./commonTrailingIndexesInArrays.ts";
import { commonLeadingIndexesInArrays } from "./commonLeadingIndexesInArrays.ts";

//? Given two strings, return an array with the leading common text, the different text in the first string, the different text in the second string and trailing common text
//! The character sequence "&;" can be used in the second string to force a difference that isn't returned by the function
export function differenceBetweenStrings(
  firstString: string,
  secondString: string,
): [string, string, string, string] {
  //? If different strings weren't provided, return the first string and empty strings
  if (firstString === secondString) {
    return [firstString, "", "", ""];
  }

  //? Convert parameters to arrays
  const firstStringArray = firstString.split("");
  const secondStringArray = secondString.split("");

  //? Get leading text common to both strings
  const leadingText = commonLeadingIndexesInArrays(
    firstStringArray,
    secondStringArray,
  )
    .join("");
  //? Get trailing text common to both strings
  const trailingText = commonTrailingIndexesInArrays(
    firstStringArray,
    secondStringArray,
  )
    .join("");

  //? Separate substrings that are different for each string
  const firstStringDifference: string = firstString.substring(
    0,
    firstString.length - trailingText.length,
  ).substring(leadingText.length);
  const secondStringDifference: string = secondString.substring(
    0,
    secondString.length - trailingText.length,
  ).substring(leadingText.length).replace(/&;/g, "");

  return [
    leadingText,
    firstStringDifference,
    secondStringDifference,
    trailingText,
  ];
}
