let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below
function greenEnergy(object) {
    object['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
    obj.disabled = true
}


remotelyDisable(spaceship);

greenEnergy(spaceship);

console.log(spaceship);

function randomNumber(n) {
    return Math.floor(Math.random() * n);
}

const cara = 'cara';
const cruz = 'cruz';

for (let i = 0; i < 10; i++) {
    let result = randomNumber(1);

    salida = result === 1 ? cara : cruz;

    console.log(`Esto es salida: ${salida}`)

}
