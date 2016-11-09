/* SINGLETONS AND SERVICES */

/*
	When you hear the term Angular Services, you immediately hear the term "Singletons".
	SINGLETON:
	The one and ONLY copy of an object, it's a pattern in object oriented programming, and it means
	that I only have one of that object, ever.

	For example: We might in the code have a person object and then, elsewhere in the code
	instanciate or create copies of that person object (like a Jose object, Steve object, etc).

	BUT, with a singleton, there is ONLY ONE.
	whenever you ask for the object, you are never getting a copy, you are getting the one and only object.

	AngularJS services are implemented as singletons. Let's prove that:
*/

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
		/* This is something I forgot to include in last lesson
			the otherwise() method, is used by the routeProvier
			when none of the previous routes matches.
			Normally, the otherwise, goes to the '/' or home. 
		*/
		.otherwise('/');
});

//--CONTROLLERS
app.controller('mainController', ['$scope', '$log', function($scope, $log) {

	//-- If we add a property to the $log service.
	$log.myProperty = "Property from Main Controller";

	$log.log($log);
}]);


app.controller('secondController', ['$scope', '$log', function($scope, $log){

	//--And we add another property to the $log service from this controller...
	$log.anotherProperty = "Property from Second Controller";

	$log.log($log);
}]);

/*
	We can enter to both pages and check the logs, you will see that both properties are added to the same $log object.

	But, wait a minute...
	If all the Angular Services are singletons and all the created properties goes to the same singleton.

	HOW IS POSIBLE THAT $scope WORKS IN THE WAY IT DOES?
	Well, that is an exception. $scope is the only Angular module that is not a Singleton,
	actually the Singleton is $rootScope and the different $scope across the app, are childs.
*/

