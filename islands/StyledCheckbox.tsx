//? Types for typecasting
import { stimulusCheckboxOptions } from "../types/stimulusCheckboxOptions.ts";
//? Validation values for typecasting
import { validationStatus } from "../types/validationStatus.ts";

//? Every checkbox item needs to have a name and an associated
//? value to enable changing its state
type CheckboxItem = {
  name: string;
  value: string;
};

//? Properties required to build a Checkbox input
interface CheckboxProperties {
  label: string;
  //? Tracks the validation reference state for this input
  validationReference: validationStatus;
  optionsArray: Array<CheckboxItem>;
  stateForCheckedReference: Record<string, boolean>;
  onChangeFunction: (name: stimulusCheckboxOptions) => void;
}

//? Exports a styled select with label and options
export default function StyledCheckbox({
  label,
  optionsArray,
  validationReference,
  stateForCheckedReference,
  onChangeFunction,
}: CheckboxProperties) {
  return (
    <div class="radio-label-inputs-group">
      <span class="radio-label">
        {label}
      </span>
      <div
        class={"base-form-style radio-input-group" +
          (
            validationReference === validationStatus.Invalid
              ? " invalid-input"
              : ""
          )}
      >
        {/* Programatically creates radio inputs from array of strings provided */}
        {optionsArray.map(({ value, name }: CheckboxItem) => (
          <>
            <label class="styled-label">
              {/* Checkbox */}
              <input
                class="styled-checkbox"
                type="checkbox"
                checked={stateForCheckedReference[value] === true}
                //? Updates state when an option is clicked
                onClick={() => {
                  onChangeFunction(value as stimulusCheckboxOptions);
                }}
              >
              </input>
              {/* Label for what this is for */}
              {name}
            </label>
          </>
        ))}
      </div>
    </div>
  );
}
