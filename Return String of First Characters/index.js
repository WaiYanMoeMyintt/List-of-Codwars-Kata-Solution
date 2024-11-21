function makeString(s){

  const maybeArr  = s.split(" ").map((str)=> str.charAt(0))
  return maybeArr.join("");
}

makeString("Magic is real actual creative learning enviroment");
