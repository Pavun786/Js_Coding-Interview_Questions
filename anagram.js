

 function anagram(str1,str2){
   //to remove un-wanted space and convert to lowercase;
   str1 = str1.replace(/\s+/g,"").toLowerCase();
   str2 = str2.replace(/\s+/g,"").toLowerCase();

   if(str1.length !== str2.length){
      return false;
   }

   const freqObj1={};
   const freqObj2={};

   for(let char of str1){

     freqObj1[char] = (freqObj1[char] || 0) + 1
   }

   for(let char of str2){
     freqObj2[char] = (freqObj2[char] || 0) + 1
   }

   for(let char in freqObj1){
     
      if(freqObj1[char] != freqObj2[char]){
         return false;
      }
   }
   
   return true;

 }

 const output1 = anagram("silent","listen")
 const output2 = anagram("hello","world")


 console.log(output1)
 console.log(output2)
