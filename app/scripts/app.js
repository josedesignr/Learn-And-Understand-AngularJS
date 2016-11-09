/* ROUTING, TEMPLATES AND CONTROLLERS */

/*
	The way AngularJS constructs Single Page Applications involves several
	fundamental concepts and we are going to discuss those now.
*/

var app = angular.module('myApp', ['ngRoute']);

app.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {

	//--Remember what we did in last lesson to get the hash? The Angular service $location does the same.
	$log.info($location.path());

	/* 
		This console.log is just to let you know that Angular already has a way to get the hash
		and since the hash is a key part of its structure, it also has a module that allows us
		to define which view should be shown depending on the route (fragment identifier).

		This module is ngRoute, which doesn't come in the AngularJS core, so we need to download it
		from angularjs.org, import it in the HTML (see there), and inject it in the main module ('myApp')
	*/
}]);

//-- Once the ngRoute is injected in the 'myApp' module. HOW DOES IT WORK?

//--First, we have to set a config, which receives a function, which receives a $routeProvider.
app.config(function($routeProvider) {

	//--$routeProvider watches the hash, in order to search matches with the routes created by us.
	$routeProvider

	//--The when() method has the route that we create, and an object with certain properties.
	.when('/', {

		/*  One of the properties is templateUrl, which in other words is saying:
			When my website is www.myapp.com/#/ show the HTML that is stored in views/home.html
		*/
		templateUrl: 'views/home.html',
		
		/*  Another property is controller, that sets which controller binds to the view
			that we defined above (home.html)
			This is the same as putting an ng-controller at the very first tag of home.html
			But it's a best practice to set the controller here.
		*/
		controller: 'mainController'
	})
	//-- We can create as many routes as we want, setting a view and a controller for each one.
	//-- For example, when my route is www.myapp.com/#/second, is going to show second.html
	.when('/second', {
		templateUrl: 'views/second.html',
		controller: 'secondController'
	})

	/*  This works very well but... What happen if we don't know exactly which route would it be?

		For example, what if the hash is not going to be a constant, but it's going to depend
		on the logged user?
		www.myapp.com/#/alvarojose when Alvaro Jose is logs in,
		but www.myapp.com/#/johndoe when Jhon Doe logs in.

		To resolve that, we can also define routes with parameters. Let's see how it works.
	*/
	//--By putting : and a parameter name (in this case username), we say that username is variable.
	.when('/second/:username', {
		templateUrl: 'views/second.html',
		controller: 'secondController'
	})
});

//--Now let's create the secondController, and since we have a route with parameters, we must inject $routeParams
app.controller('secondController', ['$scope', '$routeParams', function($scope, $routeParams){

	//-- Here we're extracting the parameter from the url, and giving that value to a variable in the $scope.
	//-- The || 'none' is optional, it means that if there's no parameter, but only www.myapp.com/second then set the variable to 'none'
	$scope.username = $routeParams.username || 'none';

}]);
