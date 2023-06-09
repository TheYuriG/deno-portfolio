//? Import the StyledButton to enable users to add the current FoodItem to the cart
import MealIcon from "../../assets/MealIcon.tsx";
import StyledButton from "../../islands/StyledButton.tsx";
//? Import Food type to typecast the data received
import type { Food } from "../../types/Food.ts";

//? Renders a single FoodItem with image, name, description and button to add to Cart
export function FoodItem(
  {
    imageLink,
    imageAlt,
    imageTitle,
    name,
    description,
    feedsHowMany,
    price,
    addToCartFunction,
    expandImageFunction,
  }: Food & {
    addToCartFunction: () => void;
    expandImageFunction: (imageLink: string) => void;
  },
) {
  return (
    //? Whole card
    <div class="card single-food">
      {/* Food image */}
      <img
        class="food-image hover:cursor-pointer"
        src={imageLink}
        alt={imageAlt}
        title={imageTitle}
        onClick={() => expandImageFunction(imageLink)}
      />
      {/* Column with food name + how many it feeds and food description */}
      <div class="food-name-and-description">
        {/* Food name + how many it feeds */}
        <div class="food-name">
          {name} {/* How many it feeds icon + count */}
          <span
            class="food-for-how-many"
            title={"Feeds " + feedsHowMany}
          >
            {/* Knife and Fork icon */}
            <MealIcon iconHeight="1.3em" iconWidth="1.3em" />
            {/* Number of people that this meal can feed */}
            {feedsHowMany}
          </span>
        </div>
        {/* Food description */}
        <span class="food-description">{description}</span>
      </div>
      {/* Button to add to cart */}
      <StyledButton
        style="flex-shrink: 0;"
        text={"Add for $" + price.toFixed(2)}
        onClickFunction={addToCartFunction}
      />
    </div>
  );
}
