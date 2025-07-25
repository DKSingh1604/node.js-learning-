function sum(a, b) {
  console.log(a + b);
}
/*
this was common js module type(cjs)(by default)
now if we want to use es module(mjs) type we need to use import and export statements.

export function calculate(a, b) {
  console.log(a + b);
}
*/

var x = "Hello World";

console.log(module.exports);

module.exports = {
  sum,
};
