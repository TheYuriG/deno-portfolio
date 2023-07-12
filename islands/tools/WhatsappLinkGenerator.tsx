//? Manage form state
import { useEffect, useRef, useState } from "preact/hooks";
//? Styled components
import { StyledInput } from "../../components/UI/StyledInput.tsx";
import { StyledButton } from "../../components/UI/StyledButton.tsx";
import { CountryPhoneCodeSelect } from "../../components/UI/CountryPhoneCodeSelect.tsx";
//? Types for typecasting
import { validationStatus } from "../../types/forms/validationStatus.ts";
import type { WhatsappLinkData } from "../../types/component-properties/tools/whatsapp-link-generator/whatsapp-link-data.ts";
import { WhatsappMessagePreview } from "../../components/tools/whatsapp-message-link-generator/WhatsappMessagePreview.tsx";

//? Validation functions
import { patternValidation } from "../../services/form-validation/patternValidation.ts";
import { validateAreaCode } from "../../services/form-validation/validateAreaCode.ts";
import { validatePhoneNumber } from "../../services/form-validation/validatePhoneNumber.ts";
import { WhatsappLinksList } from "../../components/tools/whatsapp-message-link-generator/WhatsappLinksList.tsx";
import { StyledTextArea } from "../../components/UI/StyledTextArea.tsx";

//? Defined variable to replace in message body
import { WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER } from "../../data/tools/whatsapp-link-generator/whatsapp-message-variable-placeholder.ts";

//? Default form values and validation
const baseLinkData: WhatsappLinkData = {
  countryCode: "93", //? Afghanistan, the first country in the select list
  areaCode: "",
  phoneNumber: "",
  messageVariables: "",
  messageText: "",
};
const defaultFormValidation = {
  areaCode: validationStatus.Unchanged,
  phoneNumber: validationStatus.Unchanged,
};

export default function WhatsappLinkGenerator() {
  //? Use a reference to lock saving to localStorage too early and/or avoid an infinite
  //? loop of forever updating the state and running useEffect again
  const allowedToLoadFromLocalStorage = useRef(true);
  //? Manages state of the link currently being created
  const [linkData, updateLinkData] = useState(baseLinkData);
  //? Manages the validation of form fields
  const [formValidationStatus, updateValidation] = useState(
    defaultFormValidation,
  );
  //? Array of links to message a contact on Whatsapp
  const [generatedLinks, setGeneratedLinks] = useState<WhatsappLinkData[]>(
    [],
  );
  //? This needs to be !toggled to trigger a rerun of the useEffect that
  //? saves the current state to localStorage
  //! This will be toggled on a successful input submission. See validateBeforeAcceptInput()
  const [savesToLocalStorageWhenToggled, toggleSaveToLocalStorage] = useState(
    false,
  );

  //? Load from localStorage on mount, save to localStorage on validated submit
  useEffect(() => {
    //? Attempt to load data from localStorage on mount
    if (allowedToLoadFromLocalStorage.current === true) {
      const storedMessageData = localStorage.getItem("whatsapp-link-data");
      //? If whatsapp link data exists, override the current data on state with the localStorage data
      if (storedMessageData !== null) {
        const parsedMessageData: WhatsappLinkData = JSON.parse(
          storedMessageData,
        );
        updateLinkData(parsedMessageData);
      }
      allowedToLoadFromLocalStorage.current = false;
      return;
    }

    //? On subsequent runs of this useEffect, save the current data to localStorage
    localStorage.setItem(
      "whatsapp-link-data",
      JSON.stringify(linkData),
    );
  }, [savesToLocalStorageWhenToggled]);

  //? Validates if the data on the form should be accepted or rejected
  function validateBeforeAcceptInput() {
    //? Track if any validation failed
    let validInput = true;

    //? Validate if area code is empty or invalid
    if (
      linkData.areaCode === "" ||
      patternValidation(
          linkData.areaCode,
          baseLinkData.areaCode,
          validateAreaCode,
        ) === validationStatus.Invalid
    ) {
      validInput = false;
      updateValidation((currentValidation) => ({
        ...currentValidation,
        areaCode: validationStatus.Invalid,
      }));
    }
    //? Validate if phone number is empty or invalid
    if (
      linkData.phoneNumber === "" ||
      patternValidation(
          linkData.phoneNumber,
          baseLinkData.phoneNumber,
          validatePhoneNumber,
        ) ===
        validationStatus.Invalid
    ) {
      validInput = false;
      updateValidation((currentValidation) => ({
        ...currentValidation,
        phoneNumber: validationStatus.Invalid,
      }));
    }

    //? If either input is invalid, don't push this data to the array
    if (validInput === false) {
      return;
    }

    //? Trigger the useEffect to save the validated data to localStorage
    toggleSaveToLocalStorage((curr) => !curr);
    //? If the inputs are valid, add the data to the list of valid links
    setGeneratedLinks(
      (currentLinks) => [
        ...currentLinks,
        {
          areaCode: linkData.areaCode,
          countryCode: linkData.countryCode,
          messageText: linkData.messageText,
          phoneNumber: linkData.phoneNumber,
          messageVariables: linkData.messageVariables,
        },
      ],
    );
  }

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
          inputFunction={(newPhoneNumber) => {
            updateLinkData((currentPhoneNumber) => ({
              ...currentPhoneNumber,
              phoneNumber: newPhoneNumber.trim(),
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
        {/* Message variables input */}
        <StyledInput
          key="message-variables"
          inputType="text"
          label="Message variables"
          labelLink="whatsapp-message-variables"
          name="whatsapp-message-link-generator"
          value={linkData.messageVariables}
          inputFunction={(newVariables) => {
            updateLinkData((currentVariables) => ({
              ...currentVariables,
              messageVariables: newVariables,
            }));
          }}
          validationReference={validationStatus.Unchanged}
          validationFunction={() => validationStatus.Unchanged}
          helpInformation={`Variables need to be separated by commas (,) and are trimmed by default. "${WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER}" are used to create variables that will be replaced in the message to send.`}
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
        {/* Message preview */}
        <WhatsappMessagePreview
          whatsappMessagePreview={{
            messageText: linkData.messageText,
            messageVariables: linkData.messageVariables,
          }}
        />
        {/* Generate link to messaging on whatsapp with provided information */}
        <StyledButton
          classes="m-4 self-center"
          text="Generate link"
          onClickFunction={validateBeforeAcceptInput}
        />
      </form>
      {/* Display list of links to start a conversation with provided numbers on Whatsapp */}
      <WhatsappLinksList whatsappDataList={generatedLinks} />
    </>
  );
}
