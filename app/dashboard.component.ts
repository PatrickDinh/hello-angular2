import {Component, OnInit } from "angular2/core";
import * as router from 'angular2/router';

import { Routes } from './routes.config';
import { DishService } from "./dish-service";
import { CartService } from "./cart-service";
import { IDish, Dish } from "./dish";

@Component({
    templateUrl: "./app/dashboard.tpl.html",
    directives: [router.ROUTER_DIRECTIVES],
    styleUrls: ["./app/dashboard.css"]
})

export class DashboardComponent implements OnInit {
    public dishes: Dish[];
    
    constructor(
        private _dishService: DishService,
        private _cartService: CartService) { }
    
    ngOnInit() {
        this._dishService.getDishes().then(dishes => this.dishes = _.map(dishes, d => new Dish(d)));
    }
    
    onSelect(dish: Dish) {
        this.dishes.forEach(d => {
            if (d.id !== dish.id) {
                d.expanded = false;
            }
        });
        dish.expanded = !dish.expanded;
    }
    
    onAddDish(dish: Dish) {
        this._cartService.addDish(dish);
    }
}
