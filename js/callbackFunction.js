// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
  
//   const result = makePizza();
//   const pointer = makePizza;

//   console.log(result);
//   console.log(pointer);

//!====================================================

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }

//   console.log(makeMessage('Pepperoni', deliverPizza));
//   console.log(makePizza('Hawaii'));
//   console.log(deliverPizza('Pepperoni'));


//!====================================================

//   function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   };
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
//   });
  
//   makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}`);
//   } );
  
//!====================================================

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     for (let i = 0; i < orderedItems.length; i++){
//       totalPrice += orderedItems[i];
//     };
//     return totalPrice;
// };
// console.log (calculateTotalPrice([1, 2, 3, 4, 5 ,45])) ;
  
/** 
 DAS SIND GLEICH SACHEN
*/


// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
    
//     orderedItems.forEach(function(item){
//       totalPrice += item;
//     });  // Закриваємо дужку правильно
  
//     return totalPrice;
//   };

// console.log (calculateTotalPrice([1, 2, 3, 4, 5 ,45])) ;

//!====================================================

// function filterArray(numbers, value) {
//     let newArr = [];
//     for (number of numbers){
//         if (number > value){
//             newArr.push(number);
//         };
//     };
//     return newArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


/** 
 DAS sind die GLEICHen SACHEN
*/


// function filterArray(numbers, value) {
//     let newArr = [];
//     numbers.forEach(function(number){
//       if (number > value){
//         newArr.push(number)
//       };
//     });
//     return newArr;
//   }

//   console.log(filterArray([1, 2, 3, 4, 5], 3));

  //!====================================================

//   function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   };

// /** 
//  DAS sind die GLEICHen SACHEN
// */

//   const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   };

//   calculateTotalPrice([12, 85, 37, 4]);