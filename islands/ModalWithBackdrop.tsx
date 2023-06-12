//? Import Preact JSX so we can define the props.children type
import { JSX } from "preact";

//? Define properties required for this component
interface ModalWithBackdropProperties {
  display: boolean;
  children: JSX.Element;
  closeModalFunction: () => void;
}

//? Creates and exports a modal on top of a tinted blurred overlay that covers the background
export default function ModalWithBackdrop(
  { display, children, closeModalFunction }: ModalWithBackdropProperties,
) {
  //? If the display is false, return just JSX Fragment
  if (display === false) {
    return <></>;
  }

  //? If the display is true, display the overlay with the content provided
  return (
    <>
      <div class="backdrop-overlay" onClick={closeModalFunction}>
      </div>
      <div class="custom-bo-nc rounded-xl py-2 px-4 custom-sh-nc modal">
        {children}
      </div>
    </>
  );
}
