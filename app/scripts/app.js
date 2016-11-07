var app = angular.module('myApp', []);


app.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

}]);


//-- Forget about this AngularJS code, this will be another JavaScript Aside, just pure JS.


/* JAVASCRIPT ASIDE: THE EVENT LOOP */

/*
	We are going to talk about the event loop. and how events are happening
	and working inside JavaScript.
	And that will help us understand how AngularJS takes advange of them.
*/

//-- This is pure JavaScript...

//--Let's create a variable and say that we want to look for an element with ID "name"
var myVar = document.getElementById("name");

//--This console is just to test if it was found.
console.log(myVar);


/* 
	Now, we are going to create something called "Event Listener", which basically,
	as its name says, is listening if some specific event is thrown; in this case,
	it will be listening every time we press a key on the "name" input.
	And when it happens, will trigger the function, which in this case is just a console.log.
	No only once, but every time that the event occurs, the function gets invoked.
	That is the Event Loop.

	With JavaScript or jQuery, you have to listen for events manually (as it is here),
	AngularJS on the other hand, takes advantage on those events to keep track of things for you.
*/
myVar.addEventListener("keypress", function(event){
	console.log("Pressed!");
});

