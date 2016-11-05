/* DEPENDENCY INJECTION AND MINIFICATION */

/*
	Up to this point, we've come to understand how AngularJS does dependency injection.
	But actually, that is one of two ways that AngularJS does dependency injection.
	The seconnd one involves not only dependency injection, but also minification of JavaScript files.

	But, what is minification?
	Shrinking the size of files for faster download.
	Every file that you find with .min, means that has been minified.
*/

var app = angular.module('myApp', []);

/*
	Until now, we have been working with controllers in this way, and everything has worked just fine.
	But, in real scenarios, it is very common to minify files.
	So, let's suppose we have this controller, and we minify it.
*/

//-- BAD PRACTICE
app.controller('mainController', function($scope, $log) {
	$log.info($scope);
});

/*
	What minification does, is remove spaces and change variable names for only one character.
	And that's where we get into a bit of trouble with AngularJS's Dependency Injection.
	This is how we would have our controller, minified:

		app.controller('mainController',function(a,b){b.info(a)});

	It removed all the spaces, and renamed $scope for an 'a', and $log for a 'b'.

	And this is a problem for AngularJS because it needs the exact names of its services in order to identify them.
	When the minifier changed those names, it broke the Dependency Injection, because Angular doesn't recognize 'a' and 'b'

	So what do we do about that?
	Well, they already thought about that, and provided a second way to define controllers.

	And, since it is supossed that we are going to minify our files in every real project.

	From this point forward, we are always going to use the following method.
*/

//-- GOOD PRACTICE: 
/* Remember last lesson we learned that a JavaScript array allows strings and functions in the same array?
	Well, we learned that, for this.
	Now, instead of passing directly the function to the controller,
	we are gonna pass an array, with the names of the services as strings, and then, the function with the services injected normally.
	IMPORTANT:
	Keep the strings order, the same as the injected services.
	So when it's minified, it doesn't matter if the minifier changes the services names for a and b
	Because the strings won't be changed, and Angular is gonna recognize that the first string, corresponds to the first letter, and so on.
*/

app.controller('mainControllerWell', ['$scope', '$log', function($scope, $log) {
	$log.info($scope);
}]);
