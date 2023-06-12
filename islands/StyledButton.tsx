//? Define button properties
interface ButtonProperties {
  text: string;
  style?: string;
  classes?: string;
  onClickFunction?: () => void;
}

//? Styled button with animation on hover
//! Style buttons on-demand by providing a optional style prop!
export default function StyledButton({
  text,
  style,
  classes = "",
  onClickFunction,
}: ButtonProperties) {
  return (
    <button
      class={"w-max py-1.5 px-2.5 custom-button-st custom-tx-nc custom-bo-nc hover:(custom-tx-ac custom-bo-ac) custom-bg-bc rounded-xl " +
        classes}
      onClick={(event) => {
        event.preventDefault();
        if (onClickFunction) {
          onClickFunction();
        }
      }}
      style={style}
    >
      {text}
    </button>
  );
}
