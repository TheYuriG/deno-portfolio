//? Define button properties
interface ButtonProperties {
  text: string;
  style?: string;
  onClickFunction?: () => void;
}

//? Styled button with animation on hover
//! Style buttons on-demand by providing a optional style prop!
export default function StyledButton({
  text,
  style,
  onClickFunction,
}: ButtonProperties) {
  return (
    <button
      class="styled-button tr-txbgbo"
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
