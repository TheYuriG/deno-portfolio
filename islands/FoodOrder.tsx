//? Import from Preact to be able to change state
import { useEffect, useState } from "preact/hooks";
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
import ModalExtendedImage from "./ModalExtendedImage.tsx";

//? Define properties required for this component
interface FoodOrderProperties {
  foods: Food[];
}

//? Instantiate default initial state for the cart
const startedCartState = { totalItems: 0, items: new Map(), cost: 0 };

//? Renders the card with all food options and the header with the cart
export default function FoodOrder({ foods }: FoodOrderProperties) {
  //? Manages what items are currently in a cart and the overall cart price
  const [cartContent, updateCartContent] = useState({
    ...startedCartState,
  });
  //? Manages the cart content being persisted locally
  useEffect(() => {
    //! Logic:
    //! (1) check if cart was recently emptied -> reset localStorage

    //! (2) check if cart is currently empty -> check if there is localStorage ->
    //! check if localStorage doesn't have as many items as current cart ->
    //! replace current cart with localStorage cart

    //! (3) save current cart to localStorage 1 second after the last cart update

    //? Fix calculation bug due to computers being unable to add/subtract decimals
    if (cartContent.cost < 1 && cartContent.cost !== 0) {
      //? Reset cart to default values
      //! Will not trigger another useEffect() cycle since the dependency will be equal
      updateCartContent({ ...startedCartState });
      localStorage.setItem(
        "food-order-cart",
        JSON.stringify({
          ...startedCartState,
          items: [...startedCartState.items],
        }),
      );
      return;
    }

    //? If the current state is fresh, check if we have a different state on localStorage to replace it
    if (cartContent.totalItems === 0) {
      const storedCart = localStorage.getItem("food-order-cart");
      if (storedCart !== null) {
        const parsedCart: typeof startedCartState = JSON.parse(storedCart);
        if (parsedCart?.totalItems !== cartContent.totalItems) {
          updateCartContent(() => ({
            ...parsedCart,
            items: new Map(parsedCart.items),
          }));
          return;
        }
      }
    }

    //? Lock saving data to localStorage 1 second after the last cart update
    const saveLock = setTimeout(() => {
      //? If the information is different, save it to localStorage
      localStorage.setItem(
        "food-order-cart",
        JSON.stringify({ ...cartContent, items: [...cartContent.items] }),
      );
    }, 1000);

    //? Clean up function to avoid spamming hits on localStorage
    return () => {
      clearTimeout(saveLock);
    };
  }, [cartContent.totalItems]);

  //? Manages if the modal should be toggled on or off
  const [displayModal, toggleDisplayModal] = useState(false);
  //? Tracks if the pulsing animation should be triggered
  const [pulseState, togglePulse] = useState(false);

  //? Manages if the expanded image modal should be toggled on or off
  const [expandFoodImage, displayExpandedFoodImage] = useState(false);
  //? Manages which is the current image link to be displayed on full screen modal
  const [expandedModalImageLink, updateExpandedModalImageLink] = useState("");

  //? Tracks if the if pulsing animation is active and remove
  //? the pulsing style once it ends
  useEffect(() => {
    //? If the pulsing animation isn't active, stop
    if (pulseState === false) return;

    //? Create a debouncer that tracks when the pulsing
    //? animation should be stopped
    const debouncer = setTimeout(() => {
      togglePulse(false);
    }, 300);

    //? Cleanup function to avoid restarting the animation
    //? when a new item is clicked, before the previous
    //? addition has completed animating
    return () => {
      clearTimeout(debouncer);
    };
  }, [pulseState]);

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
      <ModalExtendedImage
        display={expandFoodImage}
        imageLink={expandedModalImageLink}
        closeModalFunction={() => displayExpandedFoodImage(false)}
      />
      {/* Header with cart */}
      <div class="food-header">
        <h2 class="subtopic">Meals of the day</h2>
        <CartButton
          //? Pulses the cart when a new item is added
          pulseState={pulseState}
          //? Opens the modal when clicked
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

              //? Triggers the pulsing animation when an item
              //? is added to the cart
              togglePulse(true);

              //? Return the updated cart
              return newCart;
            });
          }}
          expandImageFunction={(imageLink) => {
            updateExpandedModalImageLink(imageLink);
            displayExpandedFoodImage(true);
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
