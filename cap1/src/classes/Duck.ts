import type { FlyBehavior } from "../interfaces/FlyBehavior.js";
import type { QuackBehavior } from "../interfaces/QuackBehavior.js";

export class Duck {
    constructor(
        private flyBehavior: FlyBehavior,
        private quackBehavior: QuackBehavior
    ) {}

    performFly() {
        this.flyBehavior.fly();
    }

    performQuack() {
        this.quackBehavior.quack();
    }

    setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

    setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }
}
