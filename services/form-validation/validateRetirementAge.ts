//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's retiring age numeric input field
export function validateRetiringAge(
  age: string,
): validationStatus.Invalid | validationStatus.Valid {
  if (Number(age) >= 30 && Number(age) <= 100) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
