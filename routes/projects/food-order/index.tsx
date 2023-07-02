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
//? Describe things that were learned with this current project
import Collapsible from "../../../islands/misc/Collapsible.tsx";
//? Import Food type to typecast the data received
import type { Food } from "../../../types/food-order/Food.ts";
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
          {/* Insights */}
          <Collapsible
            checkboxText="What did I learn?"
            innerText={[
              // first paragraph
              "Between the previous project (expenses tracker) and this one, there was an extended section about 'useContext' and 'useRef', that was very interesting and helped solidify what I learned on the Preact tutorial. The things I've learned on that section are used in this project.",
              // second paragraph
              "I've also realized that this design looks very similar to the previous project, which just reminded me about how little creativity I have to design things and that designers are important. I could have just copied and pasted the styling from the course, but then this project would not fit in the overall theme for my website.",
              // third paragraph
              "However, since this project could become an actual freelance gig (there are plenty of business owners needing a website), I might just make a mockup website and put it on my Work page. I'll check with my designer if she can come up with something pretty.",
              // fourth paragraph
              "This section also made me look up how to create a modal in React (I've previously only made them with pure JS and in Vue), so that was a fun component to build and that I'll be reusing quite a few times.",
            ]}
          />
          {/* Page content */}
          <FoodOrder foods={foods} />
        </section>
      </Base>
    </>
  );
}
