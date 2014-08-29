// Create a “cheat sheet” JavaScript file that contains examples of all of the things we learned today, delineated 
// with comments:

	•	Variables
	•	Debugging (alerts, comments, the console)
	•	Different data types
	•	Arrays
	•	Testing
	•	Logic
	•	Functions

 * Variables i.e. 4 === 2.34

// - variables hold little bits of information or data that you can call upon later. 
//The variable keyword var is used to declare a variable.
//Here is the form of a variable:  
var elephant = "Hello, how are you?"
//Here, the variable is Elephant and the bit of information is Hi, how are you?
//The varialbe keyword declares the variable elephant. 
//The variable is assigned to the value "Hello, how are you?"

var x;
var y;
//OR
var x, y;

//When a keyword is delcared, but not assigned, its value is undefined. 
//A variable that has been declared, but has not be assigned any value equals undefined.

 * Debugging (alerts, comments, the console)
 //To see the output of your script, you could use an alert
//The syntax for calling and alert is:
   alert(“Content of your alert”);
// Arbitrary JavaScript can be run directly in the console line by line
//The console will let you know what the issue is and where it occurs in your code. 
//You can perform exercises directly in the console of your web browser. 
//To bring up the JavaScript console in Chrome, use Command + Option + J
Use the console.log function to work out code in the console

* Different Data Types
//There are a handful of data types in JavaScript,
//- string = text encapsulated in quotations
//- boolean = A True or False value returned from a given test. 
//- object
//- number --> Note that there is only a single dataype for numbers, both integers and floating point numbers 
//(unlike some other languages). 

* Arrays
//An array holds a collection of data. So an array is a list of data.  
//Arrays can hold multiple data types. They can even hold other Arrays.
//Arrays can be stored in variables.
//Example of an Array 
myArr = ["Snoopy", "Charlie Brown", "Patty", "Violet"]


//Here myArr is a variable being assigned to the array.
var myArr = ["Snoopy", "Charlie Brown", "Patty", "Violet"];

* Testing

//Any test returns a Boolean true or false.

//== will test if two strings are equal.

//===  test the object as well. two strings are equal if they both have the same length and the same characters in the same order. 

//!== will test to see if two strings are NOT equal 

//<, >, <=, >= will test less than, greater than, less than or equal to & greater than or equal to respectively. 


* Functions

//A function is a way to encapsulate code for later use. 
//Functions can take arguments.
// Arguments are used as variables inside of the fuction.
//Use "function" to create a function and define what the function should do when you call it. 

function addTwo(some_number){
     return some_number + 2;
   }
   console.log(addTwo(4));
   >6

//Once a Function is declared, it can be called later on by using it's name and supplying it with 
// any arguments instide of parenthesis. addTwo(15)

* Logic
//Combinaion of Testing and Conditionals utilized to control the flow of your program 
//& make the computer work for you.


// Write 3 different functions that take input and return something via the console. 

Exe. 1
	var x = 1908;
	var y = 1906;
	var res = x + y;
	alert(res)

Exe. 2
 	var FName = "Al"
	var LName = "Holland"
	var FullName = FName + " " + LName
	alert(FullName)  
//"Al" and "Holland" are the operands and + is the operator when the operands are strings, 
//the oprator performs string concatenation. 

Exe. 3
	var Music = ["Metal", "Rock and Roll", "Dubstep"];
	var Instruments = ["Guitar", "Bass", "Drums"];
	var hobbies = [Music, Instruments]; //these are strings and NOT variables so they do not need quotation marks. You put them in quotation marks and tehy will become strings// Really a represenation of the variables. 
