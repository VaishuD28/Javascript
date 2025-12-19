// //anagram

// function palindrome()
// {
//     let str = "Sahas"
//     var new_str = str.toLowerCase().split("").reverse().join("")

//     return str.toLowerCase() == new_str;
// }

// console.log(palindrome());

// function anagram(str1, str2, str3)
// {
//     return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
// }

// console.log(anagram("silent", "listen"));



function isPalindrome(str)
{
    let result  = str.toLowerCase();   
    let expected = str.toLowerCase().split("").reverse().join("");
    return expected === result;
}

console.log(isPalindrome("Madam"));
