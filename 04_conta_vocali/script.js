/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
 // 1) Funzione tradizionale
function countVowels(str){
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (let letter of str){
    if (vowels.includes(letter)){
      count++;
    }
}
  return count;
}
 //Arrow function
const countVowelsArrow = str => str
  .split('')
  .filter(char => 'aeiou'.includes(char.toLowerCase()))
  .length;

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));
console.log(countVowelsArrow(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)