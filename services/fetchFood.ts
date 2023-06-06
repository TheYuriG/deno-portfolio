//? Import Food to typecast outbound data
import type { Food } from "../types/Food.ts";
//? Import fetch error
import DatabaseFetchError from "../types/error/DatabaseFetchError.ts";

//todo remove the warning below once this is moved to a database fetch
// deno-lint-ignore require-await
export default async function fetchFood(
): Promise<DatabaseFetchError | Food[]> {
    try {
        //? Mock food
        const foods: Food[] = [{
            imageLink:
                "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            imageAlt: "Delicious ceasar salad",
            imageTitle:
                "Very healthy salad with low fat meat. Good appetizer for the main dish.",
            name: "Ceasar Salad",
            description:
                "Medium meat, onion and well seasoned vegetables, raspberries for extra flavor.",
            feedsHowMany: "2",
            price: 7.2,
        }, {
            imageLink:
                "https://images.unsplash.com/photo-1559847844-1ff4d5bcd3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80",
            imageAlt: "Breaded steak with sauce on the side",
            imageTitle: "Ordering this makes you sad, because eventually you can't eat it anymore and that's depressing",
            name: "Breaded Steak",
            description:
                "Seasoned thin steak, coated in cracker meal and fried. Traditional Cuban meal. Onion sauce included.",
            feedsHowMany: "1",
            price: 16.8,
        }, {
            imageLink:
                "https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80",
            imageAlt: "Sushi with shrimp",
            imageTitle: "Won't turn your skin pink... hopefully",
            name: "Nigiri Sushi",
            description:
                "Excellent seafood for even the most traditional customers. Wasabi paste included.",
            feedsHowMany: "2",
            price: 25.4,
        }, {
            imageLink:
                "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
            imageAlt: "Plate of chicken cut in cubes",
            imageTitle: "It tastes even better than it looks",
            name: "Seasoned Chicken",
            description:
                "Chicken breast in cubes, seasoned and with slices of tomato. Low fat, high nutrients, ideal for post-workouts.",
            feedsHowMany: "1",
            price: 13.99,
        }, {
            imageLink:
                "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            imageAlt: "Ramen bowl",
            imageTitle: "If this can turn a Genin into a Kage, it can also turn a hangry person into a happy one.",
            name: "Ramen",
            description:
                "Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables.",
            feedsHowMany: "1",
            price: 8.15,
        }];
        return foods;
    } catch (error) {
        return new DatabaseFetchError(
            "Unable to find any Food!",
            error.trace,
        );
    }
}
