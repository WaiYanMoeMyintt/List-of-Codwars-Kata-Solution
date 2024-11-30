var number=function(array){
   const arr = [];
    for(let i = 0; i < array.length; i++){
        const list =  array[i];
        const item = `${i + 1}: ${list}`;
        arr.push(item)
    }
    return arr;
}
number(["a","b","c","d","e"])
