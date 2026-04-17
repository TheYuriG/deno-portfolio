//? Import LinkProperties to type what is required for the
//? optional "back" and "next" buttons
import { ChevronIcon } from "../../assets/ChevronIcon.tsx";
import { LinkProperties } from "../../types/component-properties/LinkProperties.ts";
//? Define optional properties for the buttons
interface NavigationButtonsProperties {
  back?: LinkProperties;
  menu?: LinkProperties & { text?: string };
  next?: LinkProperties;
}

//? Reused classes for all navigation buttons
const navigationClasses =
  "group flex items-center text-xl hover:custom-tx-ac custom-tr-tx";

//? Exports Navigation Buttons to go to the previous page and next Article
export function NavigationButtons(
  { back, menu, next }: NavigationButtonsProperties,
) {
  //? Creates a back button if a link is provided, otherwise
  //? renders an empty span
  const backButton = back
    ? <a
      class={"w-20 " + navigationClasses}
      href={back.link}
      title={back.title}
    >
      <ChevronIcon iconHeight="1.8em" iconWidth="1.5em" rotation="0" />
      Back
    </a> : <span class="w-20"></span> //? Empty span to center the Home button

  //? Creates a next button if a link is provided, otherwise
  //? renders an empty span
  const nextButton = next
    ? <a
      class={"w-20 " + navigationClasses}
      href={next.link}
      title={next.title}
    >
      Next
      <ChevronIcon iconHeight="1.8em" iconWidth="1.5em" rotation="180" />
    </a> : <span class="w-20"></span>; //? Empty span to center the Home button

  const menuButton = menu ?
    <a
      class="text-xl "
      href={menu.link}
      title={menu.title}
    >{menu.text ?? "Home"}</a> :
    <a
      class={navigationClasses + " text-center"}
      href="/"
      title="Visit the Home page"
    >Home</a>

  return (
    <>
      <nav class="flex justify-between w-full">
        {backButton}
        {menuButton}
        {nextButton}
      </nav>
    </>
  );
}
