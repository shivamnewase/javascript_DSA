function binarySearch(arr, target){
 let l = 0;
 let r = arr.length -1;

//  l+r/2 = middle

  while (l<=r) {
     let middle = Math.floor((l+r)/2);

      if(target == arr[middle]){
        return middle;
      }
      if(target< arr[middle]){
        r = middle -1;
      }else{
        l = middle +1;
     }
    
  }

}

console.log(binarySearch([-5,2,4,6,10], 10))