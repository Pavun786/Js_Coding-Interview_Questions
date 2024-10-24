


function findQuty(arr){
    
    let units={};
    let temp =0;
    let count=0;
    
    if(arr.length <=2){
      
       return 0; 
     }
    
    for(let i=0;i<arr.length;i++){
  
       if(i == arr.length-1){
          
          if(arr[i] == 0){
            
            units[`water-${i}`] = arr[i];
          }else{
            
             units[`wall-${i}`] = arr[i];
          
          }
          break; 
        }
       if(arr[i] != 0){
          
           temp = arr[i];
           
            units[`wall-${i}`] = arr[i];
           
            continue;
         }
         
         if(arr[i] == 0){
           
             count = count + temp;
             units[`water-${i}`] = temp;
           }
      }
      
      console.log(units)
      
      return count;
  
  }
   console.log(findQuty([0,4,0,0,0,6,0,6,4,0]))  //18
   console.log(findQuty([4,0]))  //0
   console.log(findQuty([1,0,0,0,2]))  //3