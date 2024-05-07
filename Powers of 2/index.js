function powersOfTwo(n){

  const arr  = [];

  for(let i = 0; i <= n; i++){
       const number = Math.pow(2,i);
       arr.push(number)
    
  }
  return arr;
}
