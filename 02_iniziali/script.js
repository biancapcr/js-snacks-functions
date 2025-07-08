/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
  // 1) Funzione tradizionale
  function getInitials(arr){
  const result = [];
  for (let i = 0; i < arr.length; i++){
     result.push(arr[i][0]);
  }
  return result;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]