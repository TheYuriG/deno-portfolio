//? Validation values for typecasting
import { validationStatus } from "../../types/misc/validationStatus.ts";

//? Properties required to build a Select dropdown
interface SelectProperties {
  name: string;
  label: string;
  validationReference?: validationStatus;
  value: string;
  optionsArray: Array<string>;
  onChangeFunction: (value: string) => void;
}

//? Exports a styled select with label and options
export function StyledSelect({
  name,
  label,
  validationReference,
  value,
  optionsArray,
  onChangeFunction,
}: SelectProperties) {
  return (
    <div class="flex flex-col sm:flex-row grow items-center">
      {/* Label for what this is for */}
      <label
        class="flex w-max whitespace-nowrap"
        htmlFor={name}
      >
        {label}
      </label>
      {/* Select dropdown */}
      <select
        class="relative w-full bg-transparent custom-bo-ac rounded-lg p-2 my-2 sm:my-1 sm:ml-2 text-lg cursor-pointer custom-tr-tx-bg-bo"
        style={validationReference === validationStatus.Valid
          ? "border-color: green;"
          : validationReference === validationStatus.Invalid
          ? "border-color: red;"
          : undefined}
        name={name} //? Link to label
        value={value} //? Tracks current value
        //? Updates state when an option is selected
        onChange={(e) => {
          const { target } = e;
          if (target) {
            const changedValue = (target as HTMLSelectElement).value;
            onChangeFunction(changedValue);
          }
        }}
      >
        {/* Programatically creates options from array of strings provided */}
        {optionsArray.map((option) => (
          <option class="custom-bg-bc" value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
