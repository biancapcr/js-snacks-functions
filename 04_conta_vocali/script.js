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

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)