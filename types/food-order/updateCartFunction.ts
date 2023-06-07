//? Import types for typecasting
import type { StateUpdater } from "preact/hooks";
import type { foodCartItemsMap } from "./foodCartItemsMap.ts";

//? Export what the state updating function should look like
export type updateCartFunction = StateUpdater<
    {
        totalItems: number;
        items: foodCartItemsMap;
        cost: number;
    }
>;