


 function rotateArray(arr1,k){

     let res = arr1.splice(arr1.length-k,k)
     
     return [...res,...arr1];
 }

 const output = rotateArray([1,2,3,4,5,6,7],1)
 console.log(output)