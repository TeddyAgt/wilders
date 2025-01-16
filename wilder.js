import chalk from "chalk";
import cowsay from "cowsay";

export default class Wilder {
    constructor(name, color, eyes = "oo", tongue = "U") {
        this.name = name;
        this.chalk = chalk.hex(color);
        this.eyes = eyes;
        this.tongue = tongue;
    }

    sayHello() {
        console.log(this.chalk(`Hello, my name is ${this.name} !`));
        console.log(
            this.chalk(
                cowsay.say({
                    text: `Hello, my name is ${this.name} !`,
                    e: this.eyes,
                    T: this.tongue,
                })
            )
        );
    }
}
