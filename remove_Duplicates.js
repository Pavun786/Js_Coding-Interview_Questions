//Method -1 : using filter and indexOf

//indexOf return the first index value

function removeDuplicates(arr){

    return arr.filter((value,index,self)=> self.indexOf(value) == index)

}

const output = removeDuplicates([1,2,2,3,3,4,5,6,6])

console.log(output)


//Method -2 : Using Reduce method
// [] is passed as argument to reduce method
// here unique is that [] array

function remove(arr){

  return arr.reduce((unique,item)=>{
     return unique.includes(item) ? unique : [...unique,item]
  },[])  

}

const result = remove([10,2,2,3,7,2,6,10])
console.log(result)