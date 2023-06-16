//? Properties required to build a single Checkbox
interface SingleCheckboxProperties {
  label: string;
  shouldBeChecked: boolean;
  onChangeFunction: (toggle: boolean) => void;
}

//? Exports a styled checkbox with label and state
export function StyledSingleCheckbox({
  label,
  shouldBeChecked,
  onChangeFunction,
}: SingleCheckboxProperties) {
  return (
    <>
      <label class="flex w-max text-center whitespace-nowrap ">
        {/* Checkbox */}
        <input
          type="checkbox"
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
