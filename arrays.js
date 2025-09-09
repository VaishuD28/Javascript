//4. Where are the push, pop, slice, shift, and unshift methods used when accessing array elements?
//array and operations - index, push, pop, unshift, shift, indexof, splice and iterate

const fruits = ['Mango', 'Banana', 'Apple', 'Kiwi', 'Melon']
console.log(fruits);

//access element by index
console.log(fruits[1]);               //Banana
console.log(fruits[3]);               // Kiwi

//Add element to the end of an array
fruits.push("Dragon Fruit");
console.log(fruits);                  //[ 'Mango', 'Banana', 'Apple', 'Kiwi', 'Melon', 'Dragon Fruit' ]

//Remove element from end of array
 const lastFruit = fruits.pop();
 console.log(lastFruit);              // Dragon Fruit
 console.log(fruits);                 //[ 'Mango', 'Banana', 'Apple', 'Kiwi', 'Melon' ]

 //Add element to starting of an array
fruits.unshift('Avacado');
console.log(fruits);                  //[ 'Avacado', 'Mango', 'Banana', 'Apple', 'Kiwi', 'Melon' ]

//remove element from starting of an array
const firstFruit = fruits.shift();
console.log(firstFruit);               //Avacado
console.log(fruits);                   //[ 'Mango', 'Banana', 'Apple', 'Kiwi', 'Melon' ]

//getting index of an element with value
const index = fruits.indexOf("Kiwi");
console.log(index);                    //3

//remove/pop middle elements from array
const removedFruit = fruits.splice(1, 2);   // splice(index, deleting element from index)
console.log(removedFruit);            //  [ 'Banana', 'Apple' ]
console.log(fruits);                  //  [ 'Mango', 'Kiwi', 'Melon' ]  - remaining fruits

//Iterate through and array
fruits.forEach((fruit, index)=>
{
    console.log(`${index} : ${fruit}`);
});
//0 : Mango
// 1 : Kiwi
// 2 : Melon
