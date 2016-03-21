import { Injectable } from "angular2/core";

import { IDish } from "./dish";
import { IIngredient } from "./ingredient";

@Injectable()
export class CartService {
    public ingredients: IIngredient[];
    
    constructor() {
        this.ingredients = [];
    }
    
    addDish(dish: IDish) {
        this.ingredients = this.ingredients.concat(dish.ingredients);
        console.log(this.ingredients);
        return Promise.resolve();
    }
    
    getIngridients() {
        return Promise.resolve(this.ingredients);
    }
}