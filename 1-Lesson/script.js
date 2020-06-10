
/************************************
* Variables and data types
*/

/*
var firstName = 'John';


var lastname = 'Smith';
var age = 28; 
console.log(firstName + lastname + age) ;



var fullAge = true;

console.log(fullAge);

var job;


job = 'Teacher' ; 
console.log(job);

//V
var years = 3 ; 
*/


/*************
 * Variables mutation and type correction
 */
/*
var firstName = 'John'; 
var age = 28 ;

// console.log converts all the variables in string 

console.log(firstName + ' ' + age);


var job, isMarried ; 
job = 'teacher' ; 
isMarried = false ; 

console.log(firstName + ' is a ' + age + ' years old ' + job + 
'Is he married ? ' + isMarried);

// Variable mutation 

age = 'twenty eight' ;

job = 'Driver '; 

alert(firstName + ' is a ' + age + ' years old ' + job + 
'Is he married ? ' + isMarried);


var lastName =  prompt('What is your last name');

console.log(firstName + ' ' + lastName);
*/

/***************************************
 * Basic operators
 */
/*
 var year , yearJohn , yearMar , ageJohn , ageMark ; 
    now = 2020 ; 
    ageJohn = 28 ; 
    ageMark = 33;
    yearJohn = now - ageJohn ;
    yearMar= now - ageMark;
        console.log(yearJohn );

        console.log(now + 2 );
        console.log(now * 2 );
        console.log(now / 10 );


//Logical operators 

var johnOlder = ageJohn < ageMark ;

console.log(johnOlder);

//typeof operator  


console.log(typeof johnOlder);
console.log(typeof ageJohn);
*/

/************************
 * Operator precedence
 */
/*
var now = 2020 ; 

var yearJohn = 1989;
var fullAge = 18 ; 
var isfullAge = now - yearJohn >= fullAge ; //true 

console.log(isfullAge) ;


var ageJohn = now - yearJohn ; 
var ageMark = 35 ;
var average = (ageJohn + ageMark) / 2 ;

console.log(average);

// Multiple assignments 

var x , y;

x = y = (3 + 5) * 4 - 6 ; // 26 

console.log(x , y);

// 2 + 4 + 5 from the left to right 

//more operators   
 
x *= 2;
x++;
console.log(x);
*/
/*
var massJohn = 80 ; 
var massMark = 85 ; 
var heightJohn , heightMark ; 
heightJohn = 1.8; 
heightMark = 1.9; 


var johnBmi = massJohn/(heightJohn ^ 2 ) ;

var markBmi = massMark/ (heightMark ^2) ;

console.log(markBmi , johnBmi) ; 

var MarkIsBigger = markBmi > johnBmi ;  
console.log(MarkIsBigger);
if (markBmi > johnBmi)
     console.log( 'Mark is bigger')  ;
    else  console.log('johnBmi') ; 


*/


/*
var firstName = 'John' ; 
var age = 20 ; 
if (age < 13) {
    console.log(firstName + 'is a boy');

} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager '); 
} else if (age => 20 && age < 30) {
    
        console.log(firstName + ' is a youg man ');
    }

else{
    console.log(firstName + 'is a man ;')
}







var firstName = 'John';
var age = 15 ;


age >= 18 ? console.log(firstName + ' drinks beer') :
 console.log(firstName + ' drinks juice ')



var drink = age > 18 ? 'beer' : 'juice ' ;

console.log(drink) ;

// switch 

var job = 'cop' ;

switch(job) {

    case 'teacher' : 
        console.log(firstName + ' teaches kids how to code '); 
        break;
    case 'driver' : 
    console.log (firstName+ ' drives an uber in Lisbon'); 
    break;
    case 'designer' : 
        console.log (firstName + 'design beautiful websites ') ; 
        
        break ; 

        default : 
            console.log(firstName + ' does something else '); 

}


// Truthy and Falsy values 

// falsy values: undefined, null , 0 , '' , NaN ;
// truthy values : Not falsy ;


var height ; 
height = 23 ; 

if(height || height === 0 ) {
    console.log('Variable is defined ') ; 
}
else {
    console.log(' Undefined')
}


// == vs ===
// == does the convertion of the types ;
// === does not do the conversion of types ;

if(height == '23') {
    console.log(' == does type corection'); 
} 




////////////////////////////*****FUNCTIONS*****////////////////////////



/*
function calculateAge (birthYear) {

    return 2018 - birthYear; 
}


var ageJohn = calculateAge(1990) ; 
var ageJoh = calculateAge(1948) ; 
var ageJo = calculateAge(1969) ; 

console.log(ageJohn , ageJo , ageJoh) ;


function yearsUntilRetiremant (year, firstName) {

    var age = calculateAge(year) ;
    var retirement = 65 - age ; 
    if (retirement > 0 ){
        console.log(firstName + ' retires in ' + retirement + ' years');

    }

    else {
        console.log(firstName + '  is already retired ');
    }
}    


yearsUntilRetiremant(1980 , 'John') ; 
yearsUntilRetiremant(1910 , 'mark') ; 
yearsUntilRetiremant(1900 , 'John') ; 


*/



