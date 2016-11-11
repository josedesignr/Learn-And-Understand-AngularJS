/* UNDERSTANDING TRANSCLUSION */

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


/*  When we talk about custom directives, there is another term
	that you will see, it's called Transclusion.

	It's actually another word that sounds really complex but it's
	actually just a big word that's used in computer science for a
	simple concept.

	TRANSCLUSION: Include one document inside another.

	So, why do we talk about transclusion when we are talking about
	AngularJS directives?

	What if I want to include some information within the directive
	tags? for example:

		<search-result> Some information here </search-result>

	If you try it, just like that, you will see that nothing
	happens, the sentence "Some information here" is just ignored.

	This is because AngularJS replaces the <search-result> tags, for
	what is in the html directive (search-result.html, in this case.)

	If we want to show that information, we need to use transclusion.
	This is how it works:
*/

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
		//-- It is required to enable the transclude property.
		//-- See the next step in home.html and/or second.html
		transclude: true		
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
