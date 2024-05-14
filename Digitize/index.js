function digitize(n) {
    let arr = [];
    const toArray = String(n).split(" ").join(",");
    for(let i = 0; i < toArray.length; i++){
       arr.push(toArray[i])
    };
   return arr.map(Number);
}
