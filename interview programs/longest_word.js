
function longest_word(sentence)
{
    //split the sentence into words
    let words = sentence.split(" ");   ["I", "am","learning", "javascript"]
    let longestWord ="";  //empty
    for( const word of words)
    {
        if(word.length> longestWord.length)
            longestWord = word;
    }


    return longestWord;
}

console.log(longest_word("I am understanding javascript learning"));  // understanding

function word_reduce(sentence)
{
    return sentence.split(" ").reduce((longest, word) => word.length > longest.length ? longest : word, "");
}

console.log("2nd method")
console.log(longest_word("I am understanding javascript learning"));   //understanding