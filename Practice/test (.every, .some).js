/**
every - Array.prototype.every(callback(element, index, array), thisArg):

Devuelve true si todos los elementos del array cumplen con la condición especificada por la función de retorno de llamada.
Si al menos un elemento no cumple la condición, devuelve false.
Ejemplo: Verificar si todos los elementos de un array son mayores que 0.

some - Array.prototype.some(callback(element, index, array), thisArg):

Devuelve true si al menos un elemento del array cumple con la condición especificada por la función de retorno de llamada.
Devuelve false si ninguno de los elementos cumple la condición.
Ejemplo: Verificar si al menos un elemento de un array es negativo.
*/

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(element=> element.length>5);

// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every((word) => {
  return word.length>5 }));
