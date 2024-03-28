function randomNumber(n){
   return Math.floor(Math.random() * n);
}

function edadRandom(n, min = 11) {
    return Math.floor(Math.random() * (n - min) + min);
}

let horaLlegada = randomNumber(2);
let registeredEarly = horaLlegada;
let edad = edadRandom(80);
let numeroCarrera=0;

//Es mayor y llegó temprano, número mayor a 1000
if(edad > 18 && registeredEarly == true){
  numeroCarrera = randomNumber(1000) + 1000;
  console.log(`Edad: ${edad}\nCorrerá a las 9:30 am\nNúmero carrera: ${numeroCarrera}`);
} 

//es menor y no llego temprano número menor de 1000
else if(edad > 18 && registeredEarly == false){
    //inferior a 1000
    numeroCarrera = randomNumber(999)
    console.log(`Edad: ${edad}\nCorrerá a las 11:00 am\nNúmero carrera: ${numeroCarrera}`);
}

//jovenes
else if(edad < 18 && registeredEarly == false){
    //inferior a 1000
    numeroCarrera = randomNumber(999)
    console.log(`Edad: ${edad}\nCorrerá a las 12:30 p.m\nNúmero carrera: ${numeroCarrera}`);
}

else if(edad < 18 && registeredEarly == true){
    console.log(`Edad: ${edad}\nCorrerá a las 12:30 p.m\nNúmero carrera: ${numeroCarrera}`);
}

else if(edad == 18){
    console.log(`Pasa a la recepción`);
}

else{
    console.log(`Salio falso\nEdad: ${edad}\nRegistro de llegada: ${registeredEarly}`)
}