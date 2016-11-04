
/* JAVASCRIPT ASIDE: DEPENDENCY INJECTION */

//-- Yes, everything that was done in AngularJS has been deleted again, because this is a JS Aside.


/*
	This is a really important, fundamental concept,
	and it's one of those things you are going to hear when people talk about AngularJS.

	You need to understand this before to move on to any other parts of AngularJS.

	Dependency Injection: Giving a function an object.
	In other words, rather than creating an object inside a function, you pass it to the function.

	Let's see an example:
*/

//-- First, we are going to define an object using a function.
//-- Remember that everything in JavaScript is a function, even objects are functions.
var Person = function(firstName, lastName){

	/* Inside Person we are going to say that Person has firstName and lastName
	and they are equal to what is received as argument. It's just a way of creating objects in JavaScript */
	this.firstName = firstName;
	this.lastName = lastName;
}

//--BAD PRACTICE: And then we are going to create a logPersn function...
function logPerson(){

	//-- And now we are going to create a new person.
	var john = new Person('John', 'Doe');
	console.log(john);
}

//-- And trigger the function.
logPerson();


/*
 Just like it is above, the logPerson function is dependent of the variable john which is inside.
 In other words, if something is going to change about John, it has to be inside the logPerson function,
 because the john variable lives there.
 And guess what? ...THAT'S BAD!

 We prefer not to do that. It turns to be a code really difficult to deal with.

 So, instead we are going to use DEPENDENCY INJECTION!

 Sounds complicated but it's not...
*/

//--GOOD PRACTICE: Let's repeat the logPerson function, but well done this time...

//-- First thing to do is remove john from inside the logPerson function, and pass a person object as argument into the function.
function logPersonGood( person ){

	console.log(person);
}

//--Then, we are going to create the person outside the function, and pass it to the function; like this:
var john = new Person('John', 'Doe');

//-- And trigger the new logPerson function...
logPersonGood(john);

/*
The result is the same, but in the second one we are 'injecting' the object instead of creating it inside the function.
It's pretty simple but is actually very important...

The new logPerson function is NOT dependent on how John is created.
John could be created, or being got from a database, o whatever we want to do to create John,
and the logPerson function does not care, it just need to receive a person, no matter how it was created.

logPersonGood is no longer dependent on John variable, as the first logPerson is.

This concept is very important because AngularJS uses dependency injection,
when it comes to its controllers and other instances.
It's a simple concept but enforces strong and stable architecture for your web applications.
*/