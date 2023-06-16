//? Import Preact JSX so we can define the props.children type
import { JSX } from "preact";

//? Define properties required for this component
interface ModalWithBackdropProperties {
  display: boolean;
  children: JSX.Element;
  closeModalFunction: () => void;
}

//? Creates and exports a modal on top of a tinted blurred overlay that covers the background
export function ModalWithBackdrop(
  { display, children, closeModalFunction }: ModalWithBackdropProperties,
) {
  //? If the display is false, return just JSX Fragment
  if (display === false) {
    return <></>;
  }

  //? If the display is true, display the overlay with the content provided
  return (
    <>
      <div
        key="content-modal"
        class="fixed z-10 left-0 top-0 w-[100dvw] h-[100dvh] backdrop-blur"
        style="background-color: rgba(0, 0, 0, 0.4)"
        onClick={closeModalFunction}
      >
      </div>
      <div class="fixed z-20 top-1/2 left-1/2 min-w-[50dvw] max-w-[80dvw] custom-bo-nc rounded-xl py-2 px-4 custom-sh-nc custom-bg-bc transform-center">
        {children}
      </div>
    </>
  );
}
