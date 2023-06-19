interface StyledTextAreaProperties {
  name?: string;
  id?: string;
  placeholder?: string;
  minHeight?: string;
  disabled?: boolean;
  textContent?: string;
}

export function StyledTextArea(
  {
    name,
    id,
    placeholder,
    minHeight = "20em",
    disabled = false,
    textContent = "",
  }: StyledTextAreaProperties,
) {
  return (
    <textarea
      class={`w-full min-h-[${minHeight}] p-2 custom-bg-bc custom-bo-ac custom-tx-nc custom-placeholder-nc custom-tr-tx-bg-bo rounded-2xl styled-scrollbar`}
      name={name}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
    >
      {textContent}
    </textarea>
  );
}
