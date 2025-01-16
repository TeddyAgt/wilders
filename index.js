import Wilder from "./wilder.js";

const wilder1 = new Wilder("Teddy", "#ff33dd", "oO", "U");
const wilder2 = new Wilder("Charlito", "#fc2c03", "Oo", "u");
const wilder3 = new Wilder("Océane", "#73417a", "==", "");
const wilder4 = new Wilder("Chloé", "#5a95cc", "oO", "U");
const wilder5 = new Wilder("Yahya", "#2fe099", "Oo", "u");
const wilder6 = new Wilder("Tristan", "#ff5900", "==", "");

const wilders = [
    new Wilder("Teddy", "#ff006a", "oO", "U"),
    new Wilder("Charlito", "#fc2c03", "Oo", "u"),
    new Wilder("Océane", "#00ff08", "==", ""),
    new Wilder("Chloé", "#5a95cc", "oO", "U"),
    new Wilder("Yahya", "#ff0303", "Oo", "u"),
    new Wilder("Tristan", "#ff6f00", "==", ""),
    new Wilder("Théo", "#ffdd00", "OO", "U"),
];

for (const wilder of wilders) {
    wilder.sayHello();
}
