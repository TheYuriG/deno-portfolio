import StyledButton from "../../islands/StyledButton.tsx";
//? Import Food type to typecast the data received
import type { Food } from "../../types/Food.ts";

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
  }: Food & { addToCartFunction: () => void },
) {
  return (
    //? Whole card
    <div class="card single-food">
      {/* Food image */}
      <img
        class="food-image"
        src={imageLink}
        alt={imageAlt}
        title={imageTitle}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 3a1 1 0 0 1 .993.883L19 4v16a1 1 0 0 1-1.993.117L17 20v-5h-1a1 1 0 0 1-.993-.883L15 14V8c0-2.21 1.5-5 3-5Zm-6 0a1 1 0 0 1 .993.883L13 4v5a4.002 4.002 0 0 1-3 3.874V20a1 1 0 0 1-1.993.117L8 20v-7.126a4.002 4.002 0 0 1-2.995-3.668L5 9V4a1 1 0 0 1 1.993-.117L7 4v5a2 2 0 0 0 1 1.732V4a1 1 0 0 1 1.993-.117L10 4l.001 6.732a2 2 0 0 0 .992-1.563L11 9V4a1 1 0 0 1 1-1Z"
              />
            </svg>
            {feedsHowMany}
          </span>
        </div>
        {/* Food description */}
        <span class="food-description">{description}</span>
      </div>
      {/* Button to add to cart */}
      <StyledButton
        style="flex-shrink: 0;"
        text={"Add: $" + price.toFixed(2)}
        onClickFunction={addToCartFunction}
      />
    </div>
  );
}
