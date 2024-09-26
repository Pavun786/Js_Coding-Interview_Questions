
// function debounce(func,delay){

//   let timeoutId;

//   return function (...args){
   
//     if(timeoutId) clearTimeout(timeoutId);  //here clear previous timeout

//     timeoutId = setTimeout(()=>{     //create new timeout
       
//         func.apply(this,args)
    
//     },delay)

//   }

// }


// function search(query){

//   console.log("Searching-for :",query)
// }


// const debounceSearch = debounce(search,2000)

// debounceSearch("apple")
// debounceSearch("mango")
// debounceSearch("orange")   //This only execute,after delay


//=========================================================


// In JavaScript, debounce is a technique used to limit the rate at which a function gets executed. 
// It ensures that a function is called only after a specified delay, 
// and only if it hasn't been called again within that delay period.


// e.g: Search input-fields: To prevent making a search request on every keypress, 
// debounce is used to make the request only after the user has stopped typing.



function debounce(func, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);  // Clear the previous timer
      timer = setTimeout(() => func.apply(this, args), delay);  // Start a new timer
    };
  }
  
  // Usage: log input only after the user has stopped typing for 500ms
  const processChange = debounce((event) => {
    console.log(event.target.value);
  }, 500);
  
  document.getElementById("inputField").addEventListener("input", processChange);
  