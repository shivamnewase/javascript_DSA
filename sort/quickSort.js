// function quickSort(arr){

//     let pivot =arr[arr.length-1];
//     let left =[];
//     let right = [];

//     for(let i =0; i<arr.length-1; i++)
//         {
//             if(arr[i]< pivot){
//                 left.push(arr[i])
//             }else{
//                  right.push(arr[i])
//             }
//         }
//         return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let arr = [8, 20, -2, 4, -6];

// quickSort(arr);

// console.log(arr);


function quickSort(arr){

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    
     for(let i=0;i<arr.length-1; i++){
       
       if(arr[i] < pivot){
          left.push(arr[i])
       }else{
          right.push(arr[i])
       }
     }
     
     return [...quickSort(left), pivot, ...quickSort(right)];
   
   }
   
   
   let arr = [8, 20, -2, 4, -6];
   quickSort(arr);
   console.log(arr);