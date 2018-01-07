"use strict"


var user='Awais';



// template litrals let us use varibles javascript raw functions inside string without concatination
// it also let us add move to next line without using any special character or concatination
var template = `<h1> ${user.toUpperCase()} This is the string number 1
This is the string number 2</h1><p>This is the string number 3</p>`;


console.log(template);


var elem = document.getElementById('template');
elem.innerHTML = template;