//Method-1:

// function interSection(arr1,arr2){

//  let temp =[];

//  for(let i=0;i<arr1.length;i++){

//     if(arr2.includes(arr1[i]) && !temp.includes(arr1[i])){
//         temp.push(arr1[i])
//     }
//  }
//   return temp;
// }

// const output = interSection([1,2,2,1],[2,2])
// const output2 = interSection([4,9,5],[9,4,9,8,4])

// console.log(output)
// console.log(output2)


//Method - 2 :

 function interSection(arr1,arr2){

   const set1 = new Set(arr1)

   const res = arr2.filter((item)=> set1.has(item))

   return [...new Set(res)]

 }

 console.log(interSection([4,9,5],[9,4,9,8,4]))  //[9,4]