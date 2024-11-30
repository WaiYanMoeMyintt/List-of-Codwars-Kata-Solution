function minValue(values){
   const value =  values.filter((num,index)=> index === values.indexOf(num)).sort().join('');
   return parseInt(value);
}
minValue([1,2,8,4,8,6,9,3]);
