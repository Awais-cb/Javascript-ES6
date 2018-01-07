"use strict"

let theString = 'Hello, my name is xyz and I love JavaScript';

// startsWith()
// endsWith()
// includes()

// checks if a string starts with 'Hello'
console.log(theString.startsWith('Hello'));
// checks if a string ends with 'JavaScript'
console.log(theString.endsWith('JavaScript'));
// check if love is included into string
console.log(theString.includes('love'));

//Hex
//console.log(0xFF);
// Binary
//console.log(0b101011);
// Octal
//console.log(0o543);

console.log(isFinite(NaN));
console.log(isNaN('string'));
console.log(Number.isInteger(Infinity));
console.log(typeof Infinity);