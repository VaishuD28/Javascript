function countVowels(str)
{
    let vowels = ["a", "e", "i","o","u"];
    let count = 0;

    for( const char of str.toLowerCase())
    {
        if(vowels.includes(char))
            count++;
    }
    return count;

}

console.log(countVowels("Playwright automation"));

function vowels(str)
{
    let vowels = ["a", "e", "i","o","u"];
   
    return str.toLowerCase().split("").reduce((acc, char) => 
        {
            if(vowels.includes(char))
            {
                 acc++;
            }
            return acc;
        }, 0);
}

console.log(vowels("Playwright automation"));

const vowelCount = str =>
  [...str.toLowerCase()].filter(c => "aeiou".includes(c)).length;

console.log(vowelCount("Playwright automation"));
