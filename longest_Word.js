

//  function longWord(str){
 
//     let min = 0;
//     let max = 0;
//     let arr = str.split(" ")
//     let res;

//     for(let i=0;i<arr.length;i++){
     
//          min = arr[i].length;

//         if(min > max){
            
//             max = min;
//             res = arr[i]
//         }
//        min = 0;
//     }
//      return res;
//  }

//  const output = longWord("I am pavun from tiruvannamalai")

//  console.log(output)




function longWord(str){
 

    let arr = str.split(" ")
    let res =""

    for(let i=0;i<arr.length;i++){
     
     if(arr[i].length > res.length){

        res = arr[i]
     }
   }
     return res;
 }

 const output = longWord("I am pavun from tiruvannamalai")

 console.log(output)