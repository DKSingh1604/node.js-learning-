//PROMISE APIs

// WHAT IF we want to send many promises at the same time, ans get their results parallely

// ----------------------------------------------------------------------

//    1 -                        Promise.all() => Fail Fast
/*
will take an array of promises as input and return there result array after some time.

Eg - Promise.all([p1, p2, p3]), 

if p1 - 1 sec
p2 - 3 sec
p3 - 5 sec
if all resolved, - > reply to the promise will come back in 5 sec(longest promise time), because it has to return parallely,

But if any one of them fails  -> an error will be returned as soon as any one of the promises gets rejected, no wait for the others to finish.




------------------------------------------------------------------------

2 - 

WHAT IF we want to get the results of atleast the ones which are resolved,  ->                Promise.allSettled()


if all resolved -> same as Promise.all()
if p1 - 1 sec
p2      -> gets rejected after 1 sec
p3 - 5 sec

If one of them gets rejected after some time, it will keep on working till all the promises are settled, that is till 5 seconds.

After 5 seconds it will pass an array result, somewhat like
                     [r1, error2, r3]


-------------------------------------------------------------------------

3 -                           Promise.race() => Settled First

WHAT IF we want the value of the first settled promise, we use .race().
As soon as one of the promises is settled, it wil return back the value, without waiting for the others. Be it succes or fail.

if p1 - 2 sec
p2      -> gets rejected/resolved after 1 sec
p3 - 5 sec

Eg - Promise.race([p1, p2, p3]);

It will return back the value/error of the p2, as it got settled first.
doesn't give a sh*t about others



------------------------------------------------------------------------


4 -                               Promise.any() => Pass First

WHAT IF we want the first resolved(success) promise to be returned, we use .any(). This will return the value of first resolved promise.

For Eg- 
p1 - 2 sec
p2      -> gets resolved after 1 sec
p3 - 5 sec

The value of the p2 promise will be returned in 1 sec.


WHAT IF for the above eg p2 gets rejected after 1 sec i.e.
p1 - 2 sec
p2      -> gets rejected after 1 sec
p3 - 5 sec
In this case, the function will wait for the next nearest success and return the value of that promise. Here value of p1.


WHAT IF every prmoise fails.
p1 - rejected in 2 sec
p2      -> gets rejected after 1 sec
p3 - rejected in 5 sec


Then an aggregate of all the errors will be returned after longest settled time(Here 5 sec). List/array of all errors.
                        [e1, e2, e3];



*/
const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("P1 Success");
  //   }, 3000);
  setTimeout(
    () => reject("P1 failed in 3 sec"),
    3000
  );
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 Success"), 1000);
  setTimeout(
    () => reject("P2 Failed in 1 sec"),
    1000
  );
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(`P3 Success`), 2000);
  setTimeout(
    () => reject(`P3 failed in 2 sec`),
    2000
  );
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors[2]);
    console.log(err.errors);
  });
