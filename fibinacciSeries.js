
// create a fibanacci sereies upto n-numbers:

let init =[0,1];

let n = 6;

 for(let i=2;i<=n;i++){
   
     let temp = init[i-1] + init[i-2];
     
     init[i] = temp;
   
   }
   
  console.log(init)  //[ 0, 1, 1, 2, 3, 5, 8 ]