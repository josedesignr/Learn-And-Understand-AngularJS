
/* COMMON DIRECTIVES */

/*
	We have seen ng-app, ng-controller and ng-model so far.
	But there are lots of others in AngularJS.

	So, let's look at some common directives that come built in to AngularJS.

	Let's suppose that we want our Twitter acoount to be exactly five characters.
	(It's not a very realistic requirement, but it's going to show us what the various directives that are built into AngularJS can do)

*/
var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope) {

	$scope.account = '';

	//--So first, let's create a new variable into the scope called characters.
	$scope.characters = 5;
	//-- This will be the exact amount of characters that we want in our Twitter account.
	//-- Next steps are in index.html, go there and see.

	/*
		I have created this array called rules (can be any other name),
		and inside there are objects with rule names that I have just invented.
		This is to show you the ng-repeat in the HTML, go there and see.
	*/
	$scope.rules = [
		{ rulename: "Must be 5 characters long" },
		{ rulename: "Must be unique" },
		{ rulename: "Must be fancy" },
		{ rulename: "Any other rule" }
	]

}]);
