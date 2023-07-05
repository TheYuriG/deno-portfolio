//? Types for typecasting
import { validationStatus } from "../../types/forms/validationStatus.ts";

//? Validates the form's profession input field
export function validateProfession(
  profession: string,
): validationStatus.Invalid | validationStatus.Valid {
  //? This RegEx looks for a string of 6 to 20 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^(?!.*[ -]{2})[a-zA-Z -]{6,20}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning
  //? validationStatus.Valid or validationStatus.Invalid
  if (validation.test(profession)) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
