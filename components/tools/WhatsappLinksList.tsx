//? Memoize the array of JSX.Elements to avoid spamming calculations
import { useMemo } from "preact/hooks";
//? Types for typecasting
import type { WhatsappLinkData } from "../../types/component-properties/tools/whatsapp-link-generator/whatsapp-link-data.ts";
//? Create gradient links to all numbers provided
import { GradientLink } from "../UI/GradientLink.tsx";
//? Create a greek list of contents
import { GreekList } from "../UI/GreekList.tsx";
//? Whatsapp message Variable slots
import { WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER } from "../../data/tools/whatsapp-link-generator/whatsapp-message-variable-placeholder.ts";
import { WHATSAPP_MESSAGE_MISSING_VARIABLE_MESSAGE } from "../../data/tools/whatsapp-link-generator/whatsapp-message-missing-variable.ts";

//? Dynamically display a list of links to messaging one or more numbers on Whatsapp
export function WhatsappLinksList(
  { whatsappDataList }: { whatsappDataList: WhatsappLinkData[] },
) {
  //? Instantiate all links (memoized for performance, otherwise this rerenders too often)
  const gradientWhatsappLinks = useMemo(() =>
    whatsappDataList.map((
      { areaCode, countryCode, phoneNumber, messageText, messageVariables },
    ) => {
      //? Instantiate the message that will have the variables slotted into
      let messageWithVariablesApplied = messageText;

      //? If the user added ANY input to the variables field, replace the variable placeholders
      if (messageVariables !== "") {
        const filteredArrayOfMessageVariables = messageVariables.split(",").map(
          (variable) => variable.trim(),
        );
        //? Update the message text with the variables
        filteredArrayOfMessageVariables.forEach((variable) => {
          //? If the variable is an empty string, add missing variable error message
          if (variable === "") {
            messageWithVariablesApplied = messageWithVariablesApplied.replace(
              WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER,
              WHATSAPP_MESSAGE_MISSING_VARIABLE_MESSAGE,
            );
          } //? If the variable is valid, apply it
          else {
            messageWithVariablesApplied = messageWithVariablesApplied.replace(
              WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER,
              variable,
            );
          }
        });

        //? Replace all leftover variable placeholders with the missing variable error message
        messageWithVariablesApplied = messageWithVariablesApplied.replaceAll(
          WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER,
          WHATSAPP_MESSAGE_MISSING_VARIABLE_MESSAGE,
        );
      }

      return (
        <GradientLink
          newTab={true}
          content={`+${countryCode} (${areaCode}) ${phoneNumber}`}
          link={`https://wa.me/${countryCode}${areaCode}${phoneNumber}${
            messageText !== ""
              ? `?text=${encodeURIComponent(messageWithVariablesApplied)}`
              : ""
          }`}
          customRel="nofollow noreferrer"
        />
      );
    }), [
    whatsappDataList,
  ]);

  //? Render all links
  return <GreekList items={gradientWhatsappLinks} />;
}
