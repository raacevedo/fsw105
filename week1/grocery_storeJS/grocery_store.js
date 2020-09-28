var shopper = {
      storeName : "Walmart",               //this is a string
      listName  : "Dinner Shopping List",  //this is a string
      budget    : 40,                      //this is a number
      allFoodIsOrganic: false,             //this is a boolean
      pizzaIsForDinner: true,              //this is a boolean
      groceryCart: ["pizza dough", "pizza sauce", "meat toppings", "veggie toppings", "cheeses"],
      shoppingListName : function() {
        return this.storeName + " " + this.listName;
      }
    };
    
    console.log(shopper.shoppingListName());