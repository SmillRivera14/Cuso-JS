let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
}; 
  
const capFave = spaceship.crew.captain['favorite foods'][0];

spaceship.passengers = [
    {Nombre:"Ramon", Apellido:"Sosa" }, {Nombre: "LeBron", Apellido: "James", Altura: "2.06 m"}, {Nombre:"Carlos", Apellido:"Rivera"}
];


const firstPassenger = spaceship.passengers[0];

console.log(capFave);
console.log(spaceship.passengers);
console.log(firstPassenger);

