const firstRepeatChar = (array) => {
  const myObj = {};
  for (let i = 0; i < array.length; i++) {
    if (myObj[array[i]]) return array[i];
    else myObj[array[i]] = true;
  }
  return undefined;
};

console.log(firstRepeatChar([2, 5, 5, 2, 5, 8, 9, 3]));
