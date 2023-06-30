//? Radio toggles for payment and delivery
import { StyledRadio } from "../../../components/UI/StyledRadio.tsx";
//? Payment Icons
import { PaypalIcon } from "../../../assets/PaypalIcon.tsx";
import { CreditCardIcon } from "../../../assets/CreditCardIcon.tsx";
//? Delivery Icon
import { DeliveryIcon } from "../../../assets/DeliveryIcon.tsx";
//? Confirmation button
import { StyledButton } from "../../../components/UI/StyledButton.tsx";

//? Instantiate default initial state for the cart
const starterCartState = {
  totalItems: 0,
  items: new Map<string, { quantity: number; cost: number }>(),
  cost: 0,
};

//? Define component properties
interface FoodOrderCheckoutPaymentFormProperties {
  cart: typeof starterCartState;
  paymentSelected: string;
  setPaymentSelected: (value: string) => void;
  updateCartContent: (value: undefined) => void;
  deliveryLocation: string;
  setDeliveryLocation: (value: string) => void;
}

//? Renders the checkout cart items
export function FoodOrderCheckoutPaymentForm(
  {
    cart,
    paymentSelected,
    setPaymentSelected,
    updateCartContent,
    deliveryLocation,
    setDeliveryLocation,
  }: FoodOrderCheckoutPaymentFormProperties,
) {
  return (
    <form class="flex flex-col w-full">
      {/* Payment options */}
      <div class="flex flex-row space-x-2 items-center">
        <StyledRadio
          label="Pay with"
          name="payment"
          optionsArray={["Paypal", "Credit Card"]}
          starterValue={paymentSelected}
          onChangeFunction={(option) => setPaymentSelected(option)}
        />
        <PaypalIcon
          iconHeight="1.5em"
          iconWidth="1.5em"
          iconFillColor={paymentSelected === "Paypal"
            ? "var(--accent-color)"
            : undefined}
        />
        <CreditCardIcon
          iconHeight="1.5em"
          iconWidth="1.5em"
          iconFillColor={paymentSelected === "Credit Card"
            ? "var(--accent-color)"
            : undefined}
        />
      </div>
      {/* Delivery location options */}
      <div class="flex flex-row space-x-2 items-center">
        <StyledRadio
          label="Send to"
          name="delivery"
          optionsArray={["Home", "Work"]}
          starterValue={deliveryLocation}
          onChangeFunction={(option) => setDeliveryLocation(option)}
        />
        <DeliveryIcon
          iconHeight="1.5em"
          iconWidth="1.5em"
        />
      </div>
      {/* Confirm order */}
      <StyledButton
        classes="self-end"
        text="Confirm payment"
        onClickFunction={() => {
          updateCartContent(undefined);
          localStorage.removeItem("food-order-cart");
          setTimeout(() => {
            window.location.href = "/projects/food-order/success?delivery=" +
              (new Date().getTime() + 20 * 60 * 1000);
          }, 3000);
        }}
      />
    </form>
  );
}
