
//method-1

//  function rotateArray(arr1,k){

//      let res = arr1.splice(arr1.length-k,k)
     
//      return [...res,...arr1];
//  }

//  const output = rotateArray([1,2,3,4,5,6,7],3)
//  console.log(output)


//Method-2:

// The line k = k % arr.length is necessary to handle cases where k, the number of positions to rotate, is larger than the length of the array. 
// This line ensures that the rotation amount is within the bounds of the array's length.

// For example:

// If the array has 5 elements and you want to rotate it by 7 positions, 
// you don't need to rotate it 7 times since rotating by 5 (the array's length) brings it back to the original state. 
// The modulo operation (k % arr.length) reduces k to the minimum number of effective rotations. 
// In this case, 7 % 5 = 2, so rotating by 7 positions is equivalent to rotating by 2 positions.

function rotateArray(arr,k){

     k = k % arr.length;

    reverse(arr,0,arr.length-1)

    reverse(arr,0,k-1)

    reverse(arr,k,arr.length-1)

    return arr;
}



function reverse(arr,start,end){

    while(start < end){

        [arr[start],arr[end]] = [arr[end],arr[start]];

        start++;
        end--;
    }

}

console.log(rotateArray([1,2,3,4,5],7))