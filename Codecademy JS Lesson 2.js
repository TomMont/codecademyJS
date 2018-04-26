// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);


//let variables can change where as constant variables cannot.
let changeMe = true;
let changeMe = false;
console.log(changeMe);

//if a variable isn't assigned a value, it's stored in memory as "undefined"
let notDefined;
console.log(notDefined);

let valueless;
console.log(valueless);

let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16

// Multiply and assign to particle below
particle *= 6.02

// Increment assay by 1
assay ++


//Use backticks and ${variableName} instead of the usual: ('I own a pet ' + myPet + '.') variable usage
let myName = 'Tom';
let myCity = 'Little Rock';
console.log(`My name is ${myName}.  My favorite city is ${myCity}.`);