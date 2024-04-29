// Isaiah Emmons
// 29 April 2024
// Evidence Array basics

// INPUT
const firstName =prompt("What is your Name?");
const creator = 'Isaiah Emmons';
const school = 'Elkrapids High School';



const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${month}-${day}-${year}`

const fantasyAnimals=[
    'Dragon',
    'Unicorn',
    'Centaur',
    'Minotaur',
    'Gorgon',
    'Hellhound',
    'Goblin',
    'platypus'
];
console.log(`HELLO ${firstName}!`);
console.log(`This code was made by ${creator} on ${currentDate}`);




const length = fantasyAnimals.length;
// OUTPUT

console.log('\n');

console.log(`This array is ${length} elements long`);

const animalsPopped = fantasyAnimals.pop();
console.log(`${animalsPopped} was removed from ${fantasyAnimals}`);


console.log('Adding Pegasus using the .push function to Fantasy Animals Array')
fantasyAnimals.push('Pegasus');

console.log(fantasyAnimals);


















