//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's name input field
export function validateName(
  name: string,
): validationStatus.Invalid | validationStatus.Valid {
  //? This RegEx looks for a string of 3 to 40 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^(?!.*[ -]{2})[a-zA-Z -]{3,40}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning 1 for
  //? valid and -1 for invalid input
  if (validation.test(name)) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
