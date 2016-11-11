/* UNDERSTANDING 'COMPILE', 'PRE' and 'POST' LINKERS */

/*
	If you have done any research on AngularJS directives you may have seen the terms
	'compile' and 'link', and when you look at the code, it can look confusing.
	And also using some terminology that can seem rather foreign.

	Why did AngularJS use this term 'compile' and 'link' when we build custom directives?
	
	The terms themselves actually come from something that is not part of AngularJS.
	Compilers and linkers are two fundamental elements to building code.
	When you are writing code, and you build it, the compiler converts that code into a
	lower-level language (a machine language or something like that).

	And then, the linker, is what brings all those files together and builds a single file
	that's executable, a file that the computer will actually interact with.

	These are very computer sciency terms and the AngularJS developers chose those to describe
	specific aspects of custom directives because they're kind of similar, but not the same.

	In fact, I think there are some better terms that they could have used, because a lot of
	web developers are self taught, maybe don't come from a heavy computer science background
	and may not be familiar with these terms compiling links.

	What compilers and linkers do, is not really what AngularJS does with custom directives,
	it's just kind of similar theoretically. So, we will look at what compile and link really
	do in AngularJS, and I will explain it in a way hopefully more familiar to a web developer.

	These two concepts sound quite complex, but they are actually pretty simple.
	So, let's move forward.
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
// This service was created in order to avoid repeating the same array and function in both controllers.
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
		/*  Inside each directive we can add a new property called 'compile',
			which expects its value to be a function.
			And that function receives two parameters, the element and the
			attributes of the piece of HTML that defines the directive.
			(we can choose any names, in this case, 'elem' and 'attrs') 
		*/

		/*  If we run this code and check the console, we will notice
			that it is going to log "Compiling..." only once.
			But "Pre-linking" and "Post-linking", is being printed three times 
			(one for each object of the people array)
		*/

		compile: function(elem, attrs){
			/* I can have code in here, that does whatever I want.
				To show what's happening, let's console.log it.
				So we can see when this code runs.
			*/
			console.log('Compiling...');

			/*  And then print in console, the piece of HTML
				that is going to be compiled in this directive.
			*/
			console.log(elem.html());

			/* We could, for example, remove the classes in the HTML directive,
				by doing this.: 
					elem.removeAttr('class');

				Or any other modification that we want to do to all the 
				search-result directives in general.
			*/
			
			/* And then, the compile function returns an object, and that
			object can have two linking properties: */
			return {
				/*  pre-link (pre) and post-linking (post), are also functions,
					and they takes 3 elements: scope, element(s) involved, and
					the attributes for the HTML that is just being generated
					by creating the instance of the directive.

					But this time, is not affecting all the directives in general,
					but only the one that is being iterated.
				*/
				pre: function(scope, elements, attrs){
					console.log("Pre-linking...");
					console.log(elements);
				},

				/*  For example, if we want that, when the iteration belongs to the
					'Jane Doe' person, only that element gets its classes removed.
					We would do this:
				*/
				post: function(scope, elements, attrs){
					console.log("Post-linking...");
					if (scope.personObject.name === 'Jane Doe'){
						elements.removeAttr('class');
					}
					console.log(elements);
				}
				/* It is safer to make these kind of changes in the post, always.
					The 'pre' was included here just for you to learn that it exists
					But it's not recommended to make changes there, just use the post.
				*/
			}
		}	
	}
});
/*
	So, compile defines the piece of HTML in the DOM, and in the compile function, I can
	change it if I want to, I can look at it, and I can make decisions.
			
	The linking functions allow me to change the HTML and access it as an indiviual piece.

	In other words, compile means that I can change my directive on the fly, before it gets used.
	But the change would affect to all the <search-result> directives.
	For example, I could say elem.removeAttr('class'); and all the bootstrap classes would be
	removed from the HTML before being rendered.

	Now in the other hand, pre and post are run everytime the directive is used.

	GOOD NEWS: The truth is that you will probably never need to run code inside compile, that is
	a really really rare case, if you need to make a general change to the whole directive, you
	can just go directly to the HTML and change what you need, without using compile.
	
	Changing individual elements in the post-link is not that rare, but there is a shorthand to
	do this, without creating an empty compile in order to be able to modify something in the post.
*/


//--CONTROLLERS
app.controller('mainController', ['$scope', 'peopleService', function($scope, peopleService) {
	
	$scope.people = peopleService.people;
	$scope.joinAddress = peopleService.joinAddress;
	
}]);

app.controller('secondController', ['$scope', 'peopleService', function($scope, peopleService){

	$scope.people = peopleService.people;
	$scope.joinAddress = peopleService.joinAddress;

}]);
