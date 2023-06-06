export interface Food {
    imageLink: string;
    imageAlt: string;
    imageTitle: string;
    name: string;
    description: string;
    price: string;
    addToCartFunction: () => void;
}