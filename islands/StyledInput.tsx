//? Define optional and required properties for inputs
interface StyledInputProperties {
  label: string;
  key: string;
  inputType: string;
  name: string;
  placeholder: string;
  validationPattern?: string;
  value: string;
  autoFocus: boolean;
  inputFunction: (input: string) => void;
  min?: number;
  max?: number;
}

//? Exports a styled combo of label + input
//! Styling sheet form.css will organize in column on smaller
//! resolutions and as row on larger resolutions
export default function StyledInput(
  {
    label,
    key,
    inputType,
    name,
    placeholder,
    validationPattern,
    value,
    autoFocus = false,
    inputFunction,
    min,
    max,
  }: StyledInputProperties,
) {
  return (
    <>
      <div class="label-wrapper">
        <label class="styled-label" htmlFor={name}>
          {label + " "}
        </label>
        <input
          key={key}
          type={inputType}
          class="base-form-style styled-input"
          name={name}
          placeholder={placeholder}
          pattern={validationPattern}
          value={value}
          autofocus={autoFocus}
          onInput={(e) => {
            const { target } = e;
            if (target) {
              const changedValue = (target as HTMLInputElement).value;
              inputFunction(changedValue);
            }
          }}
          min={min}
          max={max}
        />
      </div>
    </>
  );
}
