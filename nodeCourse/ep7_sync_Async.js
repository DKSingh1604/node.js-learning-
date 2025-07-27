/*
Topics covered
-> Sync code
-> Async code
-> Blocking Sync Code
-> setTimeout with 0 ms
-> Non Bloacking I/O
-> Main Thread
-> Async I/O
-> libuv Github
*/

/*
NEVER USE SYNC FUNCTIONS, BECAUSE THEY BLOCK THE MAIN THREAD
*/

/*
fileReadSync and fileRead
*/

// const fs = require("fs");
// const https = require("https");

// console.log("Hello World");

// var a = 434343;
// var b = 4343434;

// //done delibrately to block the main thread
// fs.readFileSync(
//   "./ep1_intro_to_node.txt",
//   "utf-8"
// );

// console.log(
//   "This code will only run after ep1 is executed."
// );

// https.get(
//   "https://dummyjson.com/products/1",
//   (res) => {
//     console.log("Fetched Data Successfully");
//   }
// );

// setTimeout(() => {
//   console.log(
//     "Set timeout is a called after 5 secs."
//   );
// }, 5000);

// fs.readFile(
//   "./ep2_nodeAndV8.txt",
//   "utf-8",
//   (err, data) => {
//     console.log("File Data: ", data);
//   }
// );

// function multiplyFn(x, y) {
//   const result = x * y;
//   return result;
// }
// let ans = multiplyFn(3, 4);
// console.log(ans);

//----------------------------------------------------------------------
/*
Using crypto module to know how main thread blocking works.
*/
// const crypto = require("crypto");

// // console.log("Hello World");

// var a = 434343;
// var b = 4343434;

// //pbkdf2 - Password Base Kaye Derivative Function
// //is a sync function - here used to block the main thread

// crypto.pbkdf2Sync(
//   "password",
//   "salt",
//   5000,
//   50,
//   "sha512"
// );
// // console.log("First Key is enerated");

// //Async Function
// crypto.pbkdf2(
//   "password",
//   "salt",
//   5000,
//   50,
//   "sha512",
//   (err, key) => {
//     console.log(
//       "Second key is generated is: ",
//       key
//     );
//   }
// );

// function multiplyFn(x, y) {
//   const result = x * y;
//   return result;
// }
// let ans = multiplyFn(3, 4);
// console.log(ans);

//-----------------------------------------------------------------------

//setTimeOutZero

console.log("Hello World");

var a = 434343;
var b = 4343434;

setTimeout(() => {
  console.log("ASAP");
}, 0);

//It will be executed once all the sync tasks are done executing
