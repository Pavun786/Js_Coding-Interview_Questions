//LeetNo:496


function nextGreater(nums1, nums2) {

    
    let res =[];
    
    for(let i=0;i<nums1.length;i++){
      
        let find = nums2.indexOf(nums1[i])
        
        let arr2 = nums2.slice(find)
        
        for(let j=0;j<arr2.length;j++){
          
           if(nums1[i] < arr2[j]){
           
            res.push(arr2[j]);
            
            break;
          
          }else{
            
             if( j == arr2.length-1){
               
               res.push(-1)  
              }
           }
          
        }
    }
    
       return res;
    };

  console.log(nextGreater([4,1,2],[1,3,4,2]))     //  [ -1, 3, -1 ]  