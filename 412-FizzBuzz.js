const fizzBuzz = (num) => {
  const newArray = [];
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) newArray[i - 1] = "FizzBuzz";
    else if (i % 3 === 0) newArray[i - 1] = "Fizz";
    else if (i % 5 === 0) newArray[i - 1] = "Buzz";
    else newArray[i - 1] = i + "";
  }
  return newArray;
};

console.log(fizzBuzz(15));
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
