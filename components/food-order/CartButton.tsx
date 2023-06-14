import CartIcon from "../../assets/CartIcon.tsx";
import AccentButton from "../UI/AccentButton.tsx";

//? Define Cart Button properties
interface CartButtonProperties {
  pulseState: boolean;
  openModal: () => void;
  totalItems: number;
  cost: number;
}

//? Renders a cart button that will open the cart modal
export default function CartButton({
  pulseState,
  openModal,
  totalItems,
  cost,
}: CartButtonProperties) {
  return (
    <AccentButton
      //? Adds the pulsing animation when a food item is added
      classes={pulseState ? "animate-pulsing-cart" : ""}
      onClickFunction={openModal}
    >
      <span class="flex items-center mr-4 space-x-1">
        {
          /* This is here to circumvent an issue with Islands not being able to
          render an array of children */
        }
        {CartIcon({ iconHeight: "1em", iconWidth: "1em" })}
        <span>
          {totalItems}
        </span>
      </span>
      <span>${cost.toFixed(2)}</span>
    </AccentButton>
  );
}
