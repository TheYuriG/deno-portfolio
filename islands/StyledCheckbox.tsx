//? Properties required to build a Checkbox input
interface CheckboxProperties {
  label: string;
  optionsArray: Array<string>;
  onChangeFunction: (value: string) => void;
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
      <div className="radio-input-group">
        {/* Programatically creates radio inputs from array of strings provided */}
        {optionsArray.map((checkbox) => (
          <>
            <label class="styled-label">
              {/* Checkbox */}
              <input
                class="styled-checkbox"
                type="checkbox"
                //? Tracks current value
                value={checkbox}
                //? Updates state when an option is clicked
                onChange={(e) => {
                  const { target } = e;
                  if (target) {
                    const changedValue = (target as HTMLInputElement).value;
                    onChangeFunction(changedValue);
                  }
                }}
              >
              </input>
              {/* Label for what this is for */}
              {checkbox}
            </label>
          </>
        ))}
      </div>
    </div>
  );
}
