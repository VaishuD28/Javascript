// 1. Can a JavaScript object hold a function as a property? Explain with an example.
//Yes, it can hold a function and to refer own property values use this keyword and call the function.

const person =
{
    name:"Madhu",
    age:55,
    greet : function()
    {
        console.log("Hello, Good Morning. I'm " + this.name + ", my age is " + this.age);
    }
}

person.greet();

//2. What are anonymous functions in JavaScript? Define their syntax and implementation.
//Functions which does not have name are ccalled anonymous functions
//general functions
function sayHello()
{
    return "Hello, World";
}
//sayHello();  we can can directly by using console.log("hellow, world")
const Message = sayHello();
console.log(Message);

//Anonymous function syntax
const greet = function()  //storing anonymous func in a object
{
    return "Hello, Good Morning.";
}

console.log(greet)
