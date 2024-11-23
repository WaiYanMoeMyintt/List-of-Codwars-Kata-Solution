// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
   const sortArray = ages.sort((a,b)=> b - a);
 
 return sortArray.slice(0,2).reverse();
}
twoOldestAges([1,5,87,45,8,8]);
