const palindromeNumber = (number) => {
  if (number < 0) return false;
  const strNum = number.toString();
  return recursivePalindrome(strNum);
};

const recursivePalindrome = (str) => {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return recursivePalindrome(str.slice(1, str.length - 1));
};

console.log(palindromeNumber(0));
