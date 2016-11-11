/* RENDERING CUSTOM DIRECTIVES WITH ng-repeat */

/*
	This lesson is very short, here we just changed the person object to be an array of persons.
	We defined it in a service, so we do not have to repeat the same in both controllers.
	Afterwards, we injected our service into the controllers to be able to use the data.
	And lastly, we implemented ng-repeat in our directive (see home.html and second.html),
	in order to iterate over each person a render a different person with each iteration.
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
		.otherwise('/');
});

//--SERVICES:
/*
	This service was created in order to avoid repeating the same array and function in both controllers.
*/
app.service('peopleService', function(){
	
	var self = this;
	self.people = [
		{
			name: 'John Doe',
			address: '555 Main St',
			city: 'Ney York',
			state: 'NY',
			zip: '11111'
		},
		{
			name: 'Jane Doe',
			address: '26th Roadway',
			city: 'Miami',
			state: 'FL',
			zip: '33166'
		},
		{
			name: 'Alvaro Jose',
			address: 'Cra 94 # 48-65',
			city: 'Cali',
			state: 'CO',
			zip: '000000'
		}
	];

	self.joinAddress = function(person){
		return person.address + ', ' + person.city + '. ' + person.state + ' ' + person.zip;
	};
});


//--DIRECTIVES:
app.directive('searchResult', function(){

	return {
		templateUrl: 'directives/search-result.html',
		restrict: 'AECM',
		replace: true,
		scope: {
			personObject: "=",
			formattedAddress: "&"
		}	
	}
});


//--CONTROLLERS
app.controller('mainController', ['$scope', 'peopleService', function($scope, peopleService) {
	
	$scope.people = peopleService.people;
	$scope.joinAddress = peopleService.joinAddress;
	

}]);

app.controller('secondController', ['$scope', 'peopleService', function($scope, peopleService){

	$scope.people = peopleService.people;
	$scope.joinAddress = peopleService.joinAddress;

}]);
