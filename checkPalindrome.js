

 function isPalindrome(str){

    function reverseString(s){
       let reverse = "";

       for(let i=s.length-1;i>=0;i--){

         reverse += s[i]
       }
       return reverse;
    }
   
    const string = str.toLowerCase();

    return str === reverseString(str)

 }

 const output = isPalindrome("level")

 console.log(output)