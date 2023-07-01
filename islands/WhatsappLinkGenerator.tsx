//? Manage form state
import { useState } from "preact/hooks";
//? Styled components
import { StyledInput } from "../components/UI/StyledInput.tsx";
import { CountryPhoneCodeSelect } from "../components/tools/CountryPhoneCodeSelect.tsx";
//? Types for typecasting
import { validationStatus } from "../types/misc/validationStatus.ts";
import { StyledButton } from "../components/UI/StyledButton.tsx";
//? Validation functions
import { patternValidation } from "../services/form-validation/patternValidation.ts";
import { validateAreaCode } from "../services/form-validation/validateAreaCode.ts";
import { validatePhoneNumber } from "../services/form-validation/validatePhoneNumber.ts";

//? Default form values and validation
const defaultPhoneNumber = {
  countryCode: "93",
  areaCode: "",
  phoneNumber: "",
};
const defaultFormValidation = {
  areaCode: validationStatus.Unchanged,
  phoneNumber: validationStatus.Unchanged,
};

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
            const result = patternValidation(
              input.toString(),
              defaultPhoneNumber.areaCode,
              validateAreaCode,
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
            const result = patternValidation(
              input.toString(),
              defaultPhoneNumber.phoneNumber,
              validatePhoneNumber,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              phoneNumber: result,
            }));
            return result;
          }}
          helpInformation="Must only contain numerical digits and between 5 to 10 characters long"
        />
        <StyledButton classes="m-4 self-center" text="Generate link" />
      </form>
    </>
  );
}
