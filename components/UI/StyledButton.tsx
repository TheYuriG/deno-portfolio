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
      type={shouldSubmit === true ? "submit" : undefined}
      //? Apply default styling classes + additional classes, if provided
      class={"w-max py-1.5 px-2.5 custom-button-st custom-tx-nc custom-bo-nc hover:(custom-tx-ac custom-bo-ac) custom-bg-bc rounded-xl " +
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
