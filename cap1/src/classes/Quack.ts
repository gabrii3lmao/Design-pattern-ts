import type { QuackBehavior } from "../interfaces/QuackBehavior.js";

export class Quack implements QuackBehavior {
    quack(): void {
        console.log("quac quac quac");
    }
}