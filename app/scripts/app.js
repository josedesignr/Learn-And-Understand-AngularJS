
/* THE SCOPE SERVICE */

/*
	Scope is one of the most important concepts/functionalities within AngularJS.
	It's a big part of the thing that binds the Model to the View, it's calle Scope,
	and it's an object from something called the Scope Service, which is part of te core Angular modules.

	Let's see how it works
*/


var app = angular.module('myApp', []);

//-- This is what we had before, but now, let's pass inside the function, an object called $scope.
app.controller('mainController', function($scope) {


	/* We have not defined $scope anywhere, we just passed it to the function.
	   So you might be thinking that the console would not print anything, 
	   but check what you get if you print $scope in console...
	*/
		console.log($scope);
	//-- It's a really complex object, built-in by Angular, but we don't need to care about that complexity.
	
	//-- We just need to know that we can store our own properties, into the $scope, like this:
	$scope.name = " Alvaro Jose";
	$scope.role = "Web UI Developer";

	//-- We can even add functions:
	$scope.getName = function(){
		return "Alvaro Jose";
	};

	//--Now if we print it again, we will see the same object, but now includes our 2 variables and our function in its properties.
	console.log($scope);

	/*
	The Scope becomes the piece between the View and the Controller.
	It means that, now, those variables and function, are also linked to the piece of HTML
	that we selected to give the ng-controller.
	So now, if we want to include the value stored in $scope.name, in our HTML, we can just call it. (we will see later how) 
	*/
});

/*
	Let's understand why $scope works before to move on, explained in pure JavaScript.
	Passing things to controllers is a fundamental concept that we need to understand.
*/

	//-- Let's create a brand new function, called searchPeople, with a bunch of parameters inside.
	//-- This is just another way to create functions, this syntax is called "function expression". (store the function in a variable).
	var searchPeople = function(firstName, lastName, height, age, role){

		return 'Jane Doe';

	}
	//--And then let's log it to the console:

	//-- A. If I invoke the function, by adding a pair of parentheses beside the function's name...
	console.log(searchPeople());
	//-- I will see "Jane Doe" in console.

	//-- B. If I log only searchPeople, without invoking it...
	console.log(searchPeople);
	//-- I will see a String with the whole function (all what is after the '=' sign), in console.

	/*
		Yes, you can take a function in JavaScript and convert it to a String just like that.
		It is the same as convert it to String by yourself

		To prove it, you can do this:
			
			var searchPeopleString = searchPeople.toString();
			console.log(searchPeopleString);
		
		And it will print exactly the same as above.

		Why is that important?

		That means that, if you can take any function in JavaScript and get its String representation,
		So you can pass a whole function, as an argument into another function!

		Angular takes this concept to use dependency injection with its services as $scope or others.
	*/

	/*
		Extra tip:
		We could also have made a normal function like this:
		
		function searchPeople(firstName, lastName, height, age, role){
			return 'Jane Doe';
		}
		...and it would be the same. Just know that you can create functions in both ways.
	*/