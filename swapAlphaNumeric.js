function isAplha(str){
    const regex=/^[A-Za-z0-9]$/
    
    return regex.test(str);
    }
    
    
    function reverse(str){
    const arr=str.split("");
    let left=0;
    let right=arr.length-1;
    
    while(left<right){
      
        if(!isAplha(arr[left])){
           left++;
        }else if(!isAplha(arr[right])){
            right--;
        } else {
    
       [arr[left],arr[right]]=[arr[right],arr[left]];
       left++;
       right--;
        
    }      
        
    }
    
        return arr.join("");
    }
    
    
    console.log(reverse("Hello, World! 123"));   //321dl, roWol! leH