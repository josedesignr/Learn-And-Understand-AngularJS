/* SCOPE AND INTERPOLATION */

/*
	Yes, I know... we still haven't written any visual AngularJS code.

	The visual examples are more exciting than console examples,
	but they were fundamental in order to understand how AngularJS works.

	And now that we understand what is happening in a controller,
	and how it's connected to the view, and how services are injected.
	Then we can really get into the fun stuff.

	First... what is interpolation?
	It's a technical term, which means "Creating a string combining strings and variables".

	For example:
	"My name is" +name (supposing that name is a variable that stores a name).
	And the result would be "My name is Jose"

	So, let's see how it works inside AngularJS
*/

var app = angular.module('myApp', []);

/*
	Until now we just have a "Hello World" in the html, but let's say we want to print our name
	instead of "World", and we want to send that name from here and not directly in the html.

	How do we get the data that we define here, into the HTML?
	If we were using jQuery, we might have to look at the h1 and adjust the h1's inner texts or use inner HTML to change that.

	But remember that using AngularJS, binds our controller to the part of the HTML that we set with the ng-controller.
*/
app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

	/*
		Remember that we can add variable names to our $scope, so let's add our name in there.
		And whatever sitting in the $scope, is available into the view that is attached to the controller.
	*/
	//--Here our name variable is added to the $scope. Then go to the index.html and see how to show it there.
	$scope.name = "Alvaro";

	/*
		And what if we want the name changes after some seconds? Let's do that.
		I have injected another Angular service, which is $timeout

		What $timeout does is running a function after certain amount of time.
	*/

	/* Here we are saying that after 3 seconds (3000 ms), run the internal function, 
		which changes the name variable to "Jose". */
	$timeout(function(){
		$scope.name = "Jose";
	}, 3000);

	/* 
		And as soon as that value changes, it will automatically know that must update the places
		where {{name}} is used, for the new value.
	*/ 
}]);
