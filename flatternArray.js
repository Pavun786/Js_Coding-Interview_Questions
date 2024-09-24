
//  function flattern(arr){
 
//     let res =[];

//     for(let i=0;i<arr.length;i++){

//         if(typeof arr[i] == "number" ){
//             res.push(arr[i])
//         }else{
//             let foo = flattern(arr[i])
//             res = [ ...res,...foo]
//         }
//     }
   
//     return res

//  }

//  const output = flattern([1,[2,[3,4],5],6,[7,[8,9]]])

//  console.log(output)




function flattern(arr){
 
    let res =[];

    for(let i=0;i<arr.length;i++){
      
       if(Array.isArray(arr[i]) ){
            
           res = res.concat(flattern(arr[i]))
            
        }else{
           
           res.push(arr[i]) 
        }
    }
   
    return res

}

const output = flattern([1,[2,[3,4],5],6,[7,[8,9]]])

console.log(output)