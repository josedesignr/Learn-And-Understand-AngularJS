

/* Modules, Apps and Controllers */

/*
	Remember in previous lessons we were talking about not polluting the Global Namespace?
	Well, AngularJS is gonna make sure that we don't do that.

	In fact we are goint to put only one variable into the Global Namespace, and that variable is our whole app.
*/

/*
	This will be the only variable in the Global Namespace, and everything is going to be inside it.
	This variable is equal to an angular module that receives the name of our app,
	and a dependencies array (for now we can just leave it empty, we are going to learn about it later.)
*/
var app = angular.module('myApp', []);

/* Since we have chosen "myApp" as application name, we must put the same name in the html tag, like this:
	
	<html ng-app="myApp"> ... </html>

	This is the part that binds this JS (Model), with the HTML (View).
	Take a look into the index.html to check this.
*/


//-- Now we are going to create our first controller:
app.controller('mainController', function(){

});
/*
 And that's it!, by doing that, we have a controller that we can asign to any part of the HTML.
 All that we need to do is just select the part of the HTML that we want to control with this controller, and use:
 	<div ng-controller="mainController"> ... </div>

 By just doing that, you have a controller, controlling a part of the HTML, and everything you put inside that controller can affect the view in the HTML.
*/