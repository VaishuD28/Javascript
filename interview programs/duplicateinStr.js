
//find duplictaes with count
let str = "Automation";
let strLower = str.toLowerCase();
let duplicateStr = {};

for (let char of strLower)
{
    if(duplicateStr[char])
    {
        duplicateStr[char] = (duplicateStr[char] || 0)+1;   // or duplicateStr[char] +=1;
    }
    else{
        duplicateStr[char] =1;
    }
}
// till here it can be used to find frequency of all characters

// to find only duplicates with count


for(let char in duplicateStr)
{
    if(duplicateStr[char] > 1)
    {
        console.log(char, duplicateStr[char]);
    }
}


//find only duplicates no count

let string = "Programming".toLowerCase();

const seen = new Set();   //seen stores characters we have already encountered
//Set automatically stores unique values only

const dup = new Set();   //dup stores characters that appear more than once

for(let ch of string)
{
    if(seen.has(ch))   // If character is already in seen, it means: we add it to dup
    {
        dup.add(ch);
    }
    else{
        seen.add(ch);   // If character is seen for the first time , Add it to seen
    }
}

console.log([...dup]);

//using spread operator and reduce

let str1 = "automation";
const duplicates = [...str1].reduce((acc, char) =>
{
    acc[char]= (acc[char] || 0) +1;
    return acc;

}, {});

console.log(duplicates);

/// till here it can be used to find frequency of all characters

for(let char in duplicates)
{
    if(duplicates[char] >1)
    {
        console.log(char, duplicates[char]);
    }
}