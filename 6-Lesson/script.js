/*
//ES
var name5 = 'Jane Smith';
var age5 = 23;
name = 'Jane Miller';
console.log(name5);


//ES6

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
*/
//es5
/*
function driversLicence(passedTest) {
    
    if (passedTest) {

        var firstName = 'John';
        var yearOfBirth = 1990;


        
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' , can officially drive a car');

}


//es6
function driversLicence6(passedTest) {
    
    if (passedTest) {

        let firstName = 'John';
        const yearOfBirth = 1990;


        
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' , can officially drive a car');

}
driversLicence(true);

//driversLicence6(true);


var i = 23;

for (var i = 0; i< 5 ; i++){
    console.log(i)
}

console.log(i);


*/


////////Blocks and IIFEs
/*
{

    const a = 1;
    let b = 2;



}

console.log(a + b); //not defined a and b



*/



///////////////////////:STRINGS/////////////::

/*

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990 ;
function calcAge(year){
    return 2020 - year;

}

console.log('this is '+ firstName + ' '+ lastName + ' He was born in ' + yearOfBirth + ' today he is ' + calcAge(yearOfBirth) + ' years old')

//ES6

console.log(`This is ${firstName} ${lastName} he was born is ${yearOfBirth} and today he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' S'));


console.log(`${firstName} `.repeat(5));
*/



////////////////////////////////////////////Arrow functions

/*
const years = [1990,1965,1982,1937];

//ES5

var ages5 = years.map(function(el){
    return 2016 - el;
});

console.log(ages5);



//ES5

let ages6 = years.map(el => 2016 -el);

console.log(ages6);

ages6 = years.map((el,index) => `Age element ${index + 1} : ${2016 - el}.`)
console.log(ages6);


ages6 = years.map((el,index)=> {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1} : ${age}.`
})
console.log(ages6);


*/





//////////ARROW FUNTIONS//////////////////


//ES5
/*
var box5 = {
    color: 'green' ,
    position: 1,
    clickMe: function () {

        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is identical to ' + self.color;
            alert(str);
        });
    } 

}





const box6 = {
    color: 'green' ,
    position: 1,
    clickMe: function () {

        var self = this;
        document.querySelector('.green').addEventListener('click', () =>{
            var str = 'This is box number ' + this.position + ' and it is identical to ' + this.color;
            alert(str);
        });
    } 

}
box6.clickMe();

/*
const box66 = {
    color: 'green' ,
    position: 1,
    clickMe: () => {

        var self = this;
        document.querySelector('.green').addEventListener('click', () =>{
            var str = 'This is box number ' + this.position + ' and it is identical to ' + this.color;
            alert(str);
        });
    } 

}
box66.clickMe();

*/

function Person(name) {
    this.name = name;

}
//ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

    var friends = ['bob','Jane' , 'Mark'];
    new Person('John').myFriends5(friends);


//ES6
    Person.prototype.myFriends5 = function(friends) {

        var arr = friends.map(function(el){
            return this.name + ' is friends with ' + el;
        }.bind(this));
    
        console.log(arr);
    }
    
        var friends = ['bob','Jane' , 'Mark'];
        new Person('John').myFriends5(friends);
    
    











