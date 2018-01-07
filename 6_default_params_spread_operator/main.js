"use strict"
/*
//ES6 allows use to use default parameter value just like php
function greet($greeting = 'Hello World'){
  console.log($greeting);
}
greet();
*/

// ES6 spread operator example
let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
  console.log(args1+','+args2);
}
// older way
// test.apply(null, args1,args1);
// new way
test(...args1,...args2);