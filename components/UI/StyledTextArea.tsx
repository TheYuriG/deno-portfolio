interface StyledTextAreaProperties {
  name?: string;
  label?: string;
  labelLink: string;
  labelClasses?: string;
  placeholder?: string;
  minHeight?: string;
  disabled?: boolean;
  textContent?: string;
}

export function StyledTextArea(
  {
    name,
    label,
    labelLink,
    labelClasses = "",
    placeholder,
    minHeight = "20em",
    disabled = false,
    textContent = "",
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
        id={labelLink}
        disabled={disabled}
        placeholder={placeholder}
      >
        {textContent}
      </textarea>
    </div>
  );
}
