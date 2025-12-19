console.log(5=='5');  //true
console.log(1=='true');  //false coz true->Not a number 

console.log(5===5);  //true
console.log(10===10);  //true

console.log('5'===5); //false

console.log(0==false);  //true

console.log(0==='false');  //false

console.log(1=="vaish"); //false
console.log("A"==="A");   //true
console.log("A"!=="A");   //false
console.log("A"!=="B");  //rue



// == → checks if the values are equal, even if data types differ.

// === → checks if both value and type are the same.

// The == operator compares values after type conversion (loose equality), whereas === compares both value and type (strict equality).
// Example: 5 == '5' is true, but 5 === '5' is false.


//-----------------------------------------------------------------------------------------------------------------

//NULL -- A variable is explicitly assigned to represent “no value” or null
// undefined -- a variable has been declared but not assigned any value

let x;
console.log(x); // undefined
console.log(typeof(x));   // undefined

let y= null;
console.log(y); // null
console.log(typeof y);   //objec
