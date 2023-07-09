//? Types for typecasting
import { validationStatus } from "../../types/forms/validationStatus.ts";

//? Validates the form's input field being a string being at least
//? 1 character long after the spaces are trimmed
export function validateNonEmptyText(
  text: string,
): validationStatus.Invalid | validationStatus.Valid {
  if (text.trim().length > 0) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
