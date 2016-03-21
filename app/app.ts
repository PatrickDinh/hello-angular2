import {Component} from 'angular2/core';
import * as router from 'angular2/router';
import { Routes, APP_ROUTES } from './routes.config';
import { DishService } from "./dish-service";
import { CartService } from "./cart-service";

@Component({
    selector: 'shopping-list',
    templateUrl: './app/app.tpl.html',
    styleUrls: ['./app/app.css'],
    directives: [router.ROUTER_DIRECTIVES],
    providers: [
        DishService,
        CartService
    ]
})

@router.RouteConfig(APP_ROUTES)

export class App { 
     public routes = Routes;
}

