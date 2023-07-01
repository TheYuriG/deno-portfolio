//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's returns numeric input field
export function validateOneOrGreater(
  numberAsString: string,
): validationStatus.Invalid | validationStatus.Valid {
  if (Number(numberAsString) >= 1) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
