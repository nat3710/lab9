// Question 1

let characters=['Harry', 'Hermione', 'Ron', 'Draco', 'Luna',];
for ( let i= 1; i<=5; i++);{
console.log(characters[i]);
}

// Question 2

let Firstname= 'Harry';
let house= 'Gryffindor';
console.log('Welcome, ${firstName,} of ${house} !');

//Question 3

let characterName= 'Hermione';
console.log(characterName. toLowerCase());
console.log(characterName. toUpperCase());

//Question 4

let spell= 'Expelliarmus' ;
console.log (spell.trim ());

//Question 5

let quote= 'I solemnly swear that I am up to no good';
console.log(quote. slice(9,15));

// Question 6

let firstName= 'Ron';
let lastName= 'Weasley';
console.log(firstName.concat(lastName));

//Question 7

let sentence= 'Draco is a good wizard';
console.log(sentence.replace('good', 'bad'));

//Question 8

let houses= ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop ();
console.log(houses);

//Question 9

let spells= ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

//Question 10

let professors= ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let newProfs= professors.slice(1,3);
console.log(newProfs);

//Question 11

let students=  ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1,2);
console.log(students);

//Question 12

let phrase= 'Mischief Managed';
let result= phrase.trim().toLowerCase().concat('- Harry');
console.log(result);

//Question 13

let wizards= ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

//Question 14

let message= 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let Hogwarts= message.slice(11, 19). concat('Castle');
console.log(Hogwarts);


















