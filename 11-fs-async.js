const {readFile, writeFile, write} = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);

    const first = result;

    result = readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                
                return
            }
            console.log(result);
            
        });
    })
})

