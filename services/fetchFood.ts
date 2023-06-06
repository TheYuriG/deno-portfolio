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
            name: "Ceasar salad",
            description:
                "Medium meat, onion and well seasoned vegetables, raspberries for extra flavor.",
            feedsHowMany: "2",
            price: 7,
        }, {
            imageLink:
                "https://images.unsplash.com/photo-1559847844-1ff4d5bcd3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80",
            imageAlt: "",
            imageTitle: "",
            name: "Breaded steak",
            description:
                "Seasoned thin steak, coated in cracker meal and fried. Traditional Cuban meal. Onion sauce included.",
            feedsHowMany: "1",
            price: 17,
        }, {
            imageLink:
                "https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80",
            imageAlt: "",
            imageTitle: "",
            name: "Nigiri Sushi",
            description:
                "Excellent seafood for even the most traditional customers. Wasabi paste included.",
            feedsHowMany: "2",
            price: 25,
        }, {
            imageLink:
                "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
            imageAlt: "",
            imageTitle: "",
            name: "High protein chicken meal",
            description:
                "Seasoned chicken with tomatoes. Low fat, high nutrients, ideal for post-workouts.",
            feedsHowMany: "1",
            price: 13,
        }, {
            imageLink:
                "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            imageAlt: "",
            imageTitle: "",
            name: "Ramen",
            description:
                "Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables.",
            feedsHowMany: "1",
            price: 8,
        }];
        return foods;
    } catch (error) {
        return new DatabaseFetchError(
            "Unable to find any Food!",
            error.trace,
        );
    }
}
