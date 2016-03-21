import { Component, OnInit } from "angular2/core";

import { CartService } from "./cart-service";
import { IIngredient } from "./ingredient";

@Component({
    templateUrl: "./app/cart.tpl.html"
})

export class CartComponent implements OnInit {
    public ingredients: IIngredient[];
    
    constructor(private _cartService: CartService) {
        
    }
    
    ngOnInit() {
        this._cartService.getIngridients().then(resp => this.ingredients = resp);
    }
}