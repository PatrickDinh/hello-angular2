import {Injectable} from "angular2/core";
import _ from "lodash";

import {IDish} from "./dish";
import {DISHES} from "./mock-dishes";


@Injectable()
export class DishService {
    getDishes() {
        return Promise.resolve(DISHES);
    }
    
    getDish(id: number) {
        var dish = _.find(DISHES, d => d.id === id);
        console.log(dish);
        return Promise.resolve(dish);
    }
}

