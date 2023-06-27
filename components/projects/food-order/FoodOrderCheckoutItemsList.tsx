//? Renders the checkout cart items
export function FoodOrderCheckoutItemsList(
  { cartItems }: {
    cartItems: Array<[string, { quantity: number; cost: number }]>;
  },
) {
  return (
    <ol class="overflow-auto w-full styled-scrollbar">
      {cartItems.map(([foodName, { quantity, cost }]) => (
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
  );
}
