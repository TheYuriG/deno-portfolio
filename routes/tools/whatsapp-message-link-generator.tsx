//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create tools content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the tools page
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
import WhatsappLinkGenerator from "../../islands/WhatsappLinkGenerator.tsx";

//? Renders the food-order page, with a list of items and a cart
export default function Home() {
  return (
    <>
      {
        /* Base Head with all common required imports, plus added
        meta-tags and imports required for this specific route */
      }
      <CustomHead
        title="Whatsapp Message Link Generator"
        description="Create a link to message someone on whatsapp. Set a default message, batch create dozens of links and more."
        link="https://www.theyurig.com/projects/whatsapp-message-link-generator"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{ title: "Return to tools", link: "/tools" }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Link generator */}
          <StyledHeader title="Whatsapp Message Link Generator" />
          <WhatsappLinkGenerator />
        </section>
      </Base>
    </>
  );
}
