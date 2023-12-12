const lengthOfLastWord = (str) => {
  const lastWord = str.trim().split(" ").pop();
  return lastWord.length;
};

console.log(lengthOfLastWord("  fly me   to   the moon "));
