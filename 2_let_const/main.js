"use strict"

//var a = 'Test1';
//let b = 'Test2';

// const remains constant within scope
const abc = "any string";

function testVar(){
  // 'var' has a function level or class level scope
  var a = 30;
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}
function testLet(){
  // 'let' has a block level scope
  let a = 30;
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}
for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log(i);


/*
const colors = [];

colors.push('red');
colors.push('blue');

colors = 'Green';

console.log(colors);
*/