function findDisappearedNumbers(arr) {
  
    let n = arr.length;
    
    let res =[];
    
    let seen = new Array(n).fill(false)
    
    for(let i=0;i<arr.length;i++){

      // here all values have index as value-1;
      //so,write seen[arr[i]-1]
      
       seen[arr[i]-1] = true;   
       
    }   
     
     for(let j=0;j<seen.length;j++){
       
       if(!seen[j]){
         
         res.push(j+1)  
       }
       
     }
     
     return res;
   
 }
 let arr = [4, 3, 2, 7, 8, 2, 3, 1];
 console.log(findDisappearedNumbers(arr));