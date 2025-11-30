import type { FlyBehavior } from "../interfaces/FlyBehavior.js";

export class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log("Im flying");
    }
}