"use strict"

// promise object represent an operation that isn't completed yet but expected to be done in the future

// immidiately ressolved promise
/*
var myPromise = Promise.resolve('foo');
myPromise.then((response)=> console.log(response));
*/

// a little bit complex promise
/*
var myPromise1 = new Promise(function(resolve,reject){
	setTimeout(() => resolve(4),2000);
});

myPromise1.then((response)=>{
	response+=3;
	console.log(response);
});
*/

// lets use promise for somthing actually helpfull
function getData (method,url) {
	 
	return new Promise(function (resolve,reject) {
		var xhr = new XMLHttpRequest();
		xhr.open(method,url);
		xhr.onload=function () {
			if(this.status >= 200 && this.status < 300){
				resolve(this.response);
			}else{
				reject({
					status:this.status,
					statusText:this.status
				});

			}
		}

		xhr.onerror = function () {
				reject({
					status:this.status,
					statusText:this.status
				});			
		};
		xhr.send();
	});

}


getData('GET','http://jsonplaceholder.typicode.com/todos').then(function (data) {
	let todos = JSON.parse(data);
	let output = '';
	
	for(let todo of todos){
		output +=`<h2>${todo.title}</h2>
		<p>${todo.completed}</p>
		`;
	}
	document.getElementById('html_page').innerHTML=output;
	// console.log(data);
	
}).catch(function (err) {
	// catching errors
	console.log(err);
});

