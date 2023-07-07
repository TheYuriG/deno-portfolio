//? Validation values for typecasting
import { InformationIcon } from "../../assets/InformationIcon.tsx";
//? Toggle what validation status this form should display
import { validationStatus } from "../../types/forms/validationStatus.ts";

//? Define optional and required properties for inputs
interface StyledInputProperties {
  //? What this label can auto complete to
  autoCompleteSuggestion?: string;
  //? Text for the label related to this input
  label: string;
  //? Link a label and its input together
  labelLink: string;
  //? Key that helps Preact to track this input on the DOM
  key: string;
  //? Whether this input's format should be a date, number or other string
  //! Reference: https://www.w3schools.com/tags/tag_input.asp
  inputType: "text" | "number" | "date";
  //? Tracks the validation reference state for this input
  validationReference: validationStatus;
  //? Input name, labels the inner data when/if the form is submitted
  name: string;
  //? Placeholder text to display on input, if relevant
  placeholder?: string;
  //? Initial/current value for this input
  value: string;
  //? Function that updates the input state when typing in the input field
  inputFunction: (input: string) => void;
  //? String to be turned into a RegExp. Don't enclose with forward slashes (/)!
  validationFunction: (input: string | number) => validationStatus;
  //? Minimum and maximum values for numerical or date (as string) inputs
  min?: number | string;
  max?: number | string;
  //? Define by how much a numerical input should move up or down
  step?: number;
  //? Optional string to be used on the optional help Information icon
  helpInformation?: string;
}

//? Exports a styled combo of label + input
export function StyledInput(
  {
    autoCompleteSuggestion,
    label,
    labelLink,
    key,
    inputType,
    validationReference,
    name,
    placeholder,
    value,
    inputFunction,
    validationFunction,
    min,
    max,
    step,
    helpInformation,
  }: StyledInputProperties,
) {
  return (
    <>
      <div class="flex flex-col sm:flex-row grow items-center">
        <label class="flex w-max whitespace-nowrap" htmlFor={labelLink}>
          {label}
        </label>
        <div class="flex items-center w-full">
          <input
            //? Assigns this input as required
            required
            //? Unique key to allow Preact to know which node gets removed
            key={key}
            //? Connects to the parent form, if provided
            name={name}
            //? The type of this input (file, number, text, date, etc)
            //! Reference: https://www.w3schools.com/tags/tag_input.asp
            type={inputType}
            //? Base class + validation class if needed
            class={"w-full p-2 custom-bg-bc rounded-xl grow caret-current my-1 sm:my-1 sm:ml-2 custom-bo-ac custom-tr-bg-bo" +
              (inputType === "date" ? ` styled-date` : "")}
            style={validationReference === validationStatus.Valid
              ? "border-color: green;"
              : validationReference === validationStatus.Invalid
              ? "border-color: red;"
              : undefined}
            id={labelLink}
            //? Placeholder value, if provided
            placeholder={placeholder}
            //? Initial value for the input, mostly used by the number input
            //! Gets updated by onInput()
            value={value}
            //? Updates the value on typing
            onInput={(e) => {
              const { target } = e;
              if (target) {
                const changedValue = (target as HTMLInputElement).value;
                inputFunction(changedValue);
              }
            }}
            //? Validates the input when the input loses focus
            onBlur={() => {
              validationFunction(value);
            }}
            //? Mininum and maximum thresholds for numerical values
            min={min}
            max={max}
            step={step}
            autocomplete={autoCompleteSuggestion}
          />
          {/* Tooltip on the right side, with user information about what data is valid */}
          {helpInformation && (
            <div class="ml-2 relative inline-block group">
              {/* Information icon */}
              <InformationIcon iconHeight="1.8em" iconWidth="1.8em" />
              <span
                class="absolute invisible opacity-0 w-max max-w-[80dvw] lg:max-w-[40em] custom-bg-ac custom-tx-nc text-center font-bold p-2 rounded-md right-0 top-[2em] z-10 group-hover:(visible opacity-100)"
                style="transition: opacity 0.4s ease-in-out, color 0.9s ease-in-out;"
              >
                {helpInformation}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
