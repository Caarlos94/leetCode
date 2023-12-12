/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/

function transformarCadena(cadena) {
  // Eliminar signos de puntuación y convertir a minúsculas
  const cadenaProcesada = cadena.replace(/[^\w\s]|_/g, "").toLowerCase();
  // Eliminar espacios y unir las palabras
  const resultado = cadenaProcesada.replace(/\s/g, "");
  return resultado;
}

var isPalindrome = function (s) {
  const validString = transformarCadena(s);
  return recursivePalindrome(validString);
};

const recursivePalindrome = (s) => {
  const firstChar = s[0];
  const lastChar = s[s.length - 1];
  if (firstChar !== lastChar) return false;
  if (s.length <= 1) return true;
  return recursivePalindrome(s.slice(1, s.length - 1));
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
