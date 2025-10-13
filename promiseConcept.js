//What are promises in JavaScript? Explain the difference between callback functions and promises with an example.4
//A promise is an object that represents the eventual completion or failure of an asynchronous operation. 
// Unlike callbacks, promises provide a cleaner way to chain asynchronous tasks and handle errors, avoiding callback hell.


const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise
  .then(result => console.log(result))   // handles success
  .catch(error => console.log(error));   // handles failure


function fetchData(callback) {

  //here write setTimeot and use callback to pass 2 functions as arguments.

  return new Promise((resolve) =>{
   setTimeout(() => {
    console.log("Fetching ! ");
    const data = "sample data";
    resolve(data);
    
   
  }, 2000);
  })
 
}

const data = await fetchData()
console.log("Processing : ", data);

