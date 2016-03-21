import { Route, Router } from 'angular2/router';
import { DishComponent } from "./dish.component";
import { DashboardComponent } from "./dashboard.component";
import { CartComponent } from "./cart.component";

export var Routes = {
    dashboard: new Route({
       name: "Dashboard",
       path: "/dashboard",
       useAsDefault: true,
       component: DashboardComponent 
    }),
    dish: new Route({
        name: "Dish",
        path: "/dish/:id",
        component: DishComponent
    }),
    cart: new Route({
        name: "Cart",
        path: "/cart",
        component: CartComponent
    })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
