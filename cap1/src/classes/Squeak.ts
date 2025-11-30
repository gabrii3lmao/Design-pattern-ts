import type { QuackBehavior } from "../interfaces/QuackBehavior.js";

export class Squeak implements QuackBehavior {
    quack(): void {
        console.log("quac mas com borracha");
    }
}