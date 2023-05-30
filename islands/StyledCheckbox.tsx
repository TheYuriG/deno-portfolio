//? Types for typecasting
import { stimulusCheckboxOptions } from "../types/stimulusCheckboxOptions.ts";

//? Every checkbox item needs to have a name and an associated
//? value to enable changing its state
type CheckboxItem = {
  name: string;
  value: string;
};

//? Properties required to build a Checkbox input
interface CheckboxProperties {
  label: string;
  optionsArray: Array<CheckboxItem>;
  onChangeFunction: (name: stimulusCheckboxOptions) => void;
}

//? Exports a styled select with label and options
export default function StyledCheckbox({
  label,
  optionsArray,
  onChangeFunction,
}: CheckboxProperties) {
  return (
    <div class="radio-label-inputs-group">
      <span class="radio-label">
        {label}
      </span>
      <div class="base-form-style radio-input-group">
        {/* Programatically creates radio inputs from array of strings provided */}
        {optionsArray.map(({ value, name }: CheckboxItem) => (
          <>
            <label class="styled-label">
              {/* Checkbox */}
              <input
                class="styled-checkbox"
                type="checkbox"
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
