import type { FlyBehavior } from "../interfaces/FlyBehavior.js";

export class FlyRocketPowered implements FlyBehavior {
    fly(): void {
        console.log("I'm flying with a rocket!");
    }
}