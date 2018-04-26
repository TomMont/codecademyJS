//This creates the variable Kelvin as a constant and assigns the value 294
const kelvin = 294;

//This line of code creates variable celsius which is 273 less than kelvin
let celsius = kelvin - 273;

let newton = celsius * (33/100)
newton = Math.floor(newton)

//This line of code creates variable fahrenheit using the calculation
let fahrenheit = celsius * (9/5) + 32

//This rounds the fahrenheit variable down
fahrenheit = Math.floor(fahrenheit)

//This prints out the original Kelvin variable degree as fahrenheit
console.log('The Temperature is ' + fahrenheit + ' degrees Farenheit.')

//This prints out the original Kelvin variable degree as celsuis
console.log('The Temperature is ' + celsius + ' degrees Celsius')

//This prints out the original Kelvin variable degree as newton
console.log('The Temperature is ' + newton + ' degrees Newton')