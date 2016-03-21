import { IIngredient } from "./ingredient"

export interface IDish {
    id: number;
    name: string;
    description: string;
    ingredients: IIngredient[];
}

export class Dish implements IDish {
    id: number;
    name: string;
    description: string;
    expanded: boolean;
    ingredients: IIngredient[];
    
    constructor(dish: IDish) {
        this.id = dish.id;
        this.name = dish.name;
        this.description = dish.description;        
        this.ingredients = dish.ingredients;
    }
}