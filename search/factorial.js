

function factorial(n){
    let result =1;
   for(i=2;i<=n;i++){
        result = result *i
   }
    return result;
}



 let x =factorial(5);
 console.log(x);