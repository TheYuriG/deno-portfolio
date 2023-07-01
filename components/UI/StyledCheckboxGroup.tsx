//? Types for typecasting
import { stimulusCheckboxOptions } from "../../types/stimulusCheckboxOptions.ts";
import { validationStatus } from "../../types/misc/validationStatus.ts";
//? Import checkboxes to compose group
import { StyledSingleCheckbox } from "./StyledSingleCheckbox.tsx";

//? Every checkbox item needs to have a name and an associated
//? value to enable changing its state
type CheckboxItem = {
  name: string;
  value: string;
};

//? Properties required to build a Checkbox input
interface CheckboxGroupProperties {
  label: string;
  //? Tracks the validation reference state for this input
  validationReference: validationStatus;
  optionsArray: Array<CheckboxItem>;
  stateForCheckedReference: Record<string, boolean>;
  onChangeFunction: (name: stimulusCheckboxOptions) => void;
}

//? Exports a styled select with label and options
export function StyledCheckboxGroup({
  label,
  optionsArray,
  validationReference,
  stateForCheckedReference,
  onChangeFunction,
}: CheckboxGroupProperties) {
  return (
    <div class="my-1 flex flex-col sm:flex-row items-center">
      <span class="w-max flex-shrink-0">
        {label}
      </span>
      <div
        class="p-2 custom-bg-bc custom-bo-ac rounded-xl flex flex-col space-x-2 sm:flex-row w-min sm:w-max sm:ml-2 flex-wrap place-content-center custom-tr-tx-bg-bo"
        style={validationReference === validationStatus.Invalid
          ? "border-color: red;"
          : undefined}
      >
        {/* Programatically creates radio inputs from array of strings provided */}
        {optionsArray.map(({ value, name }: CheckboxItem) => (
          <>
            <StyledSingleCheckbox
              label={name}
              labelName={name}
              shouldBeChecked={stateForCheckedReference[value] === true}
              onChangeFunction={() => {
                onChangeFunction(value as stimulusCheckboxOptions);
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
}
