//? Import LinkProperties to type what is required for the
//? optional "back" and "next" buttons
import ChevronIcon from "../../assets/ChevronIcon.tsx";
import { LinkProperties } from "../../types/LinkProperties.ts";
//? Define optional properties for the buttons
interface BlogNavigationButtonProperties {
  back?: LinkProperties;
  next?: LinkProperties;
}

//? Reused classes for all navigation buttons
const navigationClasses = "group flex items-center text-xl hover:tx-ac tr-tx";

//? Exports Navigation Buttons to go to the previous page and next Article
export default function BlogNavigationButtons(
  { back, next }: BlogNavigationButtonProperties,
) {
  //? Creates a back button if a link is provided, otherwise
  //? renders an empty span
  const backButton = back
    ? (
      <a
        class={navigationClasses}
        href={back.link}
        title={back.title}
      >
        <ChevronIcon iconHeight="1.8em" iconWidth="1.5em" rotation="0" />
        Back
      </a>
    )
    : (
      <span class="w-20"></span> //? Empty span to center the Home button
    );

  //? Creates a next button if a link is provided, otherwise
  //? renders an empty span
  const nextButton = next
    ? (
      <a
        class={navigationClasses}
        href={next.link}
        title={next.title}
      >
        Next
        <ChevronIcon iconHeight="1.8em" iconWidth="1.5em" rotation="180" />
      </a>
    )
    : <span class="w-20"></span>; //? Empty span to center the Home button

  return (
    <>
      <nav class="flex justify-between w-full">
        {/* Back button (if link provided) or empty span */}
        {backButton}
        {/* Home link */}
        <a
          class={navigationClasses}
          href="/"
          title="Visit the Home page"
        >
          Home
        </a>
        {/* Next button (if link provided) or empty span */}
        {nextButton}
      </nav>
    </>
  );
}
