//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's investment numeric input field
export function validateYearlyInvestment(
  age: string,
): validationStatus.Invalid | validationStatus.Valid {
  if (Number(age) >= 10 && Number(age) <= 100) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
