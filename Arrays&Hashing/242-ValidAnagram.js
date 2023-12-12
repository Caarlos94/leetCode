/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.  */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i] === t[j]) {
        result++;
        t = t.replace(t[j], "");
        break;
      }
    }
  }
  return result === s.length;
};

// OPCION 2 - USANDO MAPAS ES MÁS EFICIENTE
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;
  const charCount = new Map();
  for (let i = 0; i < s.length; i++) {
    // Incrementar el contador para la cadena s
    charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    // Decrementar el contador para la cadena t
    charCount.set(t[i], (charCount.get(t[i]) || 0) - 1);
  }
  // Verificar si todos los contadores son cero
  for (let count of charCount.values()) {
    if (count !== 0) return false;
  }
  return true;
};

console.log(isAnagram2("anagram", "nagaram"));
// Input: s = "aacc", t = "ccac"              false
// Input: s = "anagram", t = "nagaram"      true
