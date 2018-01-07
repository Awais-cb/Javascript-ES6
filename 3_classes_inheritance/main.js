"use strict"

// That's how you create a class in ES6 first letter is a must to be capital
class User{

	// constructor of 'User class'
	constructor(username,email,pass){
		// assigning variables as properties for class
		// these properties are going to be static or lexical within their scope
		this.username=username;
		this.email=email;
		this.password=pass;
	}

	// definition of a static method
	static welcomeMessage(){
		console.log('Welcome to ES6');
	}

	// definition of a normal method
	displayUserDetails(){
		console.log(this.username+" "+this.email+" "+this.password);
	}

	static ping(){
		return 'Ping';
	}

}


// instantiating class and calling method
var user1= new User('Awais','awaisfiazit@gmail.com','12345');
user1.displayUserDetails();


// call to static method which actually don't need an instance to be called
User.welcomeMessage();


// child class 'Member' inheriting parent class 'User'
class Member extends User{
	constructor(username,email,password,packageName){
		// calling the parent constructor intiating its properties we defined above in constructor
		super(username,email,password);
		this.packageName=packageName;
	}

	displayMemberMessage(){
		console.log("From member class : "+this.username+" has taken "+this.packageName);
	}

	static pong(){
		return 'Pong';
	}

	static pingpong(){
		// using parent class method with method of current class into method of another current class method
		// keep in mind each one of these method is static
		let pp = super.ping() +" "+ this.pong();
		console.log(pp);
	}
}

var mem = new Member('Aslam','aslam@gmail.com','123','thisPackage');
mem.displayMemberMessage();
// running an inherited function from parent class
mem.displayUserDetails();
// calling static method
Member.welcomeMessage();
Member.pingpong();