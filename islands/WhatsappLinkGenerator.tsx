//? Manage form state
import { useState } from "preact/hooks";
//? Styled components
import { StyledInput } from "../components/UI/StyledInput.tsx";
import { CountryPhoneCodeSelect } from "../components/tools/CountryPhoneCodeSelect.tsx";
//? Types for typecasting
import { validationStatus } from "../types/misc/validationStatus.ts";
import { WhatsappLinkData } from "../types/whatsapp-link-generator/whatsapp-link-data.ts";
import { StyledButton } from "../components/UI/StyledButton.tsx";
//? Validation functions
import { patternValidation } from "../services/form-validation/patternValidation.ts";
import { validateAreaCode } from "../services/form-validation/validateAreaCode.ts";
import { validatePhoneNumber } from "../services/form-validation/validatePhoneNumber.ts";
import { WhatsappLinksList } from "../components/tools/WhatsappLinksList.tsx";
import { StyledTextArea } from "../components/UI/StyledTextArea.tsx";

//? Default form values and validation
const baseLinkData = {
  countryCode: "93", //? Afghanistan, the first country in the select list
  areaCode: "",
  phoneNumber: "",
  messageText: "",
};
const defaultFormValidation = {
  areaCode: validationStatus.Unchanged,
  phoneNumber: validationStatus.Unchanged,
};

export default function WhatsappLinkGenerator() {
  const [linkData, updateLinkData] = useState(baseLinkData);
  //? Manages the validation of form fields
  const [formValidationStatus, updateValidation] = useState(
    defaultFormValidation,
  );
  //? Array of links to message a contact on Whatsapp
  const [generatedLinks, setGeneratedLinks] = useState<WhatsappLinkData[]>(
    [],
  );
  return (
    <>
      <form
        class="flex flex-col w-full"
        htmlFor="whatsapp-message-link-generator"
      >
        {/* Country selection */}
        <CountryPhoneCodeSelect
          countryCode={linkData.countryCode}
          updateCountryCode={(newCountryCode) => {
            updateLinkData((currentPhoneNumber) => ({
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
          labelLink="whatsapp-area-code"
          name="whatsapp-message-link-generator"
          value={linkData.areaCode}
          inputFunction={(newCountryCode) => {
            updateLinkData((currentPhoneNumber) => ({
              ...currentPhoneNumber,
              areaCode: newCountryCode.trim(),
            }));
          }}
          validationReference={formValidationStatus.areaCode}
          validationFunction={(input) => {
            const result = patternValidation(
              input.toString(),
              baseLinkData.areaCode,
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
          labelLink="whatsapp-phone-number"
          name="whatsapp-message-link-generator"
          value={linkData.phoneNumber}
          inputFunction={(newCountryCode) => {
            updateLinkData((currentPhoneNumber) => ({
              ...currentPhoneNumber,
              phoneNumber: newCountryCode.trim(),
            }));
          }}
          validationReference={formValidationStatus.phoneNumber}
          validationFunction={(input) => {
            const result = patternValidation(
              input.toString(),
              baseLinkData.phoneNumber,
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
        {/* Custom message to sent to all users */}
        <StyledTextArea
          minHeight="10em"
          placeholder="(Optional) Type here the text message you want to send to the phone number above"
          label="Message to send"
          labelLink="whatsapp-message-content"
          labelClasses="my-2 self-center sm:self-start"
          value={linkData.messageText}
          inputFunction={(textInput) =>
            updateLinkData((currentContent) => ({
              ...currentContent,
              messageText: textInput,
            }))}
          name="whatsapp-message-link-generator"
        />
        {/* Generate link to messaging on whatsapp with provided information */}
        <StyledButton
          classes="m-4 self-center"
          text="Generate link"
          onClickFunction={() => {
            setGeneratedLinks(
              (currentLinks) => [
                ...currentLinks,
                {
                  areaCode: linkData.areaCode,
                  countryCode: linkData.countryCode,
                  messageText: linkData.messageText,
                  phoneNumber: linkData.phoneNumber,
                },
              ],
            );
          }}
        />
      </form>
      {/* Display list of links to start a conversation with provided numbers on Whatsapp */}
      <WhatsappLinksList whatsappDataList={generatedLinks} />
    </>
  );
}
