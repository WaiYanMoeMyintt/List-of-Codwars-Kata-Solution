function removeSmallest(numbers) {
    const smlNumber = Math.min(...numbers);
    const indexNum  = numbers.indexOf(smlNumber)
    if(numbers.length !== 0){
       return numbers.filter((item,index)=>{
            return index !== indexNum
       })
    }
  return [];
}
removeSmallest([2,2,1,2,]);
