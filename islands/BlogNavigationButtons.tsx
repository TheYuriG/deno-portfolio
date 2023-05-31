//? Import LinkProperties to type what is required for the
//? optional "back" and "next" buttons
import { LinkProperties } from "../types/LinkProperties.ts";
//? Define optional properties for the buttons
interface BlogNavigationButtonProperties {
  back?: LinkProperties;
  next?: LinkProperties;
}

//? Exports Navigation Buttons to go to the previous page and next Article
export default function BlogNavigationButtons(
  { back, next }: BlogNavigationButtonProperties,
) {
  //? Creates a back button if a link is provided, otherwise
  //? renders an empty span
  const backButton = back
    ? (
      <a class="navigation-button" href={back.link} title={back.title}>
        <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
          <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
        </svg>
        Back
      </a>
    )
    : (
      <span style="width: 5rem;"></span> //? Empty span to center the Home button
    );

  //? Creates a next button if a link is provided, otherwise
  //? renders an empty span
  const nextButton = next
    ? (
      <a class="navigation-button" href={next.link} title={next.title}>
        Next
        <svg
          viewBox="0 0 32 32"
          class="icon icon-chevron-right"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </a>
    )
    : <span style="width: 5rem;"></span>; //? Empty span to center the Home button

  return (
    <>
      <nav style="display: flex; justify-content: space-between; width: 100%;">
        {/* Back button (if link provided) or empty span */}
        {backButton}
        {/* Home link */}
        <a class="navigation-button" href="/" title="Visit the Home page">
          Home
        </a>
        {/* Next button (if link provided) or empty span */}
        {nextButton}
      </nav>
    </>
  );
}
