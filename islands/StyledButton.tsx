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
      class="py-1.5 px-2.5 bu-st tx-nc bo-nc hover:(tx-ac bo-ac) bg-bc rounded-xl"
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
