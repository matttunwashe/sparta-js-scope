// code can see out but not in
// codes assigned inside a function overides the code outside a function
// always assign var to a new variable or else it becomes a global variable



// var outsideVariable = 5;
//
// function doSomething() {
//   console.log(outsideVariable);
// }
//
// doSomething();
//
// var insideVariable = 10
// function checkSomething() {
//   console.log(insideVariable);
// }
// checkSomething();
//
// function doSomething() {
// var insideVariable = "inside";
// console.log(outsideVariable);
// console.log(insideVariable);
// }
//
// doSomething();
//
// console.log(insideVariable);




// function firstFunction() {
//   console.log("I am the first Function");
// }
//
// function secondFunction() {
//   firstFunction();
//   console.log("I am the second function");
//   function insideSecondFunction() {
//     console.log("I'm inside the second function");
//   }
//
//   insideSecondFunction();
// }
// secondFunction();





// function joinStringsAndPrint(string1, string2,) {
//   var newString = string1 + string2;
//
//
// //Declaring the function
// function printString( string ) {
//   console.log(string);
// }
//
// printString(newString);
//
//   return newString;
// }
//
// var hello = "hello";
// var world = "world";
// joinStringsAndPrint(hello, world);


function joinStringsAndPrint( string1 , string2 ) {

	var newString =  string1 + string2;

	function printString( string ) {

		console.log(string);

		// Q3
		// console.log(newString);

		// Q4
		// console.log(string1 + string2);


	}

	printString( newString );

	return newString;


}
var string1 = "hello, ";
var string2 = "world";
joinStringsAndPrint( string1 , string2 );

// Q1
// printString( "run from outside joinStrings" );

// Q2
// console.log(newString)
