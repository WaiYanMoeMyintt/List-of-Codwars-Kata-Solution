function squareSum(numbers){
    if(numbers.length > 0){
      return numbers.map(items => items * items).reduce((a,b)=> a + b)
    }
    return 0;
  
}
