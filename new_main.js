/*
  !!!-- INSTRUCTIONS -- !!!
  Follow the steps closely. Marks are for correct syntax and execution.
  DO NOT remove the commenting in the file. Removing the commenting may
  lead to you receiving a grade far lower than you deserved due to the
  automation software missing your answer.
  HINT: The blank lines provided are great measuring tools for the amount of code you need. For example, in Question 1 where it asks you to set the visibility scope; if you are wrapping them in functions then you are making a grave error. The total code for those questions fits on one line.
*/

/*
  !!!-- STUDENT DETAILS --!!!

  FILL IN THE FOLLOWING DETAILS:
  FIRST NAME: Taylan
  LAST NAME: Altuncuoglu
  STUDENT ID: 200379989
  DATE: 12/11/2018

  !!!-- END OF STUDENT DETAILS --!!!
*/

/* Question 1 - Begin: (12 points) */
// Using the appropriate visibility modifiers,
// a) (3) - Make the following variable globally scoped and equal to an integer value
x = 11;
// b) (3) - Make the following variable functionally scoped and equal to a string value
var y = "Eleven";
// c) (3) - Make the following variable block scoped, mutable, and equal to a boolean value
let w = true;
// d) (3) - Make the following variable block scoped, immutable, and equal to an array value
const z = [7,11];
/* Question 1 - End */


/* Question 2 - Begin: (9 points) */
// a) (4) - Create a named function called addStrings that has 2 parameters, a and b
function addStrings (a, b) {
  // b) (4) - Return the sum of the 2 parameters. NOTE: it should equal 31, NOT 526
return Number(a)+Number(b);
}
// c) (1) - Call the function with the following arguments
addStrings("5","26");
/* Question 2 - End */


/* Question 3 - Begin: (12 points) */
// a) (2) - Create an array with 3 names
var names = ['Taylan', 'Kerim', 'Umur'];
// b) (2) - Create an empty array to store a list of values
var upperCaseNames = [];
// c) (5) - Using a for/of loop, iterate through the names array
for(let name of names){
  // d) (3) - Make each name uppercase and add it to the empty array you created in step a)
  upperCaseNames.push(name.toUpperCase);
}
/* Question 3 - End */


/* Question 4 - Begin: (8 points) */
var theMeanArr = ['Bob', ['Sarah', 'Jim', ['Lucy', 'Sally'], 'Veronica', ['Waldo'], 'Romulo', 'Arsh'], ['Amrit', 'Gokul', ['Humphrey', 'Rodrigo'], 'Emma'], 'Esmeralda'];
// Using the appropriate index combination, console log the following names:
// a) (2) - Veronica
console.log(theMeanArr[1][3]);
// b) (2) - Gokul
console.log(theMeanArr[2][1]);
// b) (2) - Esmeralda
console.log(theMeanArr[1]);
// d) (2) - Romulo
console.log(theMeanArr[1][5]);
/* Question 4 - End */


/* Question 5 - Begin: (6 points) */
var things = ['ball', 'frisbee', 'boomerang', 'pogo stick'];
// Using the appropriate array methods:
// a) (3) - Remove and store the first thing from the array into the following variable
var thing1 = things.shift();
// b) (3) - Remove and store the last thing from the array into the following variable
var thing2 = things.pop();
/* Question 5 - End */


/* Question 6 - Begin: (25 points) */
var colours = ['#3498db', '#e74c3c', '#e67e22', '#f1c40f'];
// a) (4) - Select and store the question 6 element from the index.html file into a variable with the correct visibility scope (remember, it's passed by reference which means it doesn't need to be mutable)
const question6 = document.getElementById('question6');
// b) (3) - Using JavaScript, create a new 'button' element and store it in a variable
var button = document.createElement("button");
// c) (3) - Change the text property on the button to read 'click me'
button.innerHTML = "click me";
// d) (4) - Add an event listener to the button and pass the event to the callback
button.addEventListener("click", function() {
  // e) (3) - Select a random colour and store it in variable
  // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  let randomColour = colours[Math.floor(Math.random()*colours.length)];
  // f) (5) - Change the background colour of the button to the random colour using the event target to access the element
  button.style.backgroundColor = randomColour;
});
// g) (3) - Append the button to the question 6 element
question6.appendChild(button);
/* Question 6 - End */


