/* @, =, AND OTHER OBTUSE SYMBOLS: PART 3 */

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
	This is very important, it could be a bit confusing but I'll try  to explain in detail.

	As we saw in last lesson, a Directive is a piece of HTML that we put in an independant file,
	in order to be reused in several places, no matter controllers or in which view you place it.

	This is a great advantage, but it also can be dangerous because, since the Directive is a
	piece o HTML that is placed at any place that we want to put it, you perfectly can put the
	same directive in two different views (each with a different controller), and it's valid.

	The problem comes when, for example, you put the same directive in 2 different views,
	like, putting <search-result></search-result> in home.html ('/') and second.html ('/second')
	Those two views have their own controller ($scope), and, since the directive (a piece oh HTML)
	is inside the view, it can also access the controller of the view where the directive is included.

	That can be great, but if the directive is going to do things to the items and elements on the
	scope, it's going to set changes in the parent controller. (the view where the directive is placed)
	And this, perhaps, can cause an unexpected and unwished behavior.

	AngularJS provide us a way to avoid this, by giving to the directive its own scope, so it will
	not mess with the parent scope where the directive is placed. Let's see:
*/


//--DIRECTIVES:
app.directive('searchResult', function(){

	return {
		templateUrl: 'directives/search-result.html',
		restrict: 'AECM',
		replace: true,
		
		/*  By setting the scope property here into the directive, it will look only in this
			isolated scope and not to other scopes.
			So, it doesn't matter where is placed, it won't take the parent's scope, but this one.  
		*/
		scope: {
			//-- The = symbol is explained in the previous lesson.
			personObject: "=",
			/*  What if we had a function on the scope of the controller, that is defining the template
				that contains the directive, and what if we want to have access to it.
				Well, if we want to access a function that is in the parent scope, we need to use 
				the & symbol.
			*/
			formattedAddress: "&"
		}	
	}
});


//--CONTROLLERS
app.controller('mainController', ['$scope', function($scope) {
	
	$scope.person = {
		name: 'John Doe',
		address: '555 Main St',
		city: 'Ney York',
		state: 'NY',
		zip: '11111'
	};

	//--Let's suppose that we want to access this function in the isolated scope of the directive 
	$scope.joinAddress = function(person){
		return person.address + ', ' + person.city + '. ' + person.state + ' ' + person.zip;
	};

}]);

app.controller('secondController', ['$scope', function($scope){

	$scope.person = {
		name: 'Jane Doe',
		address: '26th Roadway',
		city: 'Miami',
		state: 'FL',
		zip: '33166'
	};

	$scope.joinAddress = function(person){
		return person.address + ', ' + person.city + '. ' + person.state + ' ' + person.zip;
	};

}]);

/*
	Notice that mainController and secondController, both have the person property, but with 
	different values, and depending on what view you have selected, it shows the right values.

	The function joinAddress is just the same in both.
*/

