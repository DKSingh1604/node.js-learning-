/*
                            LIBUV
3 main components:
    
    Callback Queues
        If an async task is completetd by libuv but the Js callstack has still some ongoing tasks, those completed async tasks will go to the Callback Queue, until the callsctakc is empty. Once the call stack is done processing sync task, these tasks are offloaded from callback queue to callstack.(One by One) 

    Event Loop
        EventLoop checks if the callback queues are empty or has some async task. If the callback queue has any completed async tast, event loop offloads it to the callstack.

        Loop Phases - timer callback phase -> poll phase -> check phase -> close phase
        
        Timer callback phase -> setTimeout and setInterval
        Poll phase -> fs functions, crypto, http.get, etc
        Check phase -> setImmdiate()
        Close Phase -> socket closing and cleanup things

        & also Event loop meanwhile continuouly keeps on checking if there is some taks in call back queue, if yes offloads to callstack.

        Top priority => process.nextTick() -> checked before every phase
                     => promise callbacks - > checked before every phase

        When everthing is executed and the callback queues are empty now, the event loop will wait at the pole phase.

    Thread Pool
*/
