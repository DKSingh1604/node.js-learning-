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

async function handlePromise() {
  //JS engine was wating for the promise to resolve
  const val = await p;
  console.log("Namaste Js");

  console.log(val);
}
handlePromise();
