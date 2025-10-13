//3. What is the difference between var, const, and let? Explain with an example.
// var is a function-scoped or globally-scoped and can be re-used/declared and updated 

function varExample()
{
    var x=4; //global declaration
    if(true)
    {
        x=8;
        x=10;
        console.log(x); // 10
    }
    console.log(x); // updates to 10 because it updates outside the block through out the function 
}
console.log("Var example answers : ");
//varExample();

//if nothing is declared by default it is considered as var
//let - it is a block-scoped variable, it can be updated but not re-declared within the same scope

function letExample()
{
    let x=3;
    if(true)
    {
        let x=6;
        console.log(x);//  6 ---it will be specific only to this block, and does not update outside this block
         y=2;
      console.log(y); //2
         
    }
    x=4;
    console.log(y);  //2
    console.log(x); //4  -- updated 
}
console.log("Let example answers : ");
//letExample();

//const - it is constant - block scoped  and cannot be updated or re-declared outside scope

function constExample()
{
    const x=18;
    if(true)
    {
       const x=11;
        console.log(x); //11
    }
    
    console.log(x); 18
}
console.log("Const example answers :");
constExample();


