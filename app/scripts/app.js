
/* Multiple Controllers and Multiple Views */

/*
	Until now, we had everything in only one controller,
	but we can have as many controllers attached to views, as we want.

	So let's duplicate our controller and name the copy as "secondController",
	then we are going to go to the index.html and assign the secondController
	to another part of the HTML.
*/

var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope) {

	$scope.name = "Main";

}]);


app.controller('secondController', ['$scope', function($scope) {

	$scope.name = "Second";

}]);

/*
	Why $scope.name in secondController does not override the $scope.name in mainController?

	Well, by injecting $scope in each controller, AngularJS gives us a BRAND NEW version
	of the $scope object, for each time that we request it in a separate controller.

	So, the $scope in mainController is diferent than the $scope in secondController,
	and does not matter if we call them the same, it will just create a 'name' property
	in each $scope, separately.

	Each $scope is unique to each controller.
	In other words, $scope.name in mainController has nothing to do 
	with $scope.name in secondController, because they are different $scopes.
*/