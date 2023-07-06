//? Types for typecasting
import { JSX } from "preact";
import type { WhatsappLinkData } from "../../types/component-properties/tools/whatsapp-link-generator/whatsapp-link-data.ts";
//? Whatsapp message Variable slots
import { WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER } from "../../data/tools/whatsapp-link-generator/whatsapp-message-variable-placeholder.ts";
import { WHATSAPP_MESSAGE_MISSING_VARIABLE_MESSAGE } from "../../data/tools/whatsapp-link-generator/whatsapp-message-missing-variable.ts";

//? Displays a preview of the out message, if a valid, non-empty after trimmed
//? message and valid set of variables were provided
export function WhatsappMessagePreview(
  { whatsappMessagePreview: { messageText, messageVariables } }: {
    whatsappMessagePreview: Pick<
      WhatsappLinkData,
      "messageText" | "messageVariables"
    >;
  },
) {
  //? Don't render anything if the text or the variables are empty
  if (
    messageText === "" ||
    messageVariables === ""
  ) {
    return <></>;
  }

  //? Split the variables into an array
  const arrayOfVariables = messageVariables.split(",").map((variable) => {
    //? Trim the variable once so we don't need to redo this
    //? calculation twice
    const trimmedVariable = variable.trim();

    //? Return the variable if a valid string was provided
    if (trimmedVariable !== "") {
      return renderHighlightedPreviewSpan(trimmedVariable);
    }

    //? Return the missing variable text if an empty string is the trim result
    return renderHighlightedPreviewSpan(
      WHATSAPP_MESSAGE_MISSING_VARIABLE_MESSAGE,
    );
  });
  //? Return the message text splits so that it can be joined with the variables
  const unmodifiedText = messageText.split(
    WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER,
  )
    .map((element) => <span>{element}</span>);

  //? Create an array of JSX elements that builds to be displayed as the message preview
  const previewJSX: JSX.Element[] = [];
  //? Loop through all base text splits
  for (
    let variableIndex = 0;
    variableIndex < unmodifiedText.length;
    variableIndex++
  ) {
    //? If there is no more text to go through, end the loop and render the text
    if (unmodifiedText.length - 1 === variableIndex) {
      break;
    }

    //? Add current text to the preview
    previewJSX.push(unmodifiedText[variableIndex]);
    //? If we ran out of variables, render placeholder
    if (arrayOfVariables.length <= variableIndex) {
      previewJSX.push(
        renderHighlightedPreviewSpan(WHATSAPP_MESSAGE_MISSING_VARIABLE_MESSAGE),
      );
    } //? If there is a variable to be used, render it
    else {
      previewJSX.push(arrayOfVariables[variableIndex]);
    }
  }

  //? After looping through all code blocks, append the final message text string
  previewJSX.push(unmodifiedText[unmodifiedText.length - 1]);

  //? Return a formatted
  return (
    <div class="mt-4">
      Message preview (with {WHATSAPP_MESSAGE_VARIABLE_PLACEHOLDER}{" "}
      variables replaced)
      <div
        id="message-preview"
        class="w-full mt-2 mb-4 py-2 px-4 whitespace-pre-wrap custom-bo-ac rounded-xl"
      >
        {...previewJSX}
      </div>
    </div>
  );
}

//? Returns a highlighted span with the provided string as content
function renderHighlightedPreviewSpan(text: string) {
  return (
    <span class="custom-tx-ac custom-tr-tx">
      {text}
    </span>
  );
}
