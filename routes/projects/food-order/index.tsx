//? To know what is the current route
import { Handlers } from "$fresh/server.ts";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page
import { NavigationButtons } from "../../../components/misc/NavigationButtons.tsx";
//? Component responsible for rendering the food list and modals
import FoodOrder from "../../../islands/projects/FoodOrder.tsx";
//? Import Food type to typecast the data received
import { Food } from "../../../types/component-properties/projects/food-order/Food.ts";
//? Import middleware responsible for pulling food items
import { foodOrderMiddleware } from "../../../middleware/projects/__food-order.ts";

//? Runs before the render function to fetch the food from the
//? database, then pushes the data into the rendered page function
export const handler: Handlers = foodOrderMiddleware;

//? Renders the food-order page, with a list of items and a cart
export default function Home(
  { data: foods }: { data: Food[] },
) {
  return (
    <>
      {
        /* Base Head with all common required imports, plus added
        meta-tags and imports required for this specific route */
      }
      <CustomHead
        title="Food order"
        description="Order your favorite food in our theorical restaurant and feast upon the delicious pixels!"
        link="https://www.theyurig.com/projects/food-order"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{ title: "Return to projects overview", link: "/projects" }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Page content */}
          <FoodOrder foods={foods} />
        </section>
      </Base>
    </>
  );
}
