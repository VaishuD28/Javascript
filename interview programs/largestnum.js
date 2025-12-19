function findlargest(arr)
{
    let largest =arr[0];
    for(var i=1; i<arr.length; i++)
    {
        if(arr[i] > largest)
            largest = arr[i];
    }
    return largest;

}

console.log(findlargest([2, 5, 3, 8, 4, 10, 1]));

//using math.max

function findmax(arr)
{
    return Math.max(...arr);
}

console.log(findmax([2, 5, 3, 8, 4, 10, 1]));

// sing reduce

function findLargest(arr) {
  return arr.reduce((max, val) => {
    return val > max ? val : max;
  }, arr[0]);
}

console.log(findLargest([2,5,3,8,4,10,1]));


