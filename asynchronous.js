//Is JavaScript Asynchronous? Prove with an example.

//JavaScript is asynchronous in nature because it uses an event loop
//and executes non-blocking code with mechanisms like callbacks, promises, and async/await.

//example 1

console.log("Im th 1st one");
console.log("Im th 2nd one");
console.log("Im th 3rd one");
console.log("Im th 4th one");
setTimeout(function()
    {
        console.log("Im th 5th one");
    },2000);
console.log("Im th 6st one");

//In first example, when it reaches the settimeout as given 2 sec delay, 
// it will go to the next command by not blocking the execution and come back after 2 secs to print the function


//example 2
console.log("Start");

setTimeout(() => {
  console.log("Async task finished after 2 seconds");
}, 2000);

console.log("End");


//output
// Start
// End
// Async task finished after 2 seconds
