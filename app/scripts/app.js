/* CREATING A DIRECTIVE */

/*
	We are now going to learn how to create our own directives in AngularJS.

	What's that usefeul for?
	(Read explanation at index.html)
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


//--CONTROLLERS
app.controller('mainController', ['$scope', function($scope) {
	//--Not needed for this lesson.
}]);

app.controller('secondController', ['$scope', function($scope){
 //--Not needed for this lesson.
}]);


//--DIRECTIVES: A directive receives a name and a function which returns an object with certain properties:
app.directive('searchResult', function(){

	return {

		//--The template property is the HTML that gets outputted when the directive is used.
		/*
		template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading"> Doe, Jane </h4><p class="list-group-item-text"> 26st Roadway. FL, 33166 </p></a>',
		*/

		/* Sometimes, the template property can became into a pain in the neck, because it's not
			very fancy to paste a full HTML component into a single string line. 
			For that reason, it could be nicer to have a directives folder, with the HTML on a separate file.
			The templateUrl property works in the same way as we learned in the routing lesson.
			We just give the location where the file is stored.
		*/ 
		templateUrl: 'directives/search-result.html',
		
		/* The restrict property can receive four different letters (or mix of those letters):
			A: Means the directive is accepted into the HTML as Attribute -> <div search-result ></div>
			E: Means the directive is accepted into the HTML as Element -> <search-result></search-result>
			C: Means the directive is accepted into the HTML as Class -> <div class="search-result"></div>
			M: Means the directive is accepted into the HTML as coMment -> <!-- directive: search-result-->

			We can restrict the directive to only accept one, several, or all of them: 'A' 'AE' 'AECM'
			By default it is 'AE', so, if this is what we want, we don't need the restrict property.
		*/
		restrict: 'AECM',

		/* The replace property, by default, is false. If I set it to true, it means
			that the directive tags will be replaced for the HTML in the template. */
		replace: true
	}
});

/*
	PD: Notice, in the HTML the directive is placed as search-result, but here it's searchResult.
		This happens because in JavaScript we cannot define a variable name with dash (-),
		because JavaScript understand it as a minus (search minus result), and throws an error.
		You don't have to worry about this, just take care of define the name exactly the same
		but in camelCase (searchResult), and AngularJS will be smart enough to understand that
		search-result in the HTML is linked to the directive searchResult.
*/