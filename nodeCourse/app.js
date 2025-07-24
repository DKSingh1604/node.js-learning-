//Modules protect their functions and variables from leaking. They are protected by default.

// Modules are of two types: Common JS Modules(cjs) & ES Modules(mjs)
// by default -> commonjs
/*
In 
*/

require("./xyz");
require("./sum"); //wont work just by this
const { calculate } = require("./sum"); //destructuring

var name = "John";
console.log(name);
var x;
console.log(x);

calculate(3, 4);
