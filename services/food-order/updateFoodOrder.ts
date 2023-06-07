//? Import the type of the function that updates the Cart's state
import type { updateCartFunction } from "../../types/food-order/updateCartFunction.ts";

//? Export the function responsible for increasing a Cart item by one
export function increaseCartItemByOne(
    { foodName, foodCost, updateCartFunction }: {
        foodName: string;
        foodCost: number;
        updateCartFunction: updateCartFunction;
    },
) {
    updateCartFunction((curr) => {
        //? Instantiate current cart
        const updatedCart = { ...curr };

        //? Increase the total item count by 1
        updatedCart.totalItems += 1;
        //? Increase the overall cart price by the
        //? cost of another of this item
        updatedCart.cost += foodCost;

        //? Increase the count of this specific item on the cart
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

        //? Return the updated cart as updated state
        return updatedCart;
    });
}

//? Export the function responsible for reducing a Cart item by one
export function reduceCartItemByOne(
    { foodName, foodCost, updateCartFunction }: {
        foodName: string;
        foodCost: number;
        updateCartFunction: updateCartFunction;
    },
) {
    updateCartFunction((curr) => {
        //? Instantiate current cart
        const updatedCart = { ...curr };

        //? Decrease the total item count by 1
        updatedCart.totalItems -= 1;
        //? Discount the overall cart price by the
        //? cost of another of this item
        updatedCart.cost -= foodCost;

        //? Increase the count of this specific item on the cart
        const decreasedCountItem = updatedCart.items.get(
            foodName,
        );
        if (decreasedCountItem !== undefined) {
            if (decreasedCountItem.quantity > 1) {
                decreasedCountItem.quantity -= 1;
                updatedCart.items.set(
                    foodName,
                    decreasedCountItem,
                );
            } else {
                updatedCart.items.delete(foodName);
            }
        }

        //? Return the updated cart as updated state
        return updatedCart;
    });
}

//? Export the function responsible for removing an item from the cart
export function deleteItemFromCart(
    { foodName, foodQuantity, foodCost, updateCartFunction }: {
        foodName: string;
        foodQuantity: number;
        foodCost: number;
        updateCartFunction: updateCartFunction;
    },
) {
    updateCartFunction((curr) => {
        //? Instantiate current cart
        const updatedCart = { ...curr };

        //? Remove as many items from the cart as were added of this item
        updatedCart.totalItems -= foodQuantity;
        //? Discount the cart by the cost of all items of this type
        updatedCart.cost -= foodQuantity * foodCost;
        //? Remove this item from the tracked items
        updatedCart.items.delete(foodName);

        //? Return the updated cart as updated state
        return updatedCart;
    });
}