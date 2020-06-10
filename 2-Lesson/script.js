///////////////////////////////////////
// Lecture: Hoisting
/** firstly js treat functions after that the window */
/** if we assign a var to a function then the hoisting doesnt work */
//calculateAge(1965);

/*

//retirement(1990); error retirement is not a function

//function
function calculateAge(year){

    console.log(2016 -year) ;

}
// variable as a function
var retirement = function(year) {

    console.log (65 - (2020 - year));

}
retirement(1990);

//variable
console.log(age); //undefined
var age = 23;
console.log(age);

function foo(){
    var age = 65 ;
    console.log(age);

}
foo(); // 65
console.log(age);// 23

*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);
calculateAge(1985); 
function calculateAge(year) {

    console.log(2016 - year );
    console.log(this);

}

*/
var john = {

    name : 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);

      /*  function innerFunction(){
            console.log(this);
        }
        innerFunction();
    */}

}
john.calculateAge();


var mike = {
    name: 'Mike' ,
    yearOfBirth : 1984 

}
mike.calculateAge = john.calculateAge;
mike.calculateAge(); 
