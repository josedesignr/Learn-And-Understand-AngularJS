var app = angular.module('myApp', ['ngMessages']);

app.controller('mainController', function() {

});

//--Ignore the Angular code above for now, this lesson will be a pure JavaScript one.

/* JAVASCRIPT ASIDE: ARRAYS AND FUNCTIONS */

/*
	We are going to talk, very briefly, about JavaScript arrays and how they work with functions.

	This lesson will be short but it's important before the next lesson.
	Something which is particular in JavaScript, compared with other languages
	is that you can have different types of elements in the same array, numbers, strings, and even functions:
	
*/
var things = [
				1, 
				'2', 
				function(){
					alert("I am a function inside an array!");
				}
			];

//-- So now, if we print 'things' in console, we are going to see all the content, no matter if they are different types of data.
console.log(things);

//--And, we can also access and trigger the function inside the array, like this:
things[2]();
//-- The [2] is accessing the array, in the third position (2 is the third position because 0 also counts)
//-- The () trigger the function, so we should see an alert.

/*
	So, here is the basic idea, a fundamental concept.
	I can include different types of things in an array, and I can include functions in that array.

	Remember this fundamental concept, because is very important to understanding the next lesson.
*/





