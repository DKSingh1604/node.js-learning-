/*

EP 9 and 10 - libuv, eventloop and Thread Pool

ONE CYCLE OF EVENT LOOP IS CALLED A TICK
                            LIBUV
3 main components:
    
    Callback Queues
        If an async task is completetd by libuv but the Js callstack has still some ongoing tasks, those completed async tasks will go to the Callback Queue, until the callsctakc is empty. Once the call stack is done processing sync task, these tasks are offloaded from callback queue to callstack.(One by One) 

    Event Loop
        EventLoop checks if the callback queues are empty or has some async task. If the callback queue has any completed async tast, event loop offloads it to the callstack.

        Loop Phases - timer callback phase -> poll phase -> check phase -> close phase
        
        Timer callback phase -> setTimeout and setInterval (DS used is minHeap)
        Poll phase -> fs functions, crypto, http.get, etc
        Check phase -> setImmdiate()
        Close Phase -> socket closing and cleanup things

        & also Event loop meanwhile continuouly keeps on checking if there is some taks in call back queue, if yes offloads to callstack.

        Top priority => process.nextTick() -> checked before every phase
                     => promise callbacks - > checked before every phase

        When everthing is executed and the callback queues are empty now, the event loop will wait at the pole phase.  

    Thread Pool
        When some async tasks comes to the main thread, it offloads it to lib uv. Inside libuv we have thread pools. That async task is sent to a thread pool if we now it is going to take some time to be executed. That thread pool sends the request to the particular service that the code wants(eg: file read, crypto, http, dns etc). Until the time the service comes back with the response, that thread pool is blocked. For the execution time if the thread pool remains blocked, that does not affect the overall execution speed, as the main thread is still vacant and also there are multiple thread pools in libuv, which can send request for multiple tasks.

        By default 4 threads pools in node.js.

        If a 5 th task comes, it will have to wait till one of the thread gets vacant. 

        Tasks that can be done by thread pool:
            fs - dns.lookup - crypto
            user specified input
*/

//CODE

const crypto = require("crypto");

//to change the thread pool size
process.env.UV_THREADPOOL_SIZE = 5;

crypto.pbkdf2(
  "password",
  "salt",
  5000000,
  50,
  "sha512",
  (err, key) => {
    console.log("1 - cryptoPBKF2 done");
  }
);
crypto.pbkdf2(
  "password",
  "salt",
  5000000,
  50,
  "sha512",
  (err, key) => {
    console.log("2 - cryptoPBKF2 done");
  }
);
crypto.pbkdf2(
  "password",
  "salt",
  5000000,
  50,
  "sha512",
  (err, key) => {
    console.log("3 - cryptoPBKF2 done");
  }
);
crypto.pbkdf2(
  "password",
  "salt",
  5000000,
  50,
  "sha512",
  (err, key) => {
    console.log("4 - cryptoPBKF2 done");
  }
);
crypto.pbkdf2(
  "password",
  "salt",
  5000000,
  50,
  "sha512",
  (err, key) => {
    console.log("5 - cryptoPBKF2 done");
  }
);

/*
When a user on your website hits an API call, these threads are not used.


For API calls and other networking tasks, SOCKETS are used.

For eg-
If a user is doing some kind of connection on a thread, that thread gets blocked for that time. 
If mulitple users do that, that means we may need more threads. For 100 users we may need 1000 threads so that no one has to wait. (Thread per connection model)(not good)

BUT that's not how node.js works.

What it does is, it uses algo through the OS.
epoll in Linux operates in O(1) time. (Red-Black Tree)
kqueue in MacOS

This algo is a scalable I/O event notification mechanism

*/
