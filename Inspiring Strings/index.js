function longestWord(stringOfWords) {
    const str = stringOfWords.split(" ");
    const sortedArray = str.sort((a, b) => {
        if (b.length === a.length) {
            return str.indexOf(b) - str.indexOf(a);
        } else {
            return b.length - a.length;
        }
    });
    return sortedArray[0];
}
