console.log("Begin"); 
setTimeout(() => { 
    console.log("Timeout Task"); 
}, 0); 
Promise.resolve()
.then(() => { console.log("Promise Task"); });
console.log("End");

//why the output order follows this specific sequence.
    //execution steps :-
        //1)Sychronous code it will execute immediatly
        //2)microtask such as promises it will execute after the synchronous
        //3)Macrotask are setIntervals and setTimeout these are execute after microtasks
