//using set method

function duplicateElements(arr)
{
    return [...new Set(arr)];

}

console.log(duplicateElements([1,2,3,4,4,5,6,6,7]));


//using for loop, indexOf and push methods
function duplicateArray(arr)
{
    const uniqueElement = [];

    for(let i=0; i< arr.length; i++)
    {
        if(uniqueElement.indexOf(arr[i]) === -1)  //If the current value is not already in uniqueElement, then add it. 
                                                // if it is present arr[4] = 3 coz already 4 is present in 3 index so 3 === -1(not equal)
        {                                   //If the value is not found → index will be -1
            uniqueElement.push(arr[i]);
        }
    }
    return uniqueElement;

}

console.log(duplicateArray([1,2,3,4,4,5,6,6,7]));


//using reduce method

function removeDuplicate(arr)
{

    return arr.reduce((acc, val) =>
         {
        if(!acc.includes(val))   // acc =[] intial empty arr. checks val is not included it pushes to the acc
            acc.push(val);
        return acc;
    }, []);
  
}

console.log(removeDuplicate([1,2,3,4,4,5,6,6,7]));