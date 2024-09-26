

const obj = {
    name : "John",
    age : 30,
    address :{
        city : "New york",
        zip : 10001
    },
    hobbies : ["reading","gaming"],
    greet : function (){
        console.log("Hello..!")
    }
}

const cloneObj = {...obj}

obj.age = 40;

obj.address.city = "London"

console.log(cloneObj.age)  // age: 30
console.log(obj.age)      // age: 40   
                           
console.log(cloneObj.address.city)  //  city : "London"
console.log(obj.address.city)       // city : "London"

// from the above code,the nested array or objects are changed in cloneObj when modify original obj .
// bcz,its a shallow copy..not a deep clone

function deepClone(obj){

    if(obj == null || typeof obj !== "object"){
        return obj;
    }
     //Handle Array:
     if(Array.isArray(obj)){
       
        const arrCopy =[];
       
        for(let i=0;i<obj.length;i++){
            arrCopy[i] = deepClone(obj[i])
        }
        return arrCopy;
    }

    //Handle object:
    const objCopy = {};
    for(const key in obj){                    // It execute first,then its check each key type and push to objCopy
        if(obj.hasOwnProperty(key)){
            objCopy[key] = deepClone(obj[key])
        }
    }
    return objCopy;
}

const clonedObj = deepClone(obj)

obj.address.city = "London";
obj.hobbies.push("Swimming")

console.log(clonedObj.address.city)   //"New york"
console.log(obj.address.city)         //"London"

console.log(clonedObj.hobbies)  //[ 'reading', 'gaming' ]
console.log(obj.hobbies)      //[ 'reading', 'gaming', 'Swimming' ]