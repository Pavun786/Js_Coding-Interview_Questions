function secondLarge(arr){
    
    
    if(arr.length < 2){
      
       return "array must be contain morethan 1 elements"
     
     }
     
     let large = -Infinity;
     let secondLarge = -Infinity;
     
     for(let i=0;i<arr.length;i++){
       
       
        if(arr[i] >large){
          
          secondLarge = large;
          
          large = arr[i]
          
       }else if(arr[i] < large && arr[i] > secondLarge){
         
           secondLarge = arr[i]
         }
       
       }
   
     return secondLarge;
   }
   
 console.log(secondLarge([1,2,3,4,5]))  //4