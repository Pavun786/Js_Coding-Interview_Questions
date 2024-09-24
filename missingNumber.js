//By sum formula method:

function MissingNumber(arr){

    let n = arr.length + 1;

    let totalSum = (n*(n+1))/2

    let arraySum = arr.reduce((acc,cv)=> acc+cv,0)

    return totalSum-arraySum;

}

const output = MissingNumber([1,2,4,5])
console.log(output)