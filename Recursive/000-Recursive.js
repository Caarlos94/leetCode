const binaryNumber = (number, result) => {
  if (number === 0) return result;
  result = (number % 2) + result;
  return binaryNumber(Math.floor(number / 2), result);
};

console.log(binaryNumber(233, ""));

const sumOfNaturalNumbers = (number, result = 0) => {
  if (number === 0) return result;
  result += number;
  return sumOfNaturalNumbers(number - 1, result);
};

console.log(sumOfNaturalNumbers(10));

var reverseString = function (s) {
  if (s.length === 0) return s;
  return reverseString(s.slice(1)) + s[0];
};

console.log(reverseString("hello"));
