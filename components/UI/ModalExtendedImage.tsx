//? Define properties required for this component
interface ModalExtendedImageProperties {
  display: boolean;
  imageLink: string;
  closeModalFunction: () => void;
}

//? Creates and exports a modal that expands an image on top of
//? a tinted blurred overlay that covers the background
export function ModalExtendedImage(
  { display, imageLink, closeModalFunction }: ModalExtendedImageProperties,
) {
  //? If the display is false, return just JSX Fragment
  if (display === false) {
    return <></>;
  }

  //? If the display is true, display the overlay with the content provided
  return (
    <>
      <div
        key="image-modal"
        class="fixed z-10 left-0 top-0 w-[100dvw] h-[100dvh] backdrop-blur"
        style="background-color: rgba(0, 0, 0, 0.8);"
        onClick={closeModalFunction}
      >
        <img
          class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          src={imageLink}
          alt="Delicious food"
        />
      </div>
    </>
  );
}
