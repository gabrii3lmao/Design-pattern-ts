import { Duck } from "./Duck.js";
import { FlyNoWay } from "./FlyNoWay.js";
import { Quack } from "./Quack.js";


export class ModelDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new Quack());
    }
}