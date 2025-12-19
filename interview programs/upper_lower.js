function toggleCase(str)
{
    let result ="";

    for(const char of str)
    {
        if(char >= 'a' && char <= 'z')
        {
            result += char.toUpperCase();
        }
        else if(char >= 'A' && char <= 'Z')
        {
            result += char.toLowerCase();
        }
        else
        {
            result += char;
        }
    }
    return result;
}

console.log(toggleCase("HelLo WOrdL*"));


//map method
