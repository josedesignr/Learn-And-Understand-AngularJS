/* UNDERSTANDING 'LINK' */

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
		},
		/* In last lesson we learned about the 'compile' and linkers as 'pre' and 'post',
			but honestly speaking, 'compile' is something that is almost never used.
			It is more common to use 'post' to modify an specific use of directive.

			In order to do that, without creating an empty 'compile' with the 'post'
			property inside; what it's better is to use link.

			Link is a property that does the same as 'post', without needing to create
			extra elements.

			Just define link, as a function that receives a scope, elements and attributes,
			in this case we have an array with 3 persons, and we are placing the directive
			<search-result> on each iteration.

			But let's say when the person is Jane Doe, we don't want that to have any class.
			With the link property we can validate if the person name is "Jane Doe", and if
			it matches, remove any 'class' attribute. Run this code and check this out.
		*/
		link: function(scope, elements, attrs){
			console.log("Linking...");

			if (scope.personObject.name === 'Jane Doe') {
				elements.removeAttr('class');
			}
			console.log(elements);
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
