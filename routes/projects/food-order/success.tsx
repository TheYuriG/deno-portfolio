//? Head component with all Meta tags pre-set
import { CustomHead } from "../../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page
import { NavigationButtons } from "../../../components/misc/NavigationButtons.tsx";
//? Delivery notice header
import { StyledHeader } from "../../../components/UI/StyledHeader.tsx";
//? Delivery truck SVG
import { DeliveryIcon } from "../../../assets/DeliveryIcon.tsx";
//? Delivery timer countdown
import DigitalTimer from "../../../islands/UI/DigitalTimer.tsx";
//? Middleware responsible for taking the query from the URL
import { foodOrderSuccessMiddleware } from "../../../middleware/projects/__food-order-success.tsx";

export const handler = foodOrderSuccessMiddleware;

//? Renders the food-order checkout page
export default function Home({ data: deliveryTimestamp }: { data: string }) {
  return (
    <>
      {/* Base Head with all common required imports */}
      <CustomHead
        title="Checkout - Food order"
        description="Complete your order to have it sent to your address."
        link="https://www.theyurig.com/projects/food-order/checkout"
      >
        <link rel="stylesheet" href="/digital-clock.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{
            title: "Order again?",
            link: "/projects/food-order",
          }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Order delivery notice */}
          <StyledHeader title="Your order is on the way!" />
          {/* Delivery truck icon */}
          <DeliveryIcon
            iconHeight="10em"
            iconWidth="10em"
            iconFillColor="var(--accent-color)"
          />
          {/* Estimated time until delivery */}
          <DigitalTimer
            preppendedText="Time until estimated arrival: "
            expiresAt={Number(deliveryTimestamp)}
            expiredText="Did you receive your meal?"
          />
        </section>
      </Base>
    </>
  );
}
