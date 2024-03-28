const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

console.log(plantNeedsWater('Wednesday'));

/**
 * función flecha con operador ternaroi.
 * función como expresión: identificador --> función --> parametros
 * 
 * Las funciones que toman un solo parámetro no necesitan que ese   *parámetro esté entre paréntesis. Sin embargo, si una función toma cero *o varios parámetros, se requieren paréntesis.
 * zero parameters
 * const functionName = () => {};
 * one parameter
 * const functionName = paramOne =>{};
 * Two or more parameters
 * const functionName = (paramOne, paramTwo) =>{};
 * 
*/

/**
 *Un cuerpo de función compuesto por un bloque de una sola línea no *necesita llaves. Sin las llaves, lo que sea que evalúe esa línea se *devolverá automáticamente. El contenido del bloque debe seguir *inmediatamente a la flecha y la palabra clave se puede eliminar. Esto *se conoce como retorno implícito. => return

  SINGLE LINE BLOCK
  const sumNumbers = number => number+number;

  MULTI-LINE BLOCK
  const sumNumbers = number =>{
    const sum = number + number;
    return sum;
  }
*/
