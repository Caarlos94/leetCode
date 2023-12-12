const longestWord = (str) => {
  const arrayOfWords = str.split(/\s+/);
  const myObj = {};
  let indexLongest = -1;
  let maxLength = -1;

  for (let i = 0; i < arrayOfWords.length; i++) {
    myObj[i] = arrayOfWords[i].length;
  }

  for (const [key, value] of Object.entries(myObj)) {
    if (value > maxLength) {
      indexLongest = key;
      maxLength = value;
    }
  }

  return arrayOfWords[indexLongest];
};

console.log(longestWord("fun&!! time"));

// **************************** EJEMPLO USANDO REDUCE
const longestWord2 = (str) => {
  const arrayOfWords = str.split("");
  const longest = arrayOfWords.reduce(
    (prev, current) => (prev.length > current.length ? prev : current),
    ""
  );
  return longest;
};
