//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's numeric input field for a value equal to 0 or greater
export function validateZeroOrGreater(
  value: string,
): validationStatus.Invalid | validationStatus.Valid {
  if (Number(value) >= 0) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
