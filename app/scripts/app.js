
/* GETTING OTHER SERVICES: PART 1*/

/*
	We have learned about the $scope service, but there are several others that can be used in the same way.
	If you go to the AngularJS page, in the API section, you will see the list of services that are available for you.

	Services as:
	$scope, $animate, $http, $q, $location, $log, $timeout, and many others.
*/

//-- Let's see for example, how to use the $log service.

var app = angular.module('myApp', []);

//-- Notice that I injected another services ($log, $filter) as argument of the function
app.controller('mainController', function($scope, $log, $filter) {

	//-- If we print $log, we will see that it's an object with several methods. (debug, error, info, log, warn)
	console.log($log);

	//-- Now that $log has been injected, let's use it.
	$log.log("This is a normal console.log, but using the $log service.");
	$log.info("This is useful for logging information in console.");
	$log.debug("This is useful for logging debugging messages in console.");
	$log.error("This is useful for logging error messages in console.");
	$log.warn("This is useful for logging warning messages in console.");

	//-- Now, let's try $filter.

	//-- First, I declared a variable name (stored in $scope), equal to a string.
	$scope.name = "Jose";

	/* 
	Then, I created another variable, which equal to the same variable above,
	but before that, is passed by an 'uppercase' filter (built-in) of the $filter service.
	*/
	$scope.formattedName = $filter('uppercase')($scope.name);

	//--Now if we print both variables, we well see 'Jose', and 'JOSE'.
	$log.info($scope.name);
	$log.info($scope.formattedName);
});

/*
	And just like that, we used three services inside our controller,
	and we can use any other of the Angular services, just by passing the name into the controller.
	Thanks to Dependency Injection.
*/