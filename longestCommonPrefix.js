

 function longPrefix(str){

    let arr = str.split(" ");
    let count = 0;
    let length = arr.length-1;
    let temp=[];

    for(let i=0;i<arr[0].length;i++){
       
          for(let j=0;j<arr.length;j++){
             
             if(arr[i] == arr[j]){
                count = count + 1
             }
          }

         if(count == length){
            temp.push(arr[i])
         }else{
            return temp;
         }

        count = 0; 
    }
  
    return temp;
 }

 const output = longPrefix("flower flow flight")

 console.log(output)





//Method-2:

// substring is used to extract part of string
// let str = "Hello, World!";
// let result = str.substring(0, 5);  // "Hello"
// console.log(result);

// function longPrefix(strs){

//    if(strs.length == 0) return ""; 

//   let prefix = strs[0]

//   for(let i=1;i<strs.length;i++){

//     while(strs[i].indexOf(prefix) !== 0){

//         prefix = prefix.substring(0,prefix.length-1);

//         if(prefix === "") return ""
//     }

//   }

//   return prefix;

// }

// const output = longPrefix(["flower","flow","flight"])

// console.log(output)