
let string = "hello world"


function reverse(str){

  let reverseWord = ""

   for(let i=str.length-1;i>=0;i--){

    reverseWord += str[i]

   }

   return reverseWord;

}

const output =reverse(string)

console.log(output)

