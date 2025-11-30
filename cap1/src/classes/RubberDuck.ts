import { Duck} from "./Duck.js";
import { FlyNoWay } from "./FlyNoWay.js";
import { Squeak } from "./Squack.js";


export class RubberDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new Squeak());
    }

    display(): void {
        console.log("I've seen so much naked woman");
    }
}
