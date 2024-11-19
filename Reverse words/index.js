function reverseWords(str) {
  // Go for it
  return str.split(" ").map((item)=> item.split("").reverse().join("")).join(" ");
}
