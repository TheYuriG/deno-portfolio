//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Import Food type to typecast the data received
import type { Food } from "../types/Food.ts";
//todo
import { FoodItem } from "../components/food-order/FoodItem.tsx";
//todo
import ModalWithBackdrop from "./ModalWithBackdrop.tsx";

//todo
interface FoodOrderProperties {
  foods: Food[];
}

//todo
export default function FoodOrder({ foods }: FoodOrderProperties) {
  //todo
  const [cartContent, updateCartContent] = useState({
    totalItems: 0,
    items: new Map(),
    cost: 0,
  });
  //todo
  const [displayModal, toggleDisplayModal] = useState(false);

  return (
    <section class="food-group">
      <ModalWithBackdrop
        key="backdrop-modal"
        display={displayModal}
        closeModalFunction={() => toggleDisplayModal(false)}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          magnam maiores ad ipsum, architecto corporis. Voluptas totam nostrum
          doloribus, voluptate quod voluptatum, cum necessitatibus atque quos
          architecto beatae, perspiciatis porro!
        </div>
      </ModalWithBackdrop>
      {/* Header with cart */}
      <div class="food-header">
        <h2 class="subtopic">Meals of the day</h2>
        {/* <CartButton /> */}
        <button
          class="food-cart styled-button"
          onClick={() => toggleDisplayModal(true)}
        >
          <span class="cart-total-items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="var(--neutral-color)"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            {cartContent.totalItems}
          </span>
          <span>${cartContent.cost.toFixed(2)}</span>
        </button>
      </div>
      {/* List of invidual food options */}
      {foods.map((food) => (
        <FoodItem
          {
            //? Add all food properties
            ...food
          }
          //? Add the clicked food to the cart
          addToCartFunction={() => {
            //? Update the cart with the food clicked
            updateCartContent((curr) => {
              //? Instantiate a new cart with the updated information
              const newCart = {
                totalItems: ++curr.totalItems,
                items: curr.items,
                cost: curr.cost + food.price,
              };

              //? Attempt to fetch existing cart data for this food
              const currentCartItems:
                | undefined
                | Record<string, number> = newCart.items.get(
                  food.name,
                );

              //? If the clicked food is already in the cart,
              //? increase the quantity in the cart
              if (currentCartItems !== undefined) {
                newCart.items.set(food.name, {
                  quantity: currentCartItems.quantity + 1,
                  cost: food.price,
                });
              } //? If the clicked food isn't in the cart yet, add one
              else {
                newCart.items.set(food.name, {
                  quantity: 1,
                  cost: food.price,
                });
              }

              //? Return the updated cart
              return newCart;
            });
          }}
        />
      ))}
    </section>
  );
}
