

function modify(str){
     
    let arr = str.split(" ")
    
    let temp=[];
    
    for(let i=0;i<arr.length;i++){
      
     
      let res = arr[i][0].toUpperCase();
      
      let remain = arr[i].slice(1)
      
      let final = [res,...remain]
      
     temp.push(final.join(""))
      
      
    }
    
    return temp.join(" ")
    
  }
  
  console.log(modify("hello guvi"))   //"Hello Guvi"