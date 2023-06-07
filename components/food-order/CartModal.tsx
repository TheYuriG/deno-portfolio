//? Import the StyledButton to close the modal on empty carts or
//? confirm orders on a filled cart
import StyledButton from "../../islands/StyledButton.tsx";
//
import { StateUpdater } from "preact/hooks";

//? Define Cart Modal properties
interface CartModalProperties {
  closeModal: () => void;
  updateCartFunction: StateUpdater<
    {
      totalItems: number;
      items: Map<string, { quantity: number; cost: number }>;
      cost: number;
    }
  >;
  items: Map<string, { quantity: number; cost: number }>;
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
          <li>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>
                {foodName}: {quantity}x ${cost.toFixed(2)}
              </span>
              <div style="display: inline-flex;">
                {/* Increase item count */}
                <span
                  style="margin-left: 0.5em"
                  onClick={() => {
                    updateCartFunction((curr) => {
                      const updatedCart = { ...curr };
                      ++updatedCart.totalItems;
                      updatedCart.cost += cost;
                      const increasedCountItem = updatedCart.items.get(
                        foodName,
                      );
                      if (increasedCountItem !== undefined) {
                        increasedCountItem.quantity += 1;
                        updatedCart.items.set(
                          foodName,
                          increasedCountItem,
                        );
                      }
                      return updatedCart;
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    fill="var(--neutral-color)"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </span>
                {/* Remove item */}
                <span
                  style="margin-left: 0.5em"
                  onClick={() => {
                    updateCartFunction((curr) => {
                      const updatedCart = { ...curr };
                      updatedCart.totalItems -= quantity;
                      updatedCart.cost -= quantity * cost;
                      updatedCart.items.delete(foodName);
                      return updatedCart;
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 384 512"
                  >
                    <g
                      fill="red"
                      stroke="var(--neutral-color)"
                      stroke-width="20"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </li>
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