////////////////////////******Functions and expressions ******************* */
/*
var whatDoYouDo = function(job, firstName) {

    switch (job) {
        case 'teacher':
            
            return firstName + ' teaches kids how to code ' ; 
            case 'designer' :
                return firstName + ' Drives a cab in Lisbon' 
            case 'driver' : 
                return firstName + 'design websites '
        default:

            return firstName + ' does something else'
            
    }


} 

console.log(whatDoYouDo('teacher' , 'john'))





*/


///////////////********** ARRAYS ********************* */
/*
// initialize new array 
var names = ['John', 'Mark', 'Jane'] ; 
var years = new Array(1990, 1969, 1948) ;

console.log(names[2]) ; 

console.log(names.length) ; 

//accessing in an array 
names[1]  = 'Ben';

console.log(names) ; 

names[5] = 'Mary'
console.log(names) ; 


//different data types 


var john = ['John' , 'Smith ' , 1990 , 'designer' , false] ;

john.push('blue'); //stack push function
john.unshift('Mister') ;  // push in the beggining 
john.pop();
john.pop();
john.shift();
console.log(john);



// testing if the elements is in the array ;

//detects if he is an designer by passing the array 
var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'he is a designer';


console.log(isDesigner) ;


*/
/*
var bills = [ 124,48,268 ] ; 
var tips = [];
var tipsPlusBill = [];

function tipss (bill){
   return bill * 0.2  
}
tips.push(tipss(bills[0]));

tips.push(tipss(bills[1]));

tips.push(tipss(bills[2]));

function tipPlusBill(bills , tips ){
    return bills + tips ;

}





tipsPlusBill.push(tipPlusBill(bills[0], tips[0]));

tipsPlusBill.push(tipss(bills[0], tips[0]));

tipsPlusBill.push(tipss(bills[0], tips[0]));

console.log(tips);
console.log(tipsPlusBill);

//console.log(t);

*/
///////////////////////::**********OBJECTS ////////////////////////

/*
var john = {
    firstName:'John' ,
    lastName : 'Smith',
    birthYear: 1990, 
    family : ['Jane' , 'Mark', 'Bob', 'Emily' ], 
    job : 'teacher' , 
    isMarried: false


}; 
var x = 'birthYear' ; 
console.log(john);
console.log(john['lastName']);
console.log(john[x]);


john.job = 'designer' ;

john['isMarried']= true ;

console.log(john);


var jane = new Object();

jane.name = 'Jane' ;
jane.birth = '1969' ;
jane['lastName'] = 'Smith';


console.log(jane);


*/


///////////////////////***********OBJECTS AND METHODS ************* */


/*
var john = {
    firstName:'John' ,
    lastName : 'Smith',
    birthYear: 1980, 
    family : ['Jane' , 'Mark', 'Bob', 'Emily' ], 
    job : 'teacher' , 
    isMarried: false,
    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;

    }
}; 

john.calcAge();

console.log(john) ;

*/

// CHALANGE 4 //
/*
var john = {
    firstName:'John' ,
    lastName : 'Smith',
    birthYear: 1980, 
    family : ['Jane' , 'Mark', 'Bob', 'Emily' ], 
    job : 'teacher' , 
    mass : 80,
    height: 1.80 ,
    isMarried: false,
    calcBmi: function(height , mass){
        this.bmi = this.mass / this.height ^ 2 ;

    },

    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;

    }
}; 
   john.calcBmi();
   john.calcAge();
console.log(john);


var mark = {
    firstName:'mark' ,
    lastName : 'Smith',
    birthYear: 1980, 
    family : ['Jane' , 'Mark', 'Bob', 'Emily' ], 
    job : 'teacher' , 
    mass : 90,
    height: 1.90 ,
    isMarried: false,
    calcBmi: function(height , mass){
        this.bmi = this.mass / this.height ^ 2 ;

    },

    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;

    }
}; 


mark.calcAge();
mark.calcBmi();
console.log(mark);

function whosBmiIsBigger ( ){
if (mark.bmi > john.bmi)
    console.log('Mark Bmi is bigger')
else if (mark.bmi == john.bmi )
    console.log('John Bmi is equal to John Bmi');
  
    else console.log('Mark Bmi is smaller');

}
whosBmiIsBigger(mark.bmi,john.bmi)

*/


////////////************LOOPS AND ITERATION *****************/////////////

/*
for (let index = 1; index <= 20; index+= 2) {
    console.log(index);
}


var john = ['John' , 'Smith ' , 1990 , 'designer' , false] ;

for (let index = 0; index < john.length; index++) {
    console.log(john[index]);
}

var index = 0 ;
while(index < john.length) {
    console.log(john[index]);
    index++;
}
*/
//constinue and break statements 

/*

var john = ['John' , 'Smith ' , 1990 , 'designer' , false] ;

for (let index = 0; index < john.length; index++) {
    if(typeof john[index]!== 'string')
     continue; //continue to console.log if theres a string
    console.log(john[index]);
}


for (let index = 0; index < john.length; index++) {
    if(typeof john[index]!== 'string')
     break; //dont continue if theres a string print only john and smith
         console.log(john[index]);
}



for (let index = john.length-1; index >= 0; index--) {
     
    console.log(john[index]);
    
}
console.log(john.length);


*/















