

 function count(str){

  let obj = {};

  for(let char of str){

     if(obj[char]){

        obj[char]++;
     }else{

        obj[char] = 1
     }
  }

    return obj;
}

 const output = count("pavunkumar")
 console.log(output)