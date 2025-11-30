import { Duck} from "./classes/Duck.js";
import { FlyRocketPowered } from "./classes/FlyRocketpowered.js";
import { MallardDuck } from "./classes/MallardDuck.js";
import { ModelDuck } from "./classes/ModelDuck.js";
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
console.log("\n");

const modelDuck = new ModelDuck();
console.log("Model duck says:");
modelDuck.display();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();
