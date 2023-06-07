//? Import the StyledButton to close the modal on empty carts or
//? confirm orders on a filled cart
import StyledButton from "../../islands/StyledButton.tsx";

//? Define Cart Modal properties
interface CartModalProperties {
  closeModal: () => void;
  items: Map<string, { quantity: number; cost: number }>;
  cost: number;
}

//? Exports the content of the cart modal that will either display the
//? information about the cart being empty or a list with all cart items
export default function CartModal({
  closeModal,
  items,
  cost,
}: CartModalProperties) {
  //? If no items are in the cartContent, return a simple "empty cart" message
  if (cost === 0) {
    return (
      <div class="food-cart-content">
        <span class="food-cart-content__header">
          No items in your cart yet!
        </span>
        <StyledButton
          style="align-self: end;"
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
    <div class="food-cart-content">
      {/* Modal header */}
      <span class="food-cart-content__header">Items in cart</span>
      {/* List of items in cart */}
      <ol>
        {cartItems.map(([foodName, { quantity, cost }]) => (
          <li>{foodName}: {quantity}x ${cost.toFixed(2)}</li>
        ))}
      </ol>
      {/* Cart total cost */}
      <span class="food-cart-content__total">Total: ${cost.toFixed(2)}</span>
      {/* Row of buttons to close or complete the order */}
      <div class="food-cart-content__button-row">
        <button
          key="modal__add-more"
          onClick={closeModal}
          title="Close the modal"
        >
          Add more
        </button>
        <StyledButton
          style="margin-left: 1em;"
          key="modal__order"
          text="Order"
          onClickFunction={closeModal}
        />
      </div>
    </div>
  );
}
