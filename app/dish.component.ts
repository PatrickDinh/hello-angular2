import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { IDish } from "./dish";
import { DishService } from "./dish-service";

@Component({
    templateUrl: './app/dish.tpl.html'
})

export class DishComponent implements OnInit {
    public id: number;
    public dish: IDish;
    
    constructor(
        private _routeParams: RouteParams,
        private _dishService: DishService) {
    }
    
    ngOnInit() {
        var id = +this._routeParams.get("id");
        this._dishService.getDishes().then(resp => this.dish = resp[0]);   
    }
}

