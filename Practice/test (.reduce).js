/**
 * En JavaScript, el método `reduce` se utiliza para reducir los elementos de un array a un único valor. Itera sobre cada elemento del array, aplicando una función de retorno de llamada (callback) que proporcionas, y acumula el resultado.

La sintaxis del método `reduce` es la siguiente:

array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

- `callback`: Una función que se llama para cada elemento en el array. Toma cuatro parámetros:
  - `accumulator`: El resultado acumulado de las llamadas previas al callback.
  - `currentValue`: El elemento actual que se está procesando en el array.
  - `currentIndex` (opcional): El índice del elemento actual que se está procesando.
  - `array` (opcional): El array en el que se llamó a `reduce`.

- `initialValue` (opcional): Un valor inicial para el `accumulator`. Si se proporciona, el método `reduce` usará esto como el valor inicial del `accumulator` para la primera invocación del callback. Si no se proporciona, el primer elemento del array se utilizará como valor inicial del `accumulator`.

Aquí tienes un ejemplo simple de cómo usar `reduce` para sumar un array de números:

```javascript
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0);

console.log(suma); // Salida: 15
```
*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((acumulador,valorActual)=>{
  console.log(acumulador);
  return acumulador + valorActual;
},0);

console.log(newSum);