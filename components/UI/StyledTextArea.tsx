interface StyledTextAreaProperties {
  //? Links text area to parent form
  name?: string;
  //? What should be displayed as label
  label?: string;
  //? String that links the textarea and the label
  labelLink: string;
  //? Additional classes to style the label
  labelClasses?: string;
  //? Value to display when no input is provided
  placeholder?: string;
  minHeight?: string;
  disabled?: true;
  //? Initial/current value for this input
  value?: string;
  //? Function that updates the input state when typing in the input field
  inputFunction?: (input: string) => void;
}

export function StyledTextArea(
  {
    name,
    label,
    labelLink,
    labelClasses = "",
    placeholder,
    minHeight = "20em",
    disabled,
    value = "",
    inputFunction,
  }: StyledTextAreaProperties,
) {
  return (
    <div class="flex flex-col w-full grow items-center">
      <label
        class={"flex w-max whitespace-nowrap " + labelClasses}
        htmlFor={labelLink}
      >
        {label}
      </label>
      <textarea
        class={`w-full min-h-[${minHeight}] p-2 custom-bg-bc custom-bo-ac custom-tx-nc custom-placeholder-nc custom-tr-tx-bg-bo rounded-2xl styled-scrollbar`}
        name={name}
        id={labelLink} //? Link to label
        disabled={disabled} //? Determines if
        //? Value to display when no input is provided
        placeholder={placeholder}
        //? Updates the value on typing
        onInput={(e) => {
          if (inputFunction !== undefined) {
            const { target } = e;
            if (target) {
              const changedValue = (target as HTMLTextAreaElement).value;
              inputFunction(changedValue);
            }
          }
        }}
      >
        {value}
      </textarea>
    </div>
  );
}
