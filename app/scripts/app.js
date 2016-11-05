
/* GETTING OTHER SERVICES: PART 2*/

/*
	There are other official Angular services, but not included in the angular.js file
	This is just in order to not have a file so heavy with a lot of services that we might not use.
	This additional services can be found also in the angularjs page, inside the angularjs version that he have chosen to work with.

	Some of the most important aditional services is angular-route, angular-sanitize, angular-messages, and much more. 

*/


//-- Let's see for example, how to use this service as well (let's try ngMessages).

//-- Step 1: We must download the aditional service, and include the script in the index.html (See there).
//-- Step 2: Then, we must inject the ngMessages module, into the main app module, which is 'myApp'.

//-- The rest of the lesson is in index.html, to see how ngMessages works.
var app = angular.module('myApp', ['ngMessages']);

app.controller('mainController', function() {

});