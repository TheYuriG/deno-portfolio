//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's compensation numeric input field
export function validateCompensation(
  compensation: string,
): validationStatus.Invalid | validationStatus.Valid {
  if (Number(compensation) >= 20000) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
