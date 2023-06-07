//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Import Food type to typecast the data received
import type { Food } from "../types/Food.ts";
//? Renders invidual food items on the page
import { FoodItem } from "../components/food-order/FoodItem.tsx";
//? Creates a modal with a shaded/blurred backdrop over the content behind it
import ModalWithBackdrop from "./ModalWithBackdrop.tsx";
//? Cart Button that opens the current Cart as a Modal
import CartButton from "../components/food-order/CartButton.tsx";
//? Content of the current Cart in a modal for the user to view Cart Items
import CartModal from "../components/food-order/CartModal.tsx";
//? Import accent button to create the Order now! button at the bottom
import AccentButton from "./AccentButton.tsx";

//? Define properties required for this component
interface FoodOrderProperties {
  foods: Food[];
}

//? Renders the card with all food options and the header with the cart
export default function FoodOrder({ foods }: FoodOrderProperties) {
  //? Manages what items are currently in a cart and the overall cart price
  const [cartContent, updateCartContent] = useState({
    totalItems: 0,
    items: new Map(),
    cost: 0,
  });
  //? Manages if the modal should be toggled on or off
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
          updateCartFunction={updateCartContent}
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
      {/* List of individual food options */}
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
      {cartContent.totalItems > 0
        ? (
          <AccentButton
            style="align-self: end; margin: 0.5em 1em;"
            onClickFunction={() => toggleDisplayModal(true)}
          >
            View order
          </AccentButton>
        )
        : <></>}
      {/* //todo Add the loading spinner to the modal when completing the order */}
      {/* //todo disable clicking out of the modal when submitted */}
    </section>
  );
}
