/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
// 1) Funzione tradizionale
function hello(name){
  return `Ciao ${name}`;
}

// 2) Arrow function
const helloArrow = name => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(hello(userName));   
console.log(helloArrow(userName)); 

//Risultato atteso se si passa 'Mario': // ciao Mario
