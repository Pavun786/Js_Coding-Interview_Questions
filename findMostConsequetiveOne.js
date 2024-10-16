function findOnes(arr) {

    let count =0;
 
     let res=[]
 
  for(let i=0;i<arr.length;i++){
    
      if(arr[i] == 1){
        
        count = count +1; 
     
     }else{
        res.push(count)
        count =0;    
     }
    
    }
    
    res.push(count)
    
    return Math.max(...res)
     
 };
 console.log(findOnes([1,1,0,1,1,1])) //3