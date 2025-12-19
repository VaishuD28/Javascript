//What are callback functions in JavaScript?
//Callback function is a function that is passed as an argument to another function and is executed
//after some operations has been completed. often used for asynchronous operation.
// Why Callbacks are Important
// Handle asynchronous operations (API calls, timers, event listeners).
// Avoid blocking the main thread.
// Used in event handling (button.onclick = function() {...}).

//example 1
function fetchData(callback)
{
   
    //here write setTimeot and use callback to pass 2 functions as arguments.
    setTimeout(()=>
    {
        console.log("Fetching ! ");
         const data = "sample data";
        callback(data);  //using callback as any function can run at runtime when declared inside another function
    }, 2000);
}

function processingData(data)
{
    console.log("Processing: " + data);
}

function modifyData(data)
{
    console.log("Modifying: " + data);
}

fetchData(processingData);
fetchData(modifyData);


//example 2

function greet(name, callback)
{
    console.log("Hello "+name);
    callback();
}

function sayBye()
{
    console.log("Goodbye !")
}
function drive()
{
    console.log("I'm Driving");
}

greet("vaishnavi", sayBye);
greet("Madhu", drive)