/* Question 7 - Begin: (17 points) */
// a) (3) - Create a literal object called Dave
var Dave = {
  // b) (2) - Add properties and values for first name and last name
firstName: 'Dave',
lastName: 'Kontruck',
  // c) (4) - Add a property for birth date that has the value of a new date object with the date "1978-12-22"
birthDate: new Date('1978-12-22')
};
// d) (6) - Add a new property, on the Dave object, called "bio" that has the following value:
// "My name is {firstName} {lastName} and my birth date is {birthDate}." NOTE: Replace the values using string interpolation. Don't forget the important object context when attempting to access the properties.
Dave["bio"] = function() {return `My name is ${this.firstName} ${this.lastName} and my birth date is ${(this.birthDate.getMonth()+1)+'/'+(this.birthDate.getDate()+1)+'/'+this.birthDate.getYear()}.`}
// e) (2) - Console log Dave's bio
console.log(Dave.bio());
/* Question 7 - End */


/* Question 8 - Begin: (18 points) */
// Walking the DOM using CSS selectors:
// a) (4) - Select the span that contains the text "my span friend" and store it in a variable with the correct visibility scope
const span = document.querySelector("#question8 p span"); //nth-of-type(123) // first-of-type // last-of-type
// b) (4) - Select the second li tag in the unordered list under question 8 and store it with the correct visibility scope
const secondLi = document.querySelector("#question8 li:nth-of-type(2)");
// Walking the DOM using the current selected element scope:
// c) (2) - Select and store the question 8 element with the correct visibility scope
var question8 = document.getElementById("question8");
// d) (4) - Using the question 8 element you stored, select and store the ul element with the correct visibility scope
var ul = question8.querySelector('ul');
// e) (4) - Using the ul element you stored, select and store ALL the li elements with the correct visibility scope
lis = ul.querySelectorAll('li');
/* Question 8 - End */


/* Question 9 - Begin: (29 points) */
// a) (5) - Write an object constructor for the object 'Cube' that takes the following 3 arguments: height, width, and length
function Cube(height, width, length) {
  // b) (6) - Assign the arguments to 3 properties called height, width, and length
this.height = height;
this.width = width;
this.length = length;
}
// c) (4) - Create a new prototypal method that adds the function "calculateCube"
Cube.prototype.calculateCube = function() {
  // d) (6) - Return the following calculation: height * width * length
  // NOTE: Remember you must use the current object's context when accessing these properties for this to work
return this.height * this.width * this.length;
}
// e) (6) - Instantiate a new cube object called "notASquare" with the dimensions 5x5x5
let notASquare = new Cube(5, 5, 5);
// f) (2) - Console log the value of calculateCube
console.log(notASquare.calculateCube());
/* Question 9 - End */


/* Question 10 - Begin: (19 points) */
// a) (3) - Create a new object literal called Animal
var Animal = {
  // b) (3) - Create an 'init' property with a function definition as a value. The function will take one parameter called 'species'
  init: function(species){
    // c) (3) - Assign the species argument to a species property
    this.species = species;
  },
  // d) (3) - Create a new property called 'eat' and assign it a function definition with one parameter called 'food'
  eat: function(food){
    // e) (2) - return the following string using string interpolation to fill in the appropriate values:
    // This {species} eats {food}.
    return `This ${this.species} eats ${food}`;
  },
  // f) (3) - Create a new property called 'move' and assign it a function definition with a parameter called 'callback'
  move: function(callback){
    // g) (2) - Execute/Call/Invoke the callback as a function call
    callback();
  }
}
/* Question 10 - End */


/* Question 11 - Begin: (12 points) */
// a) (3) - Using the appropriate Object method, create a new Animal object and assign it to the variable 'Dog'
var Dog = Animal;
Dog.init("Dog");
// b) (3) - Initialize the Dogs object with the argument 'Dog'
var Dogs = (Dog);
/* Question 11 - End */
console.log(Dog);
console.log(Dogs);

