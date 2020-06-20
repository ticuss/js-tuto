
//BUDGET CONTROLLER
var budgetController = (function(){ //closure

    var Expense  = function(id,description,value){   //function constructor
  
        this.id = id ; 
        this.description = description;
        this.value = value ;
    };
    var Income  = function(id,description,value){   //function constructor
  
        this.id = id ; 
        this.description = description;
        this.value = value ;
    };

    var data = {
        allItems : {
            exp:[],
            inc:[]
        },
        totals: {
            exp:0,
            inc:0
        }
    }
    
})();


// UICONTROLLER
var UIController = (function(){

    var DOMstrings = { 
        inputType : '.add__type' ,
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
     }

    return {
        getinput: function() {
           
            return { //returns an object
             type : document.querySelector(DOMstrings.inputType).value,
             description : document.querySelector(DOMstrings.inputDescription).value,
             value : document.querySelector(DOMstrings.inputValue).value
          };
        },
    getDOMstrings: function(){
    return DOMstrings;
}

    };





})();


//each module is independent 

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){ //MAIN

    var setupEventListeners = function(){

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem)

        document.addEventListener('keypress', function(event){
        
        if(event.keyCode === 13 || event.which === 13 ) {
           
            ctrlAddItem();
        
               }
        
         });

    };
    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem  = function() {

        // TO - DO 

    // 1. Get the field input data
        var input = UICtrl.getinput();

    //2. Add the item to the budget controller 

    //3 . add the new item to the UI

    //4. Calculate the budget 

    //5. Display it
    }

return {
    init: function() {
        console.log('Application has Started');
        setupEventListeners();
    }
};

})(budgetController,UIController); 

controller.init();




























