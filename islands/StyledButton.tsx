//? Define button properties
interface ButtonProperties {
  text: string;
  style?: string;
  onClickFunction?: () => void;
}

//? This file holds the content to the default button used
//? throughout the application. It comes with default internal
//? spacing (padding) and coloring, but has no default margins
//! Style buttons on-demand by providing a optional style prop!
export default function StyledButton({
  text,
  style,
  onClickFunction,
}: ButtonProperties) {
  return (
    <button
      class="styled-button"
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
