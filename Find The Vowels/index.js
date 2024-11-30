function vowelIndices(word){
  //your code here
   const vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
   const emptyArray = [];
   for(let i = 0; i < word.length; i++){
       const check =  vowels.includes(word[i])
       if(check){
           emptyArray.push(i+1);
       }
    
   }
 return emptyArray
  
}
vowelIndices("orange");
