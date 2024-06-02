var summation = function (num) {
  let arr = [];
  for(let i = 0; i <= num; i++){
      arr.push(i);
  }
  return arr.reduce((a,b)=>{
      return a + b;
  })
}
