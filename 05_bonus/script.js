/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
// 1) Funzione tradizionale
function greetByTime(userName){
  const hour = new Date().getHours();
  let greeting;
  if (hour < 13){
    greeting = 'Buongiorno';
} 
  else if (hour < 17){
    greeting = 'Buon pomeriggio';
}
 else{
    greeting = 'Buonasera';
}
  return `${greeting} ${userName}.`;
}

// 2) Arrow function
const greetByTimeArrow = userName => {
  const hour = new Date().getHours();
  let greeting;
  if (hour < 13){
    greeting = 'Buongiorno';
} 
  else if (hour < 17){
    greeting = 'Buon pomeriggio';
} 
  else{
    greeting = 'Buonasera';
}
  return `${greeting} ${userName}.`;
};
// Invoca la funzione qui e stampa il risultato in console
console.log(greetByTime(name));
console.log(greetByTimeArrow(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.