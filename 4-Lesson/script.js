// Function constructor 
/*

var john = {
    name:'John',
    yearOfBirth: 1990, 
    job : 'teacher'
};
//function constructor uppercase 
var Person = function(name , yearOfBirth , job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth; 
    this.job = job;
    }



 Person.prototype.calculateAge =
  function() {
    console.log(2020 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith' ;

// instance
var john = new Person('John' , 1990 , 'teacher'); 
var jane = new Person('Jane' , 1969 , 'designer');
var mark = new Person('Mark' , 1948 , 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(mark.lastName);*/



///object.create 
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John ' ; 
john.yearOfBirth = '1990';
john.job = 'teacher' ;

var jane = Object.create(personProto , {
    name : {value : 'Jane'},
    yearOfBirth  : {value : 1969},
    job : {value : 'designer'}
   
});

*/


//primitives vs object
/*
var a = 23 ; 
var b = a; 

a = 46 ;
console.log(a);

console.log(b);


//Objects
var obj1 = {
    name: 'John',
    age: 26 
};

var obj2 = obj1;
obj1.age = 30 ; 



console.log(obj1.age);

console.log(obj2.age);



//functions 

var age = 27 ;
var obj = {
    name : 'Jonas',
    city : 'Lisbon'
};

function change (a,b) {
    a= 30 ;
    b.city = 'San Francisco';
}

change (age,obj) ; 

console.log(obj.city);


*/



//Passing function as an argument ; 

/*
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn ) {

    var arrRes = [];
    for (let index = 0; index < arr.length; index++) {
        arrRes.push(fn(arr[index]));

    }
    return arrRes ; 

} 


function calculateAge(el) {
    return 2020 -el ; 
}


function isFullAge(el) {

    return el >= 18 ;

}

function maxHeartRate (el) {

    if(el>= 18 && el <= 81){

    return Math.round(206.9 - (0.67 * el));
}
else return -1;
}

var ages = arrayCalc(years, calculateAge) ;
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(fullAges) ;
console.log(rates) ;

*/

//Function returning functions
/*

function interviewQuestion (job) {
    if(job === 'designer'){

        return function(name) {
            console.log(name + ', can you please explain what UX design is ?') ; 
            }
        } else if (job === 'teacher') {
            return function(name){
                console.log('What subject do you teach' + name + '? ' );
            }
        }
        else {
            return function(name){
            console.log('Hello' + name + ', what do you do ? ');
            }
        
        }

}
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion(' John') ;
designerQuestion('Jane');
designerQuestion('Mark')

interviewQuestion('teacher ')(' Mark');

*/

///////////////////////////////////////////
///////////******IIFE******/////////////
/*
function game() {
    var score = Math.random() * 10 ; 
    console.log(score >= 5 );
}

game();*/
/*
(function () {
    var score = Math.random() * 10 ; 
    console.log(score >= 5 );
})(); // we can't acces variable score from outside
*/

//console.log(score) ; score undefined.


//calling this function with a variable function(5);
/*(function (goodLuck) {
    var score = Math.random() * 10 ; 
    console.log(score >= 5 - goodLuck);
})(5); 
*/


////////////////////////******CLOSURES***********///////////

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a)

    }

}
//alert(retirement(65));
var retirementUS = retirement(66); 

retirementUS(1990);

retirement(66)(1991) ;

var retirementGermany = retirement(65);
var retirementIcemland = retirement(67) ;
retirementGermany(1997);
retirementIcemland (1997);

*/
/*
function interviewQuestion (job) {
    if(job === 'designer'){

        return function(name) {
            console.log(name + ', can you please explain what UX design is ?') ; 
            }
        } else if (job === 'teacher') {
            return function(name){
                console.log('What subject do you teach' + name + '? ' );
            }
        }
        else {
            return function(name){
            console.log('Hello' + name + ', what do you do ? ');
            }
        
        }

}
*/

//closure
/*
function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer'){
                console.log(name + ', can you please explain what UX design is ?') ; 
                
        }else if (job === 'teacher'){
             
                console.log('What subject do you teach' + name + '? ' );
        }else  {
             
                console.log('Hello' + name + ', what do you do ? ');
        }
    }
}

interviewQuestion('teacher')(' John') ;

*/

/////////////////////////////////////////////::
// Bind, call and apply
/*

var john = {
    name: 'John',
    age: 26,
    job:'teacher',
    presentation: function(style , timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a '+ this.job+
           'and I\'m ' +this.age + ' years old' );
        } else if (style === 'friendly'){
            console.log('Hey ! what\'s up? I\'m' + this.name + 'I\'m a '+ this.job+
            'and I\'m ' +this.age + ' years old . Have a nice '+ timeOfDay +'.');
        }
    }

}

var emily = {
    name: ' Emily ', 
    age: 35 , 
    job:'designer'
};

john.presentation('formal', 'morning');


john.presentation.call(emily,'friendly', 'afternoon');

// Bind method example

var johnFriendly = john.presentation.bind(john, 'friendly'); 

johnFriendly('mornong');

johnFriendly(' in the night');



var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');





var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn ) {

    var arrRes = [];
    for (let index = 0; index < arr.length; index++) {
        arrRes.push(fn(arr[index]));

    }
    return arrRes ; 

} 


function calculateAge(el) {
    return 2020 -el ; 
}


function isFullAge(limit,el) {

    return el >= limit ;

}


var ages = arrayCalc(years,calculateAge);

var fullJapat = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(fullJapat);
console.log(ages);


*/



/*
function myFunction() {
    var txt;
  
    var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
   console.log(txt);

}


myFunction();
*/

(function(){
    var question1 = ['What is your age ? ' ,25 , 23 , 50];

    var question2 = ['What is your weight ? ' ,85 , 20 , 0,50,10];
    
    var question3= ['What is my name ? ' ,'Costya' , 'hz' , 'idinax','lala'];
    
    function createFuntion(array, correctAnswer){
        var arrRes = [];
        
        for (let index = 0; index < array.length; index++) {
            arrRes.push(array[index]);
        }
         arrRes.push(correctAnswer)
        return arrRes ;
    
    }
    q1=createFuntion(question1,2) ;
    q2=createFuntion(question2,1) ;
    q3=createFuntion(question3,1) ;
    
    
    
     
    
    //console.log(select);
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    //selectQuestion();
    
    
    function nextQuestion(){
        var select = Math.ceil(Math.random() *3);
        var question = eval('q'+select);
       // console.log(this.question);   
        var counter = 0;
        for (let index = 1; index < question.length-1; index++) {
            console.log(index + ' == ' ,question[index]);
        }
       var answer =  prompt(question[0] ,'please write an number' );
         if (answer == question[question.length-1])
         {
         
            console.log(keepScore);
         console.log ('Correct') ;
         nextQuestion();
        }
       else if(answer == 'exit')
        console.log('Finita')
         else {console.log('Not Correct');
         nextQuestion();}
       
    };
    nextQuestion();
}())




/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
*/



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
*/