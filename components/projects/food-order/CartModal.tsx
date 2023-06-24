//? Default styled header
import { StyledSubHeader } from "../../../components/UI/StyledSubHeader.tsx";
//? Import the StyledButton to close the modal on empty carts or
//? confirm orders on a filled cart
import { MinusIcon } from "../../../assets/MinusIcon.tsx";
import { PlusIcon } from "../../../assets/PlusIcon.tsx";
import { XMarkIcon } from "../../../assets/XMarkIcon.tsx";
import { StyledButton } from "../../UI/StyledButton.tsx";
//? Import the functions that will update the Cart state
import {
  deleteItemFromCart,
  increaseCartItemByOne,
  reduceCartItemByOne,
} from "../../../services/food-order/updateFoodOrder.ts";
//? Import types for typecasting
import type { foodCartItemsMap } from "../../../types/food-order/foodCartItemsMap.ts";
import type { updateCartFunction } from "../../../types/food-order/updateCartFunction.ts";

//? Define Cart Modal properties
interface CartModalProperties {
  closeModal: () => void;
  updateCartFunction: updateCartFunction;
  items: foodCartItemsMap;
  cost: number;
}

//? Exports the content of the cart modal that will either display the
//? information about the cart being empty or a list with all cart items
export default function CartModal({
  closeModal,
  updateCartFunction,
  items,
  cost,
}: CartModalProperties) {
  //? If no items are in the cartContent, return a simple "empty cart" message
  if (items.size === 0) {
    return (
      <div class="flex flex-col w-full p-3">
        <span class="text-bold my-2 text-center text-3xl f-as">
          No items in your cart yet!
        </span>
        <StyledButton
          classes="self-end"
          text="Close"
          onClickFunction={closeModal}
        />
      </div>
    );
  }

  //? Destructure the cart items to render them one by one in a list
  const cartItems = [...items];

  //? Return the cart items and the total
  return (
    <div class="flex flex-col p-3 w-fit max-w-[90dvw] max-h-[90dvh]">
      {/* Modal header */}
      <StyledSubHeader title="Cart items" />
      {/* List of items in cart */}
      <ol class="overflow-auto styled-scrollbar">
        {cartItems.map(([foodName, { quantity, cost }]) => (
          <li class="flex flex-col">
            {/* Food item name, remove item from cart */}
            <div class="flex justify-between min-w-max items-center pr-1.5">
              {/* Cart item name */}
              <h3 class="text-xl">
                {foodName}
              </h3>
              {/* Remove item completely from cart */}
              <span
                class="hover:cursor-pointer select-none"
                onClick={() => {
                  deleteItemFromCart({
                    foodName,
                    foodQuantity: quantity,
                    foodCost: cost,
                    updateCartFunction,
                  });
                }}
              >
                {/* XMark SVG */}
                <XMarkIcon
                  iconHeight="1.5em"
                  iconWidth="1.5em"
                  iconFillColor="red"
                  iconStrokeColor="var(--neutral-color)"
                  iconStrokeWidth="30"
                />
              </span>
            </div>
            {/* Food item count, update cart item count */}
            <div class="mt-2 inline-flex items-center self-end pr-1 select-none">
              {/* Decrease item count. If last item, remove it from the cart */}
              <span
                class="mr-2 hover:cursor-pointer"
                onClick={() => {
                  reduceCartItemByOne({
                    foodName,
                    foodCost: cost,
                    updateCartFunction,
                  });
                }}
              >
                {/* Minus sign SVG */}
                <MinusIcon iconHeight="1.5em" iconWidth="1.5em" />
              </span>
              <span class="text-center">
                {quantity}x ${cost.toFixed(2)}
              </span>
              {/* Increase item count */}
              <span
                class="ml-2 hover:cursor-pointer"
                onClick={() => {
                  increaseCartItemByOne({
                    foodName,
                    foodCost: cost,
                    updateCartFunction,
                  });
                }}
              >
                {/* Plus sign SVG */}
                <PlusIcon iconHeight="1.5em" iconWidth="1.5em" />
              </span>
            </div>
            {/* Divider */}
            <hr class="my-2 custom-bo-nc border" />
          </li>
        ))}
      </ol>
      {/* Cart total cost */}
      <span class="my-2 text-xl text-bold text-right">
        Total: ${cost.toFixed(2)}
      </span>
      {/* Row of buttons to close or complete the order */}
      <div class="flex self-end">
        <button
          class="hover:pointer"
          key="modal__add-more"
          onClick={closeModal}
          title="Close the modal"
        >
          Add more
        </button>
        {/* Removed until when/if we add the order feature */}
        {
          /* <StyledButton
          classes="ml-4"
          text="Order"
          onClickFunction={closeModal}
        /> */
        }
      </div>
    </div>
  );
}
