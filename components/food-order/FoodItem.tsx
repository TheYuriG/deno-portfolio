//? Import meal icon to mark how many people a meal can feed
import MealIcon from "../../assets/MealIcon.tsx";
//? Import the StyledButton to enable users to add the current FoodItem to the cart
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
    <div class="custom-bo-nc rounded-xl mt-2 flex flex-col sm:flex-row  items-center min-h-32 w-full pb-4 sm:pb-0 sm:pr-2 custom-bg-bc overflow-hidden custom-tr-txbgbo">
      {/* Food image */}
      <img
        class="max-h-60 sm:h-32 sm:w-40 object-cover flex-shrink-0 hover:cursor-pointer"
        src={imageLink}
        alt={imageAlt}
        title={imageTitle}
        onClick={() => expandImageFunction(imageLink)}
      />
      {/* Column with food name + how many it feeds and food description */}
      <div class="flex flex-col flex-grow w-full text-center sm:text-left m-2 sm:my-0 sm:mx-2">
        {/* Food name + how many it feeds */}
        <div class="flex items-center justify-center sm:justify-start text-3xl f-as">
          {name} {/* How many it feeds icon + count */}
          <span
            class="flex items-center text-2xl space-x-0.5"
            title={"Feeds " + feedsHowMany}
          >
            {/* Knife and Fork icon */}
            <MealIcon iconHeight="1.3em" iconWidth="1.3em" />
            {/* Number of people that this meal can feed */}
            <span>
              {feedsHowMany}
            </span>
          </span>
        </div>
        {/* Food description */}
        <span class="text-sm">{description}</span>
      </div>
      {/* Button to add to cart */}
      <StyledButton
        classes="flex-shrink-0"
        text={"Add for $" + price.toFixed(2)}
        onClickFunction={addToCartFunction}
      />
    </div>
  );
}
