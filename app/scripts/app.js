/* CREATING A SERVICE */

var app = angular.module('myApp', ['ngRoute']);


//-- CONFIG ROUTES
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})
		.when('/second', {
			templateUrl: 'views/second.html',
			controller: 'secondController'
		})
		.otherwise('/');
});

/*
	Let's create our own custom service, using the utilities that AngularJS provides.
	So, the syntax for creating our own service, that is a Singleton object and will
	contain properties and functions or methods. It's pretty simple.

	It's going to be attached to 'myApp', does not pollute the Global Namespace that
	it's inside that app module. And we just do:
*/

app.service('nameService', [function(){

	
	var self = this;
	self.name = "John Doe";
	
	/*  Since 'this' only tracks the scope of each function, putting 'this'
		inside a var, clarifies that if I ask for 'self' inside the internal
		function, I am reffering to 'this' of the parent function.
	*/
	self.namelength = function(){
		return self.name.length;
	};
	
}]);

/*  WHAT WOULD I DO WITH A SERVICE?
	This is where you are taking advantage of single page applications.
	Remember that normally when you are dealing with JavaScript, if was
	to move from page to page, I would lose my JavaScript variables.

	But because I am inside a Single Page Application, even though I am
	navigating from a page to page; I am still inside the same JavaScript
	memory space. So that means I can share content across pages, as well
	as use the services to encapsulate functionality that I use across
	different controllers.

	Let's take a quick look at how would use this:
*/


//--CONTROLLERS

//-- Remember to inject the nameService as we have done before with Angular built-in services.
app.controller('mainController', ['$scope', 'nameService', function($scope, nameService) {

	/*  By doing that, we can now access to the properties in nameService
		and pass them to local controller $scope variables.
	*/
	$scope.name = nameService.name;

	//--Why do I need this $watch?
	/*
		if I just want to read value of nameService, it is not needed.
		But if I want to change values of nameService, I need this watch because
		changing the name model, is only going to change the value of $scope.name HERE.

		And if I go to another view and come back again here, the controller restarts,
		goes again to nameService and gives that value to $scope.name

		If we want that any change made in this model, affects the service too, we need to
		add a watch that modifies the name in nameService, with every change in $scope.name.

		BUT REMEMBER:
		If you modifies values or properties in nameService, since it's a singleton, you're
		going to change it wherever that value is called, even if it's in other controller.

		This is a powerful way to share data and services across different views (pages).
	*/
	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});

}]);


app.controller('secondController', ['$scope', 'nameService', function($scope, nameService){

	/* Look, this is another controller but it can also access the property name
		in the nameService because it is injected here too.
	*/
	$scope.name = nameService.name;

	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});

}]);


/* Another thing, when you're learning and reading about AngularJS, you'll hear about
	more than just services, you'll also hear about factories and providers.
	But we are not to cover factories and providers, because they are basically the 
	same thing, they are very similar enough that if you know how to use a service, you
	can learn how to use a factory very easily.
	Provider, you'll rarely have to use it.
	For most purposes, learning to use a service will be just fine.
*/