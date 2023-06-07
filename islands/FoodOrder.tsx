//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Import Food type to typecast the data received
import type { Food } from "../types/Food.ts";
//todo
import { FoodItem } from "../components/food-order/FoodItem.tsx";
//todo
import ModalWithBackdrop from "./ModalWithBackdrop.tsx";
//todo
import CartButton from "../components/food-order/CartButton.tsx";
import CartModal from "../components/food-order/CartModal.tsx";

//? Define properties required for this component
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
      {/* Cart modal with currently selected food items, if any */}
      <ModalWithBackdrop
        display={displayModal}
        closeModalFunction={() => toggleDisplayModal(false)}
      >
        <CartModal
          items={cartContent.items}
          cost={cartContent.cost}
          closeModal={() => toggleDisplayModal(false)}
        />
      </ModalWithBackdrop>
      {/* Header with cart */}
      <div class="food-header">
        <h2 class="subtopic">Meals of the day</h2>
        <CartButton
          openModal={() => toggleDisplayModal(true)}
          totalItems={cartContent.totalItems}
          cost={cartContent.cost}
        />
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
