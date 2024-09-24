

 function check(str){

    let stack =[];

    for(let char of str){

       if(char == "("){
         
           stack.push("(")
       
        }else if( char == ")"){
         
            if(stack.length == 0){
            return false;
         }
         stack.pop()
       }
    }

    return stack.length == 0;
 }

 const output = check("(())")
 const output2 = check("(()")
 const output3 = check(")(")

 console.log(output)
 console.log(output2)
 console.log(output3)