
  function climbStaircase(n){

    const noOfWays = [1, 2];

    for(i =2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
    }
    return noOfWays[n -1];
  }


  console.log(climbStaircase(1));
  console.log(climbStaircase(2));
  console.log(climbStaircase(3));
  console.log(climbStaircase(4));
  console.log(climbStaircase(5));