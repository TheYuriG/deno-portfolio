//? Validation function to check if a variable is a string and if it's not empty
import { isValidString } from "../isValidString.ts";
//? Type
import type { savedVisualization } from "../../types/component-properties/tools/expression-visualizer/SavedVisualization.ts";

//? Checks if an object contains all data required and returns possible errors
export function validateVisualizationJSON(data: savedVisualization) {
  const validationErrorsArray: string[] = [];

  //? Check if a valid string was passed as title
  if (!isValidString(data.title)) {
    validationErrorsArray.push("No valid title provided!");
  }

  //? Check if a valid string was passed as description
  if (!isValidString(data.description)) {
    validationErrorsArray.push("No valid description provided!");
  }

  //? Check if a valid array of expressions was passed
  if (
    typeof data.expressions !== "object" ||
    !Array.isArray(data.expressions)
  ) {
    validationErrorsArray.push("No valid array of expressions provided!");
  } //? Only attempt to validate the expressions if it is an array
  else {
    //? Cycle through every expression and see if it contains all valid/required information
    for (
      let expressionIndex = 0;
      expressionIndex < data.expressions.length;
      expressionIndex++
    ) {
      const expression = data.expressions[expressionIndex];
      if (typeof expression.leadingText !== "string") {
        validationErrorsArray.push(
          `No valid leading text of expression #${
            (expressionIndex + 1).toString()
          } provided!`,
        );
      }
      if (typeof expression.expressionText !== "string") {
        validationErrorsArray.push(
          `No valid expression text of expression #${
            (expressionIndex + 1).toString()
          } provided!`,
        );
      }
      if (typeof expression.evaluatedText !== "string") {
        validationErrorsArray.push(
          `No valid evaluated text of expression #${
            (expressionIndex + 1).toString()
          } provided!`,
        );
      }
      if (typeof expression.trailingText !== "string") {
        validationErrorsArray.push(
          `No valid trailing text of expression #${
            (expressionIndex + 1).toString()
          } provided!`,
        );
      }
      if (typeof expression.id !== "string") {
        validationErrorsArray.push(
          `No valid id of expression #${
            (expressionIndex + 1).toString()
          } provided!`,
        );
      }
    }
  }

  //? After checking all properties, return the array of errors
  return validationErrorsArray;
}
