//? Types for typecasting
import { validationStatus } from "../../types/forms/validationStatus.ts";

//? Validates the form's date input field
export function validateExpenseDate(
  date: string,
): validationStatus.Invalid | validationStatus.Valid {
  //? This RegEx looks for a string of 6 to 20 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^\\d{4}-\\d{2}-\\d{2}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning
  //? validationStatus.Invalid if not in the proper format
  if (validation.test(date)) {
    //! Should we limit expenses to past expenses,
    //! rather than allowing to calculate future needs?
    const today = new Date().getTime();
    const jan1st2020 = new Date(2020, 1, 1).getTime();
    const inputDate = new Date(date).getTime();
    //? If the format is correct, check if the date is within
    //? the limit of Jan 1st 2020 and today
    if (jan1st2020 < inputDate && inputDate < today) {
      return validationStatus.Valid;
    } else {
      return validationStatus.Invalid;
    }
  } else {
    return validationStatus.Invalid;
  }
}
