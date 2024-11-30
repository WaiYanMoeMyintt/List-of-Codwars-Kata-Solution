function sumTwoSmallestNumbers(numbers) {  
  //Code here
    return numbers.sort((a,b)=> a - b).slice(0,2).reduce((a,b)=> a + b);
    
}
sumTwoSmallestNumbers([52, 76, 14, 12, 4])
