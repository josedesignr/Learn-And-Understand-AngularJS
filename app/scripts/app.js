
/* The XMLHTTPRequest Object and $http */

/*
	We are going to talk about something that is fundamental to the way modern web applications work.
	It's something that exists across all browsers and it's called the XMLHttpRequest Object.

	It's something that AngularJS uses, it's something that pretty much every modern web application
	framework uses. So, let's understand what are we talking about.
*/

var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {

	$scope.account = '';

	$scope.characters = 5;
	
	/*
		This variable that we had before, has been passed to a JSON object, located in /json/rules.json
		In order to simulate how would it be to get an object from a database.
		That's where the XMLHttpRequest comes into play.

		$scope.rules = [
			{ rulename: "Must be 5 characters long" },
			{ rulename: "Must be unique" },
			{ rulename: "Must be fancy" },
			{ rulename: "Any other rule" }
		];
	*/

	/*
		What is the XMLHttpRequest Object?

		It's an object that is native to the browser (IE, Firefox, Chrome...), they all implement
		this concept,
		
		A bit of history: 
		This actually was invented by Microsoft, when they were first building something called
		Outlook Web Access (which still exists). It was actually really far ahead of its time,
		and they wanted to build something on the web that felt a lot more like Microsoft Outlook,
		the email program felt when it was installed on your computer.

		So, in Internet Explorer, in conjunction with building OWA, they came up with this concept
		of an object that went out and can make internet requests on its own part of code, as supposed
		to the browser doing it via going to a particular URL, in the browser URL of refreshing the page.

		In code you could go and make an http request and go do something with that data.

		That concept was so powerful and such a good and innovative idea, that Firefox (the Mozilla people),
		and later on Google with Google Chrome adopted it as well.
		And so, now it's a standard as part of web applications, as part of browsers, as part of JavaScript.
	*/
	

	/*
		So, we have this variable, which contains the XMLHttpRequest Object where we can access 
		through JavaScript and go out and get data.
	*/
	
	
	var rulesrequest = new XMLHttpRequest();
	
	//-- onreadystatechange means that something has happened or a request has been made and the request is finished.
	rulesrequest.onreadystatechange = function() {
		
		//-- This is just to stay in the Angular Context, as we saw before.
		$scope.$apply(function() {

			//-- If readystate is equal to 4, (which means is ready to go), and the status is 200 (which means the data requested was found)
			if (rulesrequest.readyState == 4 && rulesrequest.status == 200){
				
				//-- Then we set our $scope.rules variable to the response obtained, which needs to be parsed from string to JSON.
				$scope.rules = JSON.parse(rulesrequest.responseText);
			}
		});
	}

	//--Then we implement the method 'open', and pass what kind of method I'm going to do (GET, POST..), the address of the API or where the file is, and a true value.
	rulesrequest.open("GET", "json/rules.json", true);
	
	//-- Finally, send that request and when it finished, it will fire the onreadystate change.
	rulesrequest.send();
	

	/*  This is the native way to do it, and as you can see, it's kind of complex to use.
		That's why a lot of frameworks have wrappers around it, in order to make it easier to use,
		like jQuery has this Ajax wrapper around it, and AngularJS has it's own wrapper around the
		HttpReqest Object.

		So, we could make this simpler by putting a wrapper of code around it, that basically 
		creates this code that we see here, this native code, but gives us an easier way to
		do it through some king of wrapping object.

		And that's exactly what AngularJS does using the $http object. 
	*/

	//-- How AngularJS help us make these asynchronous XMLHttpRequests?

	//-- GET DATA:

	/*  Using the $http service (notice that it has been injected into the controller), which
		has a really nice shorthand way to do that.
	*/
	
	/*  First we call the $http service, call the method that we want (in this case, get), and
		inside the get, we pass the address of the API or file location and then, there are a
		couple of methods that are useful, like .success, which is probably the principle one
		that you will use.
		
		The success method runs when the HTTP object goes and gets the data successfully, and
		after that, it will run the function that you pass to it.
		Whatever value that you pass to the function (we called it 'data'), will be the data that gets back.

		There is also an error method, that we usually call in case that something goes wrong
		trying to get the data, the function will receive the error data and also a HTTP status code
		(like 404 when it could not be found), and you can do whatever you want inside the error
		function, in this case we are just going to put a console.log
	*/
	$http.get("json/rules.json")
		.success(function(data){
			$scope.rulesB = data;
		})
		.error(function(data, status){
			console.log(data);
		});

	//--- POST DATA:

	/* Under most real circumstances you are not just going to get data from the server; you also
		want to send data to the server, to some address and then perhaps have that data be saved
		to thedatabase or something like that.
	*/

	//--Let's suppose we also want to have the ability to add new rules, so let's define an empty variable.
	$scope.newRule = "";

	//--In the index.html, there is an input and a button that fires this function to add a new rule.
	$scope.addRule = function(){

		//--This time we use the post method, which receives the API address, and the object we want to add.
		$http.post("/myapi/address", {newRule: $scope.newRule })
			
			//--When it is successful, the rules get updated to the new list, including the new rule...
			.success(function(result){
				$scope.rulesB = result;
				//-- ...and the model gets empty.
				$scope.newRule = "";
			})
			.error(function(data, status){
				console.log("The ERROR is: "+data);
			});
	}

	/* 
		PD: This post method is not going to work, it will throw an error,
		because you need some type of server backend to do this.
		But I left this here so you can know how to do it when you are working with a real API.
	*/

}]);
