

function firstNonRepeatingChar(str){

   let obj = {}

   for(let char of str){

     if(obj[char]){
        obj[char] +=1
     }else{
        obj[char] = 1
     }
   }

   for(let char of str){
     if(obj[char] == 1){
        return char;
     }
   }

   return null;

}

const output = firstNonRepeatingChar("swiss")

console.log(output)