// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
  
//* Change code below this line
//   getBalance() {
//     return this.balance;
//     },
  
//   getDiscount() {
//     return this.discount;
//     },
  
//   setDiscount(value) {
//     this.discount = value;
//     },
  
//   getOrders() {
//     return this.orders;
//     },
  
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//     },
// };

// customer.setDiscount(0.15);

// console.log(customer.getDiscount()); // 0.15

// customer.addOrder(5000, "Steak");

// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//!==========================================================================================


// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items
//   }

//   addItem(newItem) {
//     return this.items.push(newItem)
//   }

//   removeItem(itemToRemove) {
//     return this.items = this.items.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


//!==========================================================================================

// class StringBuilder{
// #value
//     constructor(initialValue) { 
//       this.#value = initialValue;
//   }
//   getValue() { 
//     return this.#value
//   }
//   padEnd(str) {
//     if (typeof str === 'string') {
//       this.#value += str
//     } else {
//      return  'This argument is not a string'
//     }
//   }

//   padStart(str) {
//      if (typeof str === 'string') {
//        this.#value= str + this.#value
//     } else {
//      return 'This argument is not a string'
//     }
//   }

//   padBoth(str) {
//     if (typeof str === 'string') {
//        this.#value = str + this.#value + str
//     } else {
//      return 'This argument is not a string'
//     }
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//!==========================================================================================


// class Car { };
// console.log(Car);



// class User {
//   constructor() {
//     console.log("constructor call")
//   }
// }
// // console.log(User);

// const mango = new User();
// console.log(mango);

//!==========================================================================================

// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}


// class User {
//   constructor(name, email) {
//     console.log(name, email);
    
//   }
// }

// const mango = new User('Mango', 'mango@gmail.com');
// console.log(mango);


// class User{
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// };

// const mango = new User('Mango', 'mango@mail.com')
// console.log(mango);


// const poly = new User('Poly', 'poly@mail.com');
// console.log(poly);

//!==========================================================================================

// class Car{
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const newCar = new Car('BMW', 'XT-5', 55000);
// console.log(`This ist ${newCar.brand} ${newCar.model}, price ${newCar.price}€`)


// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   displayInfo() {
//     console.log(`Das ist ein ${this.brand} ${this.model}, Preis: ${this.price}€`);
//   }
// }

// const newCar = new Car('BMW', 'XT-5', 55000);
// newCar.displayInfo(); 

//!==========================================================================================


// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail());  // “mango@mail.com”

//!==========================================================================================


// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail());  // “mango@mail.com”

//!==========================================================================================

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

//!==========================================================================================


// class MyClass {
// 	static b = 5;

// 	constructor(value) {
// 		this.a = value;
// 	}
// }

// const instance = new MyClass(10);
// console.log(instance.b); // underfinde
// console.log(MyClass.b); // 5

//!==========================================================================================

// class Car {

//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.maxPrice) {
//       return this.#price;
//     }else{
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//!==========================================================================================

// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (price> Car.#maxPrice) {
//       return 'Error! Price exceeds the maximum';
//     } else {
//       return 'Success! Price is within acceptable limits';
      
//     }
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//!==========================================================================================

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User{
//   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// console.log(Admin.role.BASIC); // "basic"

//!==========================================================================================

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email)
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

//!==========================================================================================

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
    }
  
  isBlacklisted(){}
  
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true

//!==========================================================================================