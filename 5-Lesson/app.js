
//BUDGET CONTROLLER
var budgetController = (function(){ //closure

    var Expense  = function(id,description,value){   //function constructor
  
        this.id = id ; 
        this.description = description;
        this.value = value ;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentages = function(totalIncome){
            if(totalIncome > 0 ){
        this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
    this.percentage = -1;
    }
         };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

    var Income  = function(id,description,value){   //function constructor
  
        this.id = id ; 
        this.description = description;
        this.value = value ;
    };

        calculateTotal = function(type) {
            var sum = 0 ;
            data.allItems[type].forEach(function(cur){
                sum += cur.value;

            });
            data.totals[type] = sum;
        };
    var data = {
        allItems : {
            exp:[],
            inc:[]
        },
        
        totals: {
            exp:0,
            inc:0
        },
        budget: 0,
        percentage : -1 
    };
    return {
        addItem: function(type , des , val){
           var newItem, ID;
           

        // Creating an new ID 
        if(data.allItems[type].lengh > 0){
        ID = data.allItems[type][data.allItems[type].lengh - 1].id + 1;
    } else {ID = 0;}
            //create new item based on inc or exp type
           if(type === 'exp'){
            newItem = new Expense(ID,des,val);
        } else if (type === 'inc'){
            newItem = new Income(ID , des , val);
        }
        //push into the stack
        data.allItems[type].push(newItem);
       //return the element
        return newItem;

        },

        deleteItem : function(type, id){
            var ids, index;
             ids = data.allItems[type].map(function(current) {
                return current.id ;
            });

            index = ids.indexOf(id);

            if(index !== -1 ) {
                data.allItems[type].splice(index,1)
            }

        },
        calculateBudget: function(){
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate the budget: income - expenses 
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the percentage of income that we spent
            if(data.totals.inc > 0){
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100) ;
        } else {
            data.percentage = -1 ; 
        }

        },


        calculatePercentages: function(){

            data.allItems.exp.forEach(function(cur){

                cur.calcPercentages(data.totals.inc);

            });
         

        },
           
        getPercentages:function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPerc;
        },
        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp : data.totals.exp,
                percentage : data.percentage 
            }

        },

        testing: function(){
            console.log(data);
        }
    };
})();


// UICONTROLLER
var UIController = (function(){

    var DOMstrings = { 
        inputType : '.add__type' ,
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel : '.budget__value',
        incomeLabel : '.budget__income--value',
        expenseLabel : '.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage' ,
        container : '.container',
        expensesPercLabel : '.item__percentage'
     }

    return {
        getinput: function() {
           
            return { //returns an object
             type : document.querySelector(DOMstrings.inputType).value,
             description : document.querySelector(DOMstrings.inputDescription).value,
             value : parseFloat(document.querySelector(DOMstrings.inputValue).value) // parseFloat() function
          };
        },
        
        diplayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
   
            var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };

            nodeListForEach(fields, function(current, index) {
                
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });

        },
        addListItem : function(obj,type){
            var html,newHtml,element;
            // Create HTML string with placeholder text
            if (type === 'inc') {
              
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {

                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace the placehodler text zith some acutal data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            //insert the html into the DOM;
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        
        
        },

        deleteListItem : function(selectorID){
            //we can only delete a child 
           var el = document.getElementById(selectorID)
            el.parentNode.removeChild(el);
            

        },

        clearFields(){
            var fields , fieldsArr;
            fields =   document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue );

            fieldsArr = Array.prototype.slice.call(fields); 

            fieldsArr.forEach(function(current, index, array) {          
                current.value = "";  
            });

            fieldsArr[0].focus();

        },

        diplayBudget : function(obj){

            document.querySelector(DOMstrings.budgetLabel).textContent=obj.budget ; 
            document.querySelector(DOMstrings.incomeLabel).textContent=obj.totalInc ; 
            document.querySelector(DOMstrings.expenseLabel).textContent=obj.totalExp ; 

            if(obj.percentage > 0 ){
                document.querySelector(DOMstrings.percentageLabel).textContent=obj.percentage + '%' ;
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
            }

        },


    getDOMstrings: function(){
    return DOMstrings;
}

    };


})();


//each module is independent 

//GLOBAL APP CONTROLLER //MAIN
var controller = (function(budgetCtrl, UICtrl){ 

    var setupEventListeners = function(){

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem)

        document.addEventListener('keypress', function(event){
        
        if(event.keyCode === 13 || event.which === 13 ) {
           
            ctrlAddItem();
        
               }
        
         });

         document.querySelector(DOM.container).addEventListener('click' , ctrlDeleteItem);

    };
    

    
    var updateBudget = function () {
            //1. calculate Bugdget 

        budgetCtrl.calculateBudget();

            //2 . return budget
            var budget = budgetCtrl.getBudget() ;

            //3. Display budget to UI
           UICtrl.diplayBudget(budget);


    };
    
   var updatePercentages = function(){
        //1. calculate percentage 

        budgetCtrl.calculatePercentages();

        //2. read percentages from the budget controller
    var percentage = budgetCtrl.getPercentages();

        //3. Update UI with new percentages.

        UICtrl.diplayPercentages(percentage);

    };

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem  = function() {

        var newItem ,input ;
        // TO - DO 

    // 1. Get the field input data
         input = UICtrl.getinput();


         if(input.description !== "" && !isNaN(input.value) && input.value > 0 ) {   //is not a number function that verifies if its a number or not 

        
    //2. Add the item to the budget controller 
      newItem =  budgetCtrl.addItem(input.type,input.description,input.value);

    //3 . add the new item to the UI
    UICtrl.addListItem(newItem,input.type);
    //3.5 clear the fields
    UICtrl.clearFields();
    
    //4. Calculate the budget 

    //5. Display it

    // Calculate and update the budget
         
        updateBudget();

            //calculate percentage and update them

            updatePercentages();

        } //end if

    }

    var ctrlDeleteItem = function(event){
            var idemID , splitID, type , ID ; 
        
            itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; 

        if(itemID) {

            splitID = itemID.split('-');
            type = splitID[0]; 
            ID = parseInt(splitID[1]);
            
            //1. delete the item from the data structure 
            budgetCtrl.deleteItem(type, ID);

            //2. delete the item from UI

                UICtrl.deleteListItem(itemID);
            //3. update and shoz the new budget .
            updateBudget();

        }
    };

return {
    init: function() {
        console.log('Application has Started');
        UICtrl.diplayBudget({
            budget: 0,
                totalInc: 0,
                totalExp : 0,
                percentage : 0
        });
        setupEventListeners();
    }
};

})(budgetController,UIController); 

controller.init();




























