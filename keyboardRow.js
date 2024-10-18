// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]



function find(arr) {

    let row1 = "qwertyuiop".split("")
    let row2 = "asdfghjkl".split("")
    let row3 = "zxcvbnm".split("")

    let result = [];

  for(let i=0;i<arr.length;i++){
    
    
      let res = arr[i].toLowerCase().split("");
     
      let count1 = 0;
      let count2 = 0;
      let count3 = 0;
      
      for(let j=0;j<res.length;j++){
        
          if(row1.includes(res[j])){
            
              count1 = count1 +1;
          }
          
          else if(row2.includes(res[j])){
            
            
              count2 = count2 +1
          }
          
          else if(row3.includes(res[j])){
            
            
               count3 = count3 +1
           }
      
      }
      
      if(count1 == res.length){
        
         
         result.push(arr[i])
        
      }
      else if(count2 == res.length){
        
          result.push(arr[i])
        
      }
      
      else if(count3 == res.length){
        
           result.push(arr[i])
        
      }
      
      count1 =0;
      count2 =0;
      count3 =0;
      
    
  }
  
    return result;
};

console.log(find(["Hello","Alaska","Dad","Peace"]))  //["Alaska","Dad"]