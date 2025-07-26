/*

JS can't do any async tasks byt itself, it can only do sync tasks.

That's where libuv comes into picture.

 =>  libuv is platform abstraction library for node.Js that helps Js to do async tasks.

libuv, nodejs and v8 are all written majorly in c++;

-------------------------------------------------------------------------

V8 -> (talks to) -> libuv -> (talks to) -> OS(which does the task and return back) -> (gives to v8) -> v8 executes

v8 -> libuv -> OS -> file read
v8 -> libuv -> OS -> api call
v8 -> libuv -> OS -> timers

-------------------------------------------------------------------------
*/