/* Question 12 - Begin: (6 points) */
// a) (3) - Using the appropriate Object method, create a new Dog object and assign it to the variable 'GoldenRetriever'
var GoldenRetriever = (Dogs);
console.log(GoldenRetriever);
// b) (3) - Console log the result of calling the eat method on the GoldenRetriever object. You can pass the method any argument you choose. I used 'everything' ;)
console.log(GoldenRetriever.eat("dog food"));
/* Question 12 - End */


/* Question 13 - Begin: (12 points) */
// b) (4) - Override the 'eat' method by declaring a new 'eat' property on the GoldenRetriever object and assigning it a new function definition with no parameters
GoldenRetriever.eat = function() {
  // c) (2) - Return the following string: "I love all food!"
  return "I love all food!";
}
// b) (3) - Console log the result of calling the eat method on the Budgie(GoldenRetriever) object
console.log(GoldenRetriever.eat());
/* Question 13 - End */


/* Question 14 - Begin: (6 points) */
// a) (4) - Call the 'move' method on the GoldenRetriever object, passing an anonymous function as a callback
GoldenRetriever.move(function() {
  // b) (2) - Console log the following string: "Hey, I'm walkin' 'ere!!!"
  console.log("Hey, I'm walkin' 'ere!!!");
});
/* Question 14 - End */



/* Question 15 - Begin */
// a) (5) - Write an object constructor for the object Person that takes the following 4 arguments: name, height, weight, and age
function Person(name, height, weight, age) {
  // b) (8) - Assign the arguments to 4 properties called name, height, weight, and age
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.age = age;
}
/* Question 15 - End */


/* Question 16 - Begin: (20 points) */
// a) (5) - Write an object constructor for the object Employee that takes the 4 arguments used for the Person object and a new argument called 'career'
function Employee(name, height, weight, age, career) {
  // b) (2) - Assign the career argument to a property called 'career'
  this.career = career;
  // c) (7) - Inherit Person by instantiating it correctly
  Person(this.name, this.height, this.weight, this.age);
}
// d) (6) - Complete the inheritance by assigning the Person prototype to the Employee prototype
Employee.prototype = Person.prototype;
/* Question 16 - End */


 /* Question 17 - Begin: (14 points) */
// a) (4) - Create a new prototypal method on the Employee constructor that adds the function "details" and has the parameters 'property' and 'selector'
Employee.prototype.details = function(property, selector) {
  // b) (4) - Using the property argument, select the property from the object and assign it to a variable called 'prop'. Hint: Because 'property' will be a string, you will need to use the [index] syntax to select it on the object. The dot syntax will not work.
  let prop = this[property];

  // c) (4) - Select and store the appropriate HTML element using the selector argument in a variable called 'element'
  let element = document.querySelector("#" + selector);
  // d) (2) - Assign the 'prop' value to the 'element's text property
  element.textContent = prop;
};

/* Question 17 - End */

/* Question 18 - Begin: (23 points) */
// a) (8) - Instantiate a new Employee with the following details:
// name: Bob
// height: 178
// weight: 78
// age: 27
// career: plumber
// and assign it to a variable named 'plumber'
var plumber = new Employee("Bob", "178", "78", 27, "plumber");
// b) (15) - Using the Employee details method, pass thecorrect property name and selector string to fill in the table under #question19 in the index.html. Make sure you call the method on 'plumber' or you'll get 'undefined' and not receive the marks.
plumber.details("name", "name");
plumber.details("height", "height");
plumber.details("weight", "weight");
plumber.details("age", "age");
plumber.details("career", "career");

// /* Question 18 - End */


// /* Question 19 - Begin: (10 points) */
// // const requestURL = "https://gcsmckinnon.netlify.com/week-12/json-apis/data.json";
// // // a) (2) - Fetch the above URL
// // fetch(requestURL)
// // // b) (6) - Return the response as JSON
// // .then(function (response) {
// // return response.json();
// // })
// // c) (2) - Pass in the dataFetch definition

// /* Question 19 - End */


// /* Question 20 - Begin: (14 points) */
// {

//   // a) (5) - Loop through all the products using a for each loop
//   {
//     // b) (9) - Console log each product's sku, name, height, length, and width in the following format:
//     // `{name}::{sku} - {height}cm x {length}cm x {width}cm, {weight}kg`

//   }
// }
// /* Question 20 - End */
