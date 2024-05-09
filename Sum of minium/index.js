function sumOfMinimums(arr) {
   const parentArray = [];
    for(let i = 0; i < arr.length; i++){
         const sortOfArray = Math.min(...arr[i])
         parentArray.push(sortOfArray)
         
    }
   return parentArray.reduce((a,b)=> a + b)
   
}
