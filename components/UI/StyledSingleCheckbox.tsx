//? Properties required to build a single Checkbox
interface SingleCheckboxProperties {
  label: string;
  labelName: string;
  shouldBeChecked: boolean;
  onChangeFunction: (toggle: boolean) => void;
}

//? Exports a styled checkbox with label and state
export function StyledSingleCheckbox({
  label,
  labelName,
  shouldBeChecked,
  onChangeFunction,
}: SingleCheckboxProperties) {
  return (
    <>
      <label
        class="flex w-max text-center whitespace-nowrap"
        htmlFor={labelName}
      >
        {/* Checkbox */}
        <input
          class="styled-checkbox"
          type="checkbox"
          id={labelName}
          checked={shouldBeChecked === true}
          //? Updates state when an option is clicked
          onClick={() => {
            onChangeFunction(shouldBeChecked);
          }}
        >
        </input>
        {/* Label for what this is for */}
        {label}
      </label>
    </>
  );
}
