"use strict"

/*
Symbol is a datatype introduced specifically for debugging but not to access the symbol itself.
*/

/*
don't forget to define a variable in strict mode
in strict mode if you start using a variable without defining it
an error will be thrown
*/

var string1='What is your name';
var string2='What is your name';

var num1=12;
var num2=12;

// its can't be new'd
var symbol1 = Symbol(string1);
var symbol2 = Symbol(string2);

console.log(typeof symbol1); 

// to compare string symbols you need to convert them into string type and then compare
console.log(symbol1.toString()==symbol2.toString()); 

// numbers can be compared directly
console.log(num1===num2);
