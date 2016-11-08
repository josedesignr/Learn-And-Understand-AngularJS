var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope) {

}]);



/* SINGLE PAGE APPS AND THE HASH */

/*
	In thi lesson we are going to understand the KEY
	of how Single Page Applications works.

	And we are going to explain it from the JavaScript and HTML bases,
	so, we don't need AngularJS in this lesson.
	Forget about the AngularJS code lines above.
*/

//-- THIS IS PURE JAVASCRIPT

/*
	We saw that JavaScript has an Event Loop and some events (click, keypress, and so on).
	Well, there is another one which is 'hashchange', that watches when the fragment identifier*
	changes while you are on the page.

	**The fragment identifier explanation is in the index.html.
*/

//--Once the event identifier changes, this function get triggered.
window.addEventListener('hashchange', function(){

	/* Inside of this function we can do whatever we want,
		we can also validate if the Fragment Identifier matches with certain route that we specify.
		Go ahead and run the page, and change manually the url to match these routes, and you
		will see the logs of each different route.
		Or you can also type anything (#whatever), and you will see just "Hash Changed!"
	*/
	if (window.location.hash === "#/bookmark/1"){
		console.log("Page 1 is cool!");
	}
	if (window.location.hash === "#blah"){
		console.log("Showing page 2");
	}
	if (window.location.hash === "#thisisafragment/identifier"){
		console.log("This is page 3");
	}
	console.log("Hash Changed!");
});


/*
	This concept, is the fundamental key to single page applications.
	A single page application is one where you only officially download once,
	the browser does a complete HTTP request for the HTML, only once.

	So when you look at the URL, it's just one page.
	And you use asynchronous request that is AJAX, or having the browser go out 
	and get values behind the scenes, and specify where it should go, using the
	fragment identifier, using the hash.

	And then, inside the JavaScript, you would go out and get the particular
	contents that are associated to this what is essentially a fake URL.

	This allows for some really cool and very powerful applications that behave
	in a way that feel more like a native desktop application.

	Rather than a bunch of refresh, refresh, refresh and the page blinks, we can
	use JavaScript and start going out and getting new values and making decitions
	based on the hash, and pretending like each hash value corresponds to a page.

	This is very powerful, an AngularJS uses this basis concept to wrap up and
	make ready for you, everything you need in order to build single page applications.
*/