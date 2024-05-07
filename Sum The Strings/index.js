function sumStr(a,b) {

   if(a === "" && b === ""){
       return "0"
   }

   else if(a === "" || b === ""){
       return a || b
   }
      const stringA = parseInt(a);
   const stringB = parseInt(b);

   const results = stringA + stringB;
   return results.toString()

}

sumStr("2","")
