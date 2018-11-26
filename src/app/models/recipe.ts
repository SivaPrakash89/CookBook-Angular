export interface Recipe {
    id?: string;
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredients;
}

export interface Ingredients {
    name: string;
    quantity: number;
}