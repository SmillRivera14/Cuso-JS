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
  
  const startsWithS = animals.findIndex(element => element.includes('s'));
  
  console.log(startsWithS);
  
//primer elemento que contenga la letra S y devolverá su índice  