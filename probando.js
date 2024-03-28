let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
  
console.log(matriz[2]);
console.log(`\n${matriz[2][1]}`);

list = [0,11,2,3,4,5];

for(let contador =0; contador < list.length; contador++){
  console.log(list[contador]);
}

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((element) =>{ 
return element === "elephant"});

console.log(foundAnimal);
