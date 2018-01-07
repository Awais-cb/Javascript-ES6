"use strict"

// lets have a look how and why map is being used
var numbers = [4, 9, 16, 25];
myFunction(numbers);
function myFunction(numbers) {
   numbers.map(function(x){
   		// used to modify each element of an array
    	console.log(x+=x);
    	// return x+=x;
    });
}



// basically arrow function will fix 'this' scope
// it let us use lexical 'this'
function suffixer (sufix) {
	this.sufix=sufix;
}
suffixer.prototype.suffixArray = function(arr){
	 // before arrow function we needed a refrer to use 'this' 
	let thisisthis=this;
	 // x is each element one by one
	return arr.map(function (x) {
		console.log(x+" "+thisisthis.sufix);
	});
};
let suf=new suffixer('Hello ');
suf.suffixArray(['Brad','asim','faizan']);


// here is how to fix 'this' scope with arrow function
function prefixer(prefix) {
	this.prefix=prefix;
}
prefixer.prototype.arrayParser = function(arr) {
	 // 'this' refrer got commented
	 // var thisprefix=this;
	 return arr.map( (x)=> {
	 	// so now arrow function is jallowing us to use lexical(static in current scope 'this')
	 	console.log(this.prefix+" "+x);
	 });
};
var pre = new prefixer('Hello lala ki jan');
pre.arrayParser(['Aslam','Akhter']);


// Another simpler example of arrow function saving some key strokes :D
var add =  (num1,num2) => {
	return console.log(num1+num2);
}
add(8,8);







