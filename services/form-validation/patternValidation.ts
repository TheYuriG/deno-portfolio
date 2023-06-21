//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Given a current value, initial value and a validation function, return
//? what is the state of validation of the input once the respective field
//? loses focus
export function patternValidation(
  value: string,
  initialState: string,
  pattern: (
    valueToValidate: string,
  ) => validationStatus.Invalid | validationStatus.Valid,
): validationStatus {
  //? If the field is at initial state, reset validation
  if (value === initialState) {
    return validationStatus.Unchanged;
  } //? If the field is not empty, check if a validation RegEx pattern was provided
  else {
    return pattern(value);
  }
}
