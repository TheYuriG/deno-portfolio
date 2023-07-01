//? Types for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Validates the form's phone number input field
export function validatePhoneNumber(
  areaCode: string,
): validationStatus.Invalid | validationStatus.Valid {
  //? Instantiate Area Code as a string length and if it's a valid number
  const areaCodeStringLength = areaCode.length;
  const isAreaCodeAnInvalidNumber = isNaN(Number(areaCode));

  if (
    areaCodeStringLength < 5 ||
    areaCodeStringLength > 10 ||
    isAreaCodeAnInvalidNumber
  ) {
    return validationStatus.Invalid;
  } else {
    return validationStatus.Valid;
  }
}
