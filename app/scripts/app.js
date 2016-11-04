

/* THE GLOBAL NAMESPACE */

/*
	Imagine that this place (where you are reading/writing), is a space in the computer memory
	that is at the very top of everything, the general space, the main space.
	Everything that you define here, will be visible in any other function that you creates, because is being
	defined outside, not enclosed in anything, just in the Global Namespace. 
*/

//-- Let's create a variable in the Global Namespace.
var person = "Jose";

//-- And then printing it in the console...
console.log(person);

/*
WARNING: This is just an example, but it is NOT correct to define variables in the Global Namespace.

...Why?
Because in real scenarios, you are going to use different modules, frameworks, libraries, somebody else's code, etc.
And if you have such a bad luck, and define a variable with the same name that other variable in any other place of the project,
it is going to be overwritten, if person exists twice, only the last variable person is going to be stored.

And the first one is just going to be replaced.
This can cause serious problems and bugs, and not so easy to find.

In the next lesson, we are going to learn how to avoid polluting the Global Namespace, with Local Namespaces.

Go to the next tag with GIT. 
*/