//PROMISE APIs

// what if we want to send many promises at the same time, ans get their results parallely

// ----------------------------------------------------------------------

//    1 -                        Promise.all() => Fail Fast
/*
will take an array of promises as input and return there result array after some time.

Eg - Promise.all([p1, p2, p3]), 

if p1 - 1 sec
p2 - 3 sec
p3 - 5 sec
if all resolved, - > reply to the promise will come back in 5 sec(longest promise time), because it has to return parallely,

But if any one of them fails,  -> an error will be returned as soon as any one of the promises gets rejected, no wait for the others to finish.




------------------------------------------------------------------------

2 - 

What if we atleast want to get the results of the promises which are resolved,  ->                Promise.allSettled()


if all resolved -> same as Promise.all()
if p1 - 1 sec
p2      -> gets rejected after 1 sec
p3 - 5 sec

If one of them gets rejected after some time, it will keep on working till all the promises are settled, that is till 5 seconds.

After 5 seconds it will pass and array result, somewhat like
                     [r1, error2, r3]


-------------------------------------------------------------------------

3 -                           Promise.race() => Settled First

what if we want the value of the first settled promise, we use .race().
As soon as one of the promises is settled, it wil return back the value, without waiting for the others.

if p1 - 2 sec
p2      -> gets rejected/resolved after 1 sec
p3 - 5 sec

Eg - Promise.race([p1, p2, p3]);

It will return back the value/error or the p2, as it got settled first.
doesn't give a sh*t about others



------------------------------------------------------------------------


4 -                               Promise.any() => Pass First

what if we want the first resolved(succes) promise to be returned, we use .any(). This will return the value of first resolved promise.

For Eg- 
p1 - 2 sec
p2      -> gets resolved after 1 sec
p3 - 5 sec

The value of the p2 promise will be returned in 1 sec.


what if for the above eg p2 gets rejected after 1 sec i.e.
p1 - 2 sec
p2      -> gets resolved after 1 sec
p3 - 5 sec

*/
