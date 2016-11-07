
/* WATCHERS AND DIGEST LOOP */

/*
	We have already seen that JavaScript has an Event Loop that is constantly listening for 
	certain events (keypressed, click, mouseover, change...) happening on the page.
	But if you did it before with JavaScript or jQuery, you manually had to look at these
	events and respond to them.

	AngularJS is actually adding event listeners for you, and it's extending the Event Loop,
	doing more with it.

	So, you have the Event Loop. which is native to the browser, part of JavaScript, and then
	AngularJS add on, the "Angular Context" on top of the Event Loop.

	When you create something in the scope, and then put it in the view (by binding or interpolation),
	AngularJS knows that it's gonna need to keep track of that variable(s), or function(s).
	It works because AngularJS automatically add watchers, keeping track of the original value and
	the new value, every time something happens that might have changed the value.

	That part of it, watching and checking for changes, is called "The Digest Loop".
	(it'‚ kind of the Event Loop, but it's its own loop that AngularJS has written )

	When you enter into the Digest Loop, (or Digest Cycle), it goes to every single variable and 
	check if there are any changes, comparing the old value to the new value.
	If some of those variables has changed, the it updates everywhere that is connected to it.

	And then it runs one more cycle, to see if by changing that it might have changed something else,
	until all the old values and new values match. Then it stops for the moment, until the Event Loop
	detects some event thrown again.

	Too much text, let's code a bit...
*/

var app = angular.module('myApp', []);

//--Back to our previous example...
app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

	/* 
		When we create any variable into the $scope, and put it into the view, it automatically
		starts watching for any value changes. That's why we see the updates in real time every
		time that we typed anything in the text box. 
	*/
	$scope.account = '';

	/*
		We also can add our specific watch code to a specific variable.
		You normally wouldn't do this under most circumstances, but we are gonna do it
		so we can get and idea of what is happening.
	*/
	//--The $watch function receives the name of the variable to be watched, and a function where AngularJS has the old and new values.
	$scope.$watch('account', function(newValue, oldValue){

		//--Let's print old and new values out, so we can see how it works.
		console.info("Changed!");
		console.log("Old Value: "+oldValue);
		console.log("New Value: "+newValue);
	})

	/*
		You will see that every single time we type a letter in the text box that is being watched,
		the Digest Loop starts again and updates the values.
		So now, AngularJS is taking care of things that we used to have to do manually, and that's great.

		But...

		There is a little caveat. Remember we said above that AngularJS has an "Angular Context"
		on the top of the native Event Loop and there is where it watches all the variables?

		Well, let's see what happen when we don't build code inside the AngularJS context...
		...and how you can fix that.
	*/

	/*
		In this example I am going to use the setTimeout function which is native to JavaScript
		to change the 'account' variable to something else, after 3 seconds (3000 ms).
	*/
	setTimeout(function(){
		$scope.account = "josedesignr";
		console.log("Scope Changed!");
	}, 2000);
	/*
		If you have tried it, you noticed that after 3 seconds,  
		the "Scope Changed" appeared in the console, but the DOM did not update. What happened?

		Well, setTimeout starts a kind of a new thread of code inside the JavaScript, inside the
		memory of the running JavaScript, and 3 seconds later it runs asynchronously, meaning that
		other code keeps running while setTimeout is running too.

		So, the things that are happening inside of the setTimeout, even though it changed the scope,
		Angular didn't check for it, it didn't realize that change 'cause it was outside the Angular
		context; and because of that, it never started the Digest Loop, so it never updated the page.
	*/

	/*
		How to handle this?

		Well, there is a couple of ways:

		One, is to manually tell AngularJS that what is inside the setTimeout, needs to be applied 
		into the Digest Cycle, and the way to do that is using $scope.$apply, like this:
	*/

	//-- So now, when the setTimeout runs the thread, is also runs an Angular function ($scope.$apply) that applies those changes in the Angular Context. 
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.account = "jose";
			console.log("Scope Changed and Applied!");	
		});
	}, 4000);

	/*
		Normally, AngularJS wraps everything within a $scope.$apply for you, but in certain cases
		like setTimeout, or probably with some external library, if you are not getting the DOM updated,
		then you know that you should wrap it manually in a $scope.$apply.

		There's a second way to handle this, and if you remember well, we already did it in previous lessons:
	*/

	// We can just inject the $timeout service from AngularJS, instead of using the native setTimout of JavaScript
	// By doing this, we don't need anymore the $scope.$apply, because since $timeout is an Angular service, it already knows.
	$timeout(function(){
		$scope.account = "josedesignr";
		console.log("Scope Changed using $timeout!");
	}, 6000);

}]);
