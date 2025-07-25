//Modules protect their functions and variables from leaking. They are protected by default.

// Modules are of two types: Common JS Modules(cjs) & ES Modules(mjs)
// by default -> commonjs
/*
In 
*/
/*
To use es Modules(mjs) we write import statments and export statements.

so, instead of writing
const { calculate } = require("./sum");

we write
import { calculate } from "./sum.js";
*/

// const { sum } = require("./calculate/sum"); //destructuring
// const {
//   multiply,
// } = require("./calculate/multiply");
require("./xyz");
const { sum, multiply } = require("./calculate");
const data = require("./data");

var name = "John";
console.log(name);
console.log(JSON.stringify(data));

var x;
multiply(2, 3);
sum(3, 4);
