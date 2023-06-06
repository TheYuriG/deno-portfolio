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
    price,
    addToCartFunction,
  }: Food,
) {
  return (
    <div class="card single-food">
      <img
        class="food-image"
        src={imageLink}
        alt={imageAlt}
        title={imageTitle}
      />
      <div class="food-name-and-description">
        <span class="food-name">{name}</span>
        <span class="food-description">{description}</span>
      </div>
      <StyledButton
        text={"Buy now: $" + price}
        onClickFunction={addToCartFunction}
      />
    </div>
  );
}
