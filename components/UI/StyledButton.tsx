//? Define button properties
interface ButtonProperties {
  text: string;
  style?: string;
  classes?: string;
  shouldSubmit?: true;
  onClickFunction?: () => void;
}

//? Styled button with animation on hover
//! Style buttons on-demand by providing a optional style prop!
export function StyledButton({
  text,
  style,
  classes = "",
  shouldSubmit, //* tracks if this is a button that submits form data
  onClickFunction,
}: ButtonProperties) {
  return (
    <button
      //? Submit the form?
      type={shouldSubmit === true ? "submit" : "button"}
      //? Apply default styling classes + additional classes, if provided
      class={"py-1.5 px-2.5 custom-button-st custom-bo-nc hover:text-(--accent-color) hover:border-(--accent-color) rounded-xl " +
        classes}
      //? Apply additional styling, if provided
      style={style}
      //? Submit form or handle the button in another way
      onClick={(event) => {
        //? For true form buttons, don't supress the default event and actually post the form
        if (shouldSubmit !== true) {
          event.preventDefault();
        }
        if (onClickFunction) {
          onClickFunction();
        }
      }}
    >
      {text}
    </button>
  );
}
