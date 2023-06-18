//? Import Food to typecast outbound data
import type { Food } from "../../types/food-order/Food.ts";
//? Import fetch error
import DatabaseFetchError from "../../types/error/DatabaseFetchError.ts";
//? Import mock foods to save to database if not yet saved
import { mockFoods } from "../../types/food-order/mockFoods.ts";

export default async function fetchFood(): Promise<
  DatabaseFetchError | Food[]
> {
  try {
    const kv = await Deno.openKv();
    const dbFoods = await kv.get(["food-order"]);
    if (dbFoods.value === null) {
      kv.set(["food-order"], mockFoods);
      return mockFoods;
    }
    return dbFoods.value as Food[];
  } catch (error) {
    return new DatabaseFetchError(
      "Unable to find any Food!",
      error.trace,
    );
  }
}
