//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's investment numeric input field
export function validateYearlyInvestment(
  investment: string,
): validationStatus.Invalid | validationStatus.Valid {
  if (Number(investment) >= 10 && Number(investment) <= 100) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}
