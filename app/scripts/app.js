

/* THE LOCAL NAMESPACE */

/*
	In the last lesson, we learned that is not correct to pollute the Global Namespace
	Here, we are going to see how to create a Local Namespace, and define our variables inside.

*/

//-- A local namespace is just an object, with all our variables and functions inside. Like this:

var myLocalNamespace = {
	person: "Alvaro"
};

//-- It can be also written like this (and it's the same):
var anotherLocalNamespace = {};
anotherLocalNamespace.person = "Jose";


/* Both notations are correct, and now I have two different names stored in 'person',
	but since they are stored in different local namespaces, JavaScript will know exactly which one to call.
	Let's print them both:
*/

console.log(myLocalNamespace.person);
console.log(anotherLocalNamespace.person);


/*
Still not using AngularJS, I know...
But this concept of Local Namespace is really important because is a fundamental part of the AngularJS structure.

When you build an AngularJS app, you're going to see that there are certain elements and structural concepts that
have the goal of not polluting the global namespace.
Making sure that variables and functions that are defined don't collide and contradict variables and functions
defined elsewhere. And that allows for a nice big ecosystem of really cool code that we don't have to worry about is
going to interfere with the other code without realizing it.
*/