import { Duck} from "./classes/Duck.js";
import { MallardDuck } from "./classes/MallardDuck.js";
import { RubberDuck } from "./classes/RubberDuck.js";



const mallardDuck = new MallardDuck();
console.log("Mallard duck says: ");
mallardDuck.performFly();
mallardDuck.performQuack();
console.log("Mallard duck says: ");
mallardDuck.display();
console.log("\n");

const rubberDuck = new RubberDuck();
rubberDuck.performFly();
rubberDuck.performQuack();
rubberDuck.display();

