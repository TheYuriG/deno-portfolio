//? Head component with all Meta tags pre-set
import { CustomHead } from "../../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page
import { BlogNavigationButtons } from "../../../components/blog/BlogNavigationButtons.tsx";
//? Header to display page name
import { StyledHeader } from "../../../components/UI/StyledHeader.tsx";
import FoodOrderCheckout from "../../../islands/FoodOrderCheckout.tsx";

//? Renders the food-order checkout page
export default function Home() {
  return (
    <>
      {/* Base Head with all common required imports */}
      <CustomHead
        title="Checkout - Food order"
        description="Complete your order to have it sent to your address."
        link="https://www.theyurig.com/projects/food-order/checkout"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{
            title: "Add more items to your cart",
            link: "/projects/food-order",
          }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="Checkout" />
          <FoodOrderCheckout />
        </section>
      </Base>
    </>
  );
}
