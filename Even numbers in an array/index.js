function evenNumbers(array, number) {
  const arrayFilter =  array.filter(even=> even % 2 === 0);
  return arrayFilter.slice(-number)
  
  
}
