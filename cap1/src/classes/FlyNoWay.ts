import type { FlyBehavior } from "../interfaces/FlyBehavior.js";

export class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log("i cant fly...");
    }
}