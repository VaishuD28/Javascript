//approch 1 using in built reverse method
// 

function string_rev(str)
{
    return str.split("").reverse().join("");

}

console.log(string_rev("playwright with javscript discussion"));   //noissucsid tpircsvaj htiw thgirwyalp

function word_rev_in_sentence(str)
{
    return str.split(" ").reverse().join("");   //giving space means splitting words not letters
}

console.log(word_rev_in_sentence("Automation - playwright"));   //playwright-Automation



// // approach 2  using for loop


function string_loop(str)
{
    let reversed = "";
    for (const char of str)
    {
       reversed = char+reversed;  // "S" + "" = S, "t"+S = ts, "a"+ts = ats ....
    }
    return reversed;
}

console.log(string_loop("Start your career"));   //reerac ruoy tratS


function for_loop_string(str)
{
    let result="";
    
    for( var i=str.length-1; i>=0; i--)   
    {
        result +=str[i];
        
    }
    return result;
}

console.log(for_loop_string("Automation playwright"));   //thgirwyalp noitamotuA


// //approach 3 using reduce method

const str = "QA automation engineer course"

let reverse_str = str.split("").reduce((acc, char) => char + acc, " ");

console.log("3rd approach");   
console.log(reverse_str);  //esruoc reenigne noitamotua AQ