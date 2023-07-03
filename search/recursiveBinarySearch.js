
function recBinarySearch(arr, target){

    return  binarySearch(arr, target,0,arr.length -1);
}



function binarySearch(arr, target, l, r){

      if(l>r){
        return -1;
      }

    let middle = Math.floor((l+r)/2);

      if(target == arr[middle]){
         return middle;
      }

     if(target<arr[middle]){
         return binarySearch(arr, target, l, middle-1);
     }
     else{
         return binarySearch(arr, target, middle+1, r);
     }
};

console.log(recBinarySearch([-5,2,4,6,10], 10));
console.log(recBinarySearch([-5,2,4,6,10], -9));