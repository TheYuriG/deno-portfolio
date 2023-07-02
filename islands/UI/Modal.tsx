//? Import useEffect to control wether the scrolling should be enabled or not
import { useEffect } from "preact/hooks";
//? Control what is rendered as children
import { JSX } from "preact";

//? Define properties required for this component
interface ModalProperties {
  //? Wether this modal should be visible
  display: boolean;
  //? If enabled, clicking anywhere will disable the modal
  hideOnAnyClick?: true;
  //? Function controlling the modal disappearance
  closeModalFunction: () => void;
  //? What should be rendered on top of the overlay
  children: JSX.Element;
}

//? Creates and exports a modal that expands an image on top of
//? a tinted blurred overlay that covers the background
export default function Modal(
  { display, hideOnAnyClick, closeModalFunction, children }: ModalProperties,
) {
  //? Controls wether the page is scrollable or not.
  //? Scrolling is enabled by default, then disabled when the modal is displayed
  useEffect(() => {
    //? Toggles on and off on first load, then on again when the modal is
    //? enabled, then off again when the modal is disabled
    document.body.classList.toggle("overflow-hidden");
  }, [display]);

  //? If the display is false, return just JSX Fragment
  if (display === false) {
    return <></>;
  }

  //? If the display is true, display the overlay with the content provided

  return (
    <>
      <div
        key="modal"
        class="fixed z-10 left-0 top-0 w-[100dvw] h-[100dvh] backdrop-blur"
        style="background-color: rgba(0, 0, 0, 0.8);"
        onClick={closeModalFunction}
      >
        {
          /* If 'hideOnAnyClick' is true, nest the children inside overlay, so that
           clicking anywhere on the screen hides the modal */
        }
        {hideOnAnyClick && children}
      </div>
      {!hideOnAnyClick && children}
    </>
  );
}
