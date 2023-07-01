import { useState } from "preact/hooks";
import { StyledInput } from "../components/UI/StyledInput.tsx";
import { CountryPhoneCodeSelect } from "../components/tools/CountryPhoneCodeSelect.tsx";
//? Types for typecasting
import { validationStatus } from "../types/misc/validationStatus.ts";
import { StyledButton } from "../components/UI/StyledButton.tsx";

const defaultPhoneNumber = {
  countryCode: "93",
  areaCode: "",
  phoneNumber: "",
};

const defaultFormValidation = {
  areaCode: validationStatus.Unchanged,
  phoneNumber: validationStatus.Unchanged,
};

//? Validates the form's area code input field
const areaCodeValidation = (
  areaCode: string,
): validationStatus.Invalid | validationStatus.Valid => {
  //? Instantiate Area Code as a string length and if it's a valid number
  const areaCodeStringLength = areaCode.length;
  const isAreaCodeAnInvalidNumber = isNaN(Number(areaCode));

  if (
    areaCodeStringLength > 4 ||
    isAreaCodeAnInvalidNumber
  ) {
    return validationStatus.Invalid;
  } else {
    return validationStatus.Valid;
  }
};

//? Validates the form's phone number input field
const phoneNumberValidation = (
  areaCode: string,
): validationStatus.Invalid | validationStatus.Valid => {
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
};

//? Given a current value, initial value and a validation function, return
//? what is the state of validation of the input once the respective field
//? loses focus
function validateInput(
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

export default function WhatsappLinkGenerator() {
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber);
  //? Manages the validation of form fields
  const [formValidationStatus, updateValidation] = useState(
    defaultFormValidation,
  );
  console.log(
    "whole number:",
    `+${phoneNumber.countryCode}${phoneNumber.areaCode}${phoneNumber.phoneNumber}`,
  );
  return (
    <>
      <form
        class="flex flex-col w-full"
        for="whatsapp-message-link-generator"
      >
        {/* Country selection */}
        <CountryPhoneCodeSelect
          countryCode={phoneNumber.countryCode}
          updateCountryCode={(newCountryCode) => {
            setPhoneNumber((currentPhoneNumber) => ({
              ...currentPhoneNumber,
              countryCode: newCountryCode,
            }));
          }}
        />
        {/* Area Code input */}
        <StyledInput
          key="area-code"
          inputType="text"
          label="Area code"
          name="whatsapp-message-link-generator"
          value={phoneNumber.areaCode}
          inputFunction={(newCountryCode) => {
            setPhoneNumber((currentPhoneNumber) => ({
              ...currentPhoneNumber,
              areaCode: newCountryCode.trim(),
            }));
          }}
          validationReference={formValidationStatus.areaCode}
          validationFunction={(input) => {
            const result = validateInput(
              input.toString(),
              defaultPhoneNumber.areaCode,
              areaCodeValidation,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              areaCode: result,
            }));
            return result;
          }}
          helpInformation="Must only contain numerical digits and between 1 to 4 characters long"
        />
        {/* Phone Number input */}
        <StyledInput
          key="phone-number"
          inputType="text"
          label="Phone number"
          name="whatsapp-message-link-generator"
          value={phoneNumber.phoneNumber}
          inputFunction={(newCountryCode) => {
            setPhoneNumber((currentPhoneNumber) => ({
              ...currentPhoneNumber,
              phoneNumber: newCountryCode.trim(),
            }));
          }}
          validationReference={formValidationStatus.phoneNumber}
          validationFunction={(input) => {
            const result = validateInput(
              input.toString(),
              defaultPhoneNumber.phoneNumber,
              phoneNumberValidation,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              phoneNumber: result,
            }));
            return result;
          }}
          helpInformation="Must only contain numerical digits and between 1 to 4 characters long"
        />
        <StyledButton classes="m-4 self-center" text="Generate link" />
      </form>
    </>
  );
}
