/* NG-MODEL AND TWO-WAY DATA BINDING */

/*
	It's time to get a handle on one of, if not the most important topic
	when it comes to learning and understanding AngularJS: Directives, and Two-Way Data Binding.

	If you have heard or read anything abot AngularJS, you probably have heard the term "directive",
	It's used all the time, and it sounds really complex, but it really isn't as complicated as it sounds.

	IMPORTANT CONCEPT:
	Directive: An instruction to AngularJS to manipulate a piece of the DOM.
	(this could be "add a class", 'hide this', 'create this', etc...)
	There are a lot of directives that AngularJS has created for us, we already used two of them:
	ng-controller and ng-app, but there are much more.
	* ng-class: to add or remove a class from an element depending on some condition.
	* ng-show: shows an element if a condition is met.
	* ng-hide: hides an element if a condition is met.
	* ng-if: removes an element from the DOM is a condition is not met.
	* ng-repeat: iterates across an array or object (like a for), so it creates as much elements as an array has, but in the HTML you just need to create one pair of tags.
	* ng-model: binds data from here to the html, and any change made here or in the html, changes also in the other side

	There are much more directives, but ng-model is one of the most powerful ones, and that is the one we are going to use in this lesson.

	If you have done a little bit of JavaScript or jQuery you may have manually changed what was going on in the DOM,
	(Document Object Model) that is a representation in memory of the HTML.

	AngularJS prefers that we use directives, because it makes it much more powerful and flexible.
*/

var app = angular.module('myApp', []);


app.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

	//--First we create a property in the $scope, which starts empty.
	$scope.account = "";

	//--This is not necessary, it's just to show how we can also call functions in a interpolation in the HTML. (See there)
	$scope.accountInLowercase = function(){

		//--Here we are passing whatever value of $scope.account, and converting it to lowercase.
		return $filter('lowercase')($scope.account);
	};

}]);