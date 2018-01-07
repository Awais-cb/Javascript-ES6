"use strict"

// set object let us store unique 'value' of any type 
// can be premitive value or object refrence
let arr = [12,34,11,56,34];
let myset=new Set(arr);
console.log(myset);

// adding up new values in set
myset.add('12');
myset.add(100);
myset.add({a:12,b:5});
console.log(myset);

// removing value from set
myset.delete(34);
console.log(myset);

// removing all values from set
// myset.clear();
// console.log(myset);

myset.add(34);
console.log(myset);
console.log(myset.size);

// Getting all elements from set using an iterator
myset.forEach( function(val) {
	console.log(val);
});


// map object let us store unique 'key value pair' of any type just like 'hashes' of 'redis'
// can be premitive value or object refrence (key should be unique)
var arr1=['a1','Hello this is first string'];
var arr2=['b2','Hello this is second string'];

var mymap=new Map([arr1,arr2]);
console.log(mymap);

// Adding up key pair value in a map
mymap.set(1,'Same key value 1');
console.log(mymap);

mymap.set(1,'same key value 2');
console.log(mymap);

// deleting value from a map
mymap.delete('a1');
console.log(mymap);
// returns the map size
console.log(mymap.size);


// weakset object let us store 'objects' only 
// can be object or object refrence
let myWeakSet= new WeakSet();

var car1 = {
	make:'honda',
	model:'civic'
}
// adding key pair value into weakset
myWeakSet.add(car1);
console.log(myWeakSet);


var car2 = {
	make:'skoda',
	model:'lauda'
}
myWeakSet.add(car2);
console.log(myWeakSet);

// deleting weakset value
myWeakSet.delete(car1);
console.log(myWeakSet);



// weakmap object let us store 'object key pair value' only 
// can be object or object refrence (key will also be an object)
var myWeakMap = new WeakMap();

var key1={
	id:1
}
var car11={
	make:'honda',
	model:'city'
}
// adding key pair value into weakmap
myWeakMap.set(key1,car11);
console.log(myWeakMap);


var key2={
	id:2
}
var car12={
	make:'skoda',
	model:'lauda'
}

// adding key pair value into weakmap
myWeakMap.set(key2,car12);
console.log(myWeakMap);

// deleting key pair value from weakmap
myWeakMap.delete(key1);
console.log(myWeakMap);
