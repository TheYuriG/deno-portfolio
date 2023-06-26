//? Import from Preact to be able to change state
import { useEffect, useRef, useState } from "preact/hooks";
import { StyledButton } from "../components/UI/StyledButton.tsx";

//? Instantiate default initial state for the cart
const starterCartState = {
  totalItems: 0,
  items: new Map<string, { quantity: number; cost: number }>(),
  cost: 0,
};

//? Renders the card with all food options and the header with the cart
export default function FoodOrderCheckout() {
  //? Manages what items are currently in a cart and the overall cart price
  const [cartContent, updateCartContent] = useState({
    ...starterCartState,
  });

  //? Manages the cart content being persisted locally
  useEffect(() => {
    //   localStorage.removeItem("food-order-cart");

    const storedCart = localStorage.getItem("food-order-cart");

    //? If a cart exists, override the current cart on state with the localStorage cart
    if (storedCart !== null) {
      const parsedCart: typeof starterCartState = JSON.parse(storedCart);
      updateCartContent(() => ({
        ...parsedCart,
        items: new Map(parsedCart.items),
      }));
      return;
    }
  }, []);

  return (
    <section class="flex flex-col p-4 w-[40em] max-w-full custom-bo-ac custom-tr-h rounded-2xl">
      {/* List of items in cart */}
      <ol class="overflow-auto h-48 styled-scrollbar">
        {[...cartContent.items].map(([foodName, { quantity, cost }]) => (
          <li class="flex flex-col">
            {/* Food item name, remove item from cart */}
            <div class="flex justify-between items-center pr-1.5">
              {/* Cart item name */}
              <h3 class="text-xl">
                {foodName}
              </h3>
              <span class="ml-4">
                {quantity}x ${cost.toFixed(2)}
              </span>
            </div>
            {/* Divider */}
            <hr class="my-2 custom-bo-nc border" />
          </li>
        ))}
      </ol>
      <StyledButton
        classes="self-end"
        text="Confirm payment"
        onClickFunction={() => {}}
      />
    </section>
  );
}
