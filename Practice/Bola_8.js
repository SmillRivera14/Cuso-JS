let username = '';
let defaultName = username || 'Default name';
let userQuestion = '¿Qué hacer?';

console.log(`${defaultName} dijo ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8);

// Declarar la variable para almacenar la respuesta
let eightBallResponse;

// Utilizar una estructura de control para asignar la respuesta según el número aleatorio
switch (randomNumber) {
    case 0:
        eightBallResponse = 'It is certain';
        break;
    case 1:
        eightBallResponse = 'It is decidedly so';
        break;
    case 2:
        eightBallResponse = 'Reply hazy try again';
        break;
    case 3:
        eightBallResponse = 'Cannot predict now';
        break;
    case 4:
        eightBallResponse = 'Do not count on it';
        break;
    case 5:
        eightBallResponse = 'My sources say no';
        break;
    case 6:
        eightBallResponse = 'Outlook not so good';
        break;
    case 7:
        eightBallResponse = 'Signs point to yes';
        break;
    default:
        eightBallResponse = 'Error: Invalid random number';
}

console.log(eightBallResponse)
