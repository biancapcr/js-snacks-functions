/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
 // 1) Funzione tradizionale
function filterByLetter(arr, letter){
  return arr.filter(function(word){ return word.startsWith(letter); });
}
 // 2) Arrow function
const filterByLetterArrow = (arr, letter) => 
  arr.filter(word => word.startsWith(letter));

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByLetter(names, 'A'));
console.log(filterByLetterArrow(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]