/*

ASYNC function always returns a promise

If return a promise in the function it will return it as it is, as a promise.

But if you return a non-promise value, it will wrap that in a promise and return that promise.
*/

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});

// async function getData() {
//   p.then((res) => console.log(res));
//   console.log("Namaste Js");
// }

// getData();
// console.log(getData());

// getData().then((res) => {
//   console.log(res);
// });

// ASYNC and AWAIT
/*
ASYNC and AWAIT are used to handle promises.  AWAIT can only be used inside an async function
*/
//-----------------------------------------------------------------------
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolved value!!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolved value!!");
  }, 10000);
});

// async function handlePromise() {
//   //JS engine was wating for the promise to resolve
//   console.log(
//     "Prints as soon as function comes in callstack."
//   );

//   // timer starts for both the functions from here itself, as the time between executing await p1 and await p2 is negligible for js engine.
//   const val1 = await p1;
//   console.log("Namaste Js for p1");
//   console.log(val1);

//   const val2 = await p2;
//   console.log("Namaste Js for p2");
//   console.log(val2);
// }
// handlePromise();

// ----------------------------------------------------------------------

// REAL WORLD EXAMPLES

// Github API -> "user_url": "https://api.github.com/users/{user}",

const API_URL =
  "https://api.github.com/users/DKSingh1604";

async function handlePromise() {
  //fetch() => Response Object -> Response.json() => jsonValue

  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}
handlePromise().catch((err) => console.log(err));

//FOR ERROR HANDLING EITHER USE TRY-CATCH OR FUNCTION().CATCH(...)
