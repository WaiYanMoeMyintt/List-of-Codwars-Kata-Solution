function findLongest(array){
  // code here
   const largest =  array.sort((a,b)=> String(b).length  - String(a).length).slice(0,1);
   return Number(largest);
   
}
findLongest([9000, 8, 800]);
