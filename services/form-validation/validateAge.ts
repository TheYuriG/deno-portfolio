//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's age numeric input field
export function validateAge(
  age: string,
): validationStatus.Invalid | validationStatus.Valid {
  if (Number(age) >= 18 && Number(age) <= 100) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
