//? Import from Preact to manage state
import { useEffect, useState } from "preact/hooks";
//? Loading animation while cart is being loaded or request is being processed
import { LoadingAnimation } from "../../../assets/LoadingAnimation.tsx";
//? Brief summary of cart items
import { FoodOrderCheckoutItemsList } from "../../../components/projects/food-order/FoodOrderCheckoutItemsList.tsx";
//? Form to pick payment method
import { FoodOrderCheckoutPaymentForm } from "../../../components/projects/food-order/FoodOrderCheckoutPaymentForm.tsx";

//? Instantiate default initial state for the cart
const starterCartState = {
  totalItems: 0,
  items: new Map<string, { quantity: number; cost: number }>(),
  cost: 0,
};

//? Renders the card with all food options and the header with the cart
export default function FoodOrderCheckout() {
  //? Manages what items are currently in a cart and the overall cart price
  const [cartContent, updateCartContent] = useState<
    typeof starterCartState | undefined
  >();
  const [paymentSelected, setPaymentSelected] = useState("Paypal");
  const [deliveryLocation, setDeliveryLocation] = useState("Home");

  //? Manages the cart content being persisted locally
  useEffect(() => {
    //? Pull the cart, if saved
    const storedCart = localStorage.getItem("food-order-cart");

    //? If there is no cart, move back to food order page
    if (storedCart === null) {
      history.back();
      return;
    }

    //? If a cart exists, override the current cart on state with the localStorage cart
    const parsedCart: typeof starterCartState = JSON.parse(storedCart);
    setTimeout(() => {
      updateCartContent(() => ({
        ...parsedCart,
        items: new Map(parsedCart.items),
      }));
    }, 1500);
    return;
  }, []);

  const isThereACart = typeof cartContent === "undefined";

  return (
    <section
      key="checkout-items-list"
      class="flex flex-col items-center p-4 w-[50em] max-w-full custom-bo-ac rounded-2xl"
    >
      {/* Loading */}
      {isThereACart && (
        <LoadingAnimation
          iconHeight="5em"
          iconWidth="5em"
          iconStrokeColor="var(--accent-color)"
        />
      )}
      {/* List of items in cart */}
      {!isThereACart && (
        <>
          {/* List of items */}
          <FoodOrderCheckoutItemsList cartItems={[...cartContent.items]} />
          {/* Total items and cost */}
          <div class="flex w-full justify-between my-2">
            <span class="text-bold">
              Items: {cartContent.totalItems}
            </span>
            <span class="font-bold">
              Total: ${cartContent.cost}
            </span>
          </div>
          {/* Confirmation form */}
          <FoodOrderCheckoutPaymentForm
            cart={cartContent}
            paymentSelected={paymentSelected}
            setPaymentSelected={setPaymentSelected}
            updateCartContent={updateCartContent}
            deliveryLocation={deliveryLocation}
            setDeliveryLocation={setDeliveryLocation}
          />
        </>
      )}
    </section>
  );
}
