//? To know what is the current route
import { Handlers } from "$fresh/server.ts";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../components/blog/BlogNavigationButtons.tsx";
import { FoodItem } from "../../components/food-order/FoodItem.tsx";
//? Describe things that were learned with this current project
import ProjectDiscovery from "../../islands/ProjectDiscovery.tsx";
//? Import Food type to typecast the data received
import type { Food } from "../../types/Food.ts";

//? Runs before the render function to fetch the food from the
//? database, then pushes the data into the rendered page function
// export const handler: Handlers = {
//   async GET(req, ctx) {
//     const expenses = await fetchExpenses();
//     if (expenses instanceof FetchExpenseError) {
//       return ctx.render([]);
//     }
//     return ctx.render(expenses);
//   },
// };

export default function Home(
  //   { data: savedExpenses }: { data: Expense[] },
) {
  const foods: Food[] = [{
    imageLink:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    name: "Full buffet meal",
    description:
      "Pork ribs, vegetables, beans and french fries with cheese. Food for 2.",
    price: "70",
    imageAlt: "",
    imageTitle: "",
    addToCartFunction: () => {},
  }];
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
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/form.css" />
        <link rel="stylesheet" href="/styled-button.css" />
        <link rel="stylesheet" href="/food-order.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to projects overview", link: "/projects" }}
        />
        <section class="center">
          <ProjectDiscovery
            innerText={[
              // first paragraph
              "Between the previous project (expenses tracker) and this one, there was an extended section about useContext and useRef, that was very interesting and helped solidify what I learned on the Preact tutorial. The things I've learned on that section are used in this project.",
            ]}
          />
          {/* <FoodCart /> */}
          <section class="card card-shadow food-group">
            {foods.map((food) => (
              <FoodItem
                imageLink={food.imageLink}
                imageAlt={food.imageAlt}
                imageTitle={food.imageTitle}
                name={food.name}
                description={food.description}
                price={food.price}
                addToCartFunction={food.addToCartFunction}
              />
            ))}
          </section>
        </section>
      </Base>
    </>
  );
}
