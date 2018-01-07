"use strict"
/*
1-generators are the functions that can be paused and then can be resumed 
at each pause i can yeild a value back
2-generator functions has the same syntax as normal functions the only 
difference is adding '*' 
*/
function *gen_function(){

	console.log('1st msg!');
		yield 'First returned value';
	
	console.log('2nd msg!');
		yield 'Second returned value';
	
	console.log('3rd msg!');
		yield 'Third returned value';

	console.log('4th msg!');	
		yield 'Forth returned value'; 
		return 'Generator function Ended on return';

}
// one just cannot directly call the generator function
// gen_function();


// we need a referer to access what is inside a generator
var gen =gen_function();

/*
// we next use 'next()' for each next yielded value
// it is going to return an object with first yeild value with done 'false' enwrapped in an object
console.log(gen.next());

// second value and done 'false'
console.log(gen.next());

// third value and done 'false'
console.log(gen.next());

// forth returned value and done 'true'
console.log(gen.next());

// end returned value and done 'true'
console.log(gen.next());
*/

// lets itrate over the functions's yielded values using 'for of' loop
for(let gval of gen){
	console.log(gval);
}