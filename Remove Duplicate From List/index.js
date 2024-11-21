function distinct(a) {
  const getList =  a.filter((number,index) => a.indexOf(number) === index);
  return getList;
}
distinct([1,1,2,4,6]);
