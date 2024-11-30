function filterString(value) {
  const toNumber = Array.from(value)

  
  const filterNumber =  toNumber?.filter((num)=> Number(num) === Number(num));
  const num = filterNumber.join('');
  return parseInt(num)
}
