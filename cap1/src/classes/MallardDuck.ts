import { Duck} from "./Duck.js";
import { Quack } from "./Quack.js";
import { FlyWithWings } from "./FlyWithWings.js";

export class MallardDuck extends Duck {

    constructor() {
        super(new FlyWithWings(), new Quack());
    }

    display(): void {
        console.log("Eu sou um pato Mallard muito malandro");
    }
    
}