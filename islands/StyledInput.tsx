//? Define optional and required properties for inputs
interface StyledInputProperties {
  label: string;
  key: string;
  inputType: string;
  name: string;
  placeholder: string;
  validationPattern?: string;
  value: string;
  autoFocus?: boolean;
  inputFunction: (input: string) => void;
  min?: number;
  max?: number;
  helpInformation?: string;
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
    autoFocus,
    inputFunction,
    min,
    max,
    helpInformation,
  }: StyledInputProperties,
) {
  return (
    <>
      <div class="label-wrapper">
        <label class="styled-label" htmlFor={name}>
          {label + " "}
        </label>
        <div class="helper">
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
          <div class="tooltip">
            <svg
              height="1.5em"
              width="1.5em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 416.979 416.979"
            >
              <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z">
              </path>
            </svg>
            {helpInformation && (
              <span class="tooltiptext">{helpInformation}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
