let arr ="hello world"
 let res = arr.split(" ")
 let temp =[]
 
  for(let i=0;i<res.length;i++){
    
      let splt = res[i].split("")

          splt[0] = splt[0].toUpperCase();
      
          temp.push(splt.join(""))
      }
   
      console.log(temp.join(" "))  //Hello World