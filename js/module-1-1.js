// function addOverNum(value, ...args) {
//     let totalSum = 0;
//     for(numb of args){
//         if(numb > value){
//             totalSum += numb;
//         }
//     }
//     return totalSum;
//   };

//   console.log(addOverNum(50, 15, 27));
//   console.log(addOverNum(4, 89, 7, 14, 13, 1, 0));
  
  

//   function getExtremeScores(scores) {
//     const best = Math.max(...scores);
//     const worst = Math.min(...scores);
//   return {best, worst};
//   }

//   console.log(getExtremeScores([50, 15, 27]));
//   console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 }, 
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook());




//   const profile = {
//   username: 'Jacob',
//   playTime: 300,

//   changeUsername(newName){
//    this.username = newName;
//   },

//   updatePlayTime(hours){
//     this.playTime += hours;
   
//   },
//   getInfo(){
//     return `${this.username} has ${this.playTime} active hours!`;
//   }
//   };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"





// function isEnoughCapacity(products, containerSize){
//   let totalProduct = 0;
//   for (const product of Object.values(products)){
//     totalProduct += product;
//   }
// return totalProduct <= containerSize;
// };

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false




// function calcAverageCalories(days){
// let averageCalories = 0;
// if (days.length === 0){
//   return 0;
// }

// for (const day of days){
// averageCalories += day.calories;
// }
// return averageCalories / days.length;
// };


// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0