//* Розгалуження та булеві оператори

// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. 
// Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. 
// В іншому випадку функцію повинна повернути рядок "Goodbye".

// function isAddult (age, balance) {
//     if (age > 18 && balance > 100) {
//        return 'Wellcome';
//     } else {
//       return  'Goodbye'; 
//     };
// };

// console.log(isAddult(10, 120)); 
// console.log(isAddult(18, 99)); 
// console.log(isAddult(35, 19)); 
// console.log(isAddult(28, 101)); 

//!==========================================================================================

// Задача - 2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). 
// Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, 
// в іншому випадку функція повинна повернути рядок "Це занадто дорого".

// function isAffordable(amount, price) {
//     totalPreis = amount * price;
//     if (totalPreis <= 1000) {
//         return 'Ми це купуємо';
//     } else {
//         return 'Це занадто дорого';
//   }
// };

// console.log(isAffordable(5, 200)); // Ми це купуємо
// console.log(isAffordable(10, 120)); // Це занадто дорого

//!==========================================================================================

// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. 
// Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", 
// якщо більше 25 - "Спекотно".

// function checkTemperature(temp) {
//     if (temp < 0) {
//         return "Замерзає";
//     } else if (temp >= 0 && temp <=25) {
//         return "Нормальна температура";
//     } else {
//         return "Спекотно";
//     };
// };

// console.log(checkTemperature(-5)); // Замерзає
// console.log(checkTemperature(10)); // Нормальна температура
// console.log(checkTemperature(30)); // Спекотно

//!==========================================================================================


// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. 
// Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".

// function isDivisible(number, divisor) {
//     if (number % divisor === 0) {
//         return 'Divisible';
//     } else { return 'not divisible' };
// };

// console.log(isDivisible(10, 5));   // Divisible
// console.log(isDivisible(10, 2));   // Divisible
// console.log(isDivisible(114, 42)); // not Divisible
// console.log(isDivisible(90, 5));   // Divisible

//!==========================================================================================

// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). 
// Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", 
// в іншому випадку поверніть "Без дощу".

// function checkRain (isRaining, hasUmbrella) {
//     if (isRaining && hasUmbrella) {
//         return 'Не змокнеш';
//     } else if (isRaining && !hasUmbrella) {
//         return "Змокнеш";
//     } else {
//         return "Без дощу";
//     }
// };

// console.log(checkRain(true, true));  // Не змокнеш
// console.log(checkRain(true, false)); // Змокнеш
// console.log(checkRain(false, true)); // Без дощу
// console.log(checkRain(false, false)); // Без дощу

// //!==========================================================================================

// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. 
// Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", 
// нижче 50 - "Незадовільно".

// function checkGrade(grade) {
//     if (grade >= 90) {
//         return "Відмінно";
//     } else if (grade >= 75 && grade < 90) {
//         return "Добре";
//     } else if (grade >= 50 && grade < 75) {
//         return "Задовільно";
//     } else {
//        return "Незадовільно";
//     };
// };

// console.log(checkGrade(89));    // Добре
// console.log(checkGrade(9));     // Незадовільно
// console.log(checkGrade(50));    // Задовільно
// console.log(checkGrade(40));    // Незадовільно
// console.log(checkGrade(110));   // Відмінно


//!==========================================================================================

// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. 
// Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", 
// в іншому випадку поверніть "Робочий день".

// function checkDay(dayOfWeek, isHoliday) {
//     if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday' || isHoliday ) {
//         return "Вихідний";
//     } else {
//         return 'Робочий день';
//     };
// };

// console.log(checkDay('Monday', true));
// console.log(checkDay('Saturday', true));
// console.log(checkDay('Monday', false));
// console.log(checkDay('Sunday', false));
// console.log(checkDay('Sunday', false));


//!==========================================================================================

// Задача-8
// Напишіть функцію, яка приймає один параметр year. 
// Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", 
// в іншому випадку - "Звичайний рік".

// function isSwitchYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 ===0) {
//         return "Високосний рік";
//     }else{
//         return 'Звичайний рік';
//     };
// };

// console.log(isSwitchYear(2024));
// console.log(isSwitchYear(2020));
// console.log(isSwitchYear(2021));
// console.log(isSwitchYear(1044));
// console.log(isSwitchYear(1492));
// console.log(isSwitchYear(0));

//!==========================================================================================

// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). 
// Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".

// function isInvite(hasInvitation, isFriend) {
//     if (hasInvitation || isFriend) {
//         return 'Ви запрошені';
//     } else {
//       return  "Вхід заборонено";
//     };
// };

// console.log(isInvite(true, false));
// console.log(isInvite(true, true));
// console.log(isInvite(false, false));
// console.log(isInvite(false, true));

//!==========================================================================================

// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, 
// поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".

// function checkAge(age) {
//     if (age < 12) {
//         return 'Дитина';
//     } else if (age >= 12 && age < 18) {
//         return "Підліток";
//     } else if (age >= 18 && age < 60) {
//         return "Дорослий";
//     } else {
//         return "Пенсіонер";
//     }
// };

// console.log(checkAge(7));
// console.log(checkAge(16));
// console.log(checkAge(21));
// console.log(checkAge(60));


//!==========================================================================================

// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). 
// Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", 
// якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".

// function checkAccess(isLoggedIn, hasAdminRights) {
//     if (isLoggedIn && hasAdminRights) {
//         return "Адмін-сторінка";
//     } else if (isLoggedIn && !hasAdminRights) {
//         return "Користувач";
//     } else {
//         return "Гість"
//     }
// };

// console.log(checkAccess(true,true));
// console.log(checkAccess(false, true));
// console.log(checkAccess(true,false));
// console.log(checkAccess(false,false));

//!==========================================================================================

// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", 
// якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".

// function checkSpeed(speed) {
//     if (speed < 60) {
//         return 'Безпечно';
//     } else if (speed >= 60 && speed <= 100) {
//         return 'Увага';
//     } else {
//         return 'Небезпечно';
//     }
// };

// console.log(checkSpeed(50));
// console.log(checkSpeed(120));
// console.log(checkSpeed(101));
// console.log(checkSpeed(99));
// console.log(checkSpeed(100));
// console.log(checkSpeed(59));


//!==========================================================================================

// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, 
// поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", 
// в іншому випадку поверніть "Вечір".

// function checkDayTime(time, isWeekend) {
//     if (time < 12 && !isWeekend) {
//         return "Ранок буднього дня";
//     } else if (time >= 12 && time < 18 && isWeekend) {
//         return "День вихідного дня";
//     } else {
//         return "Вечір"
//     };
// };

// console.log(checkDayTime(14, true));
// console.log(checkDayTime(6, false));
// console.log(checkDayTime(23, true));
// console.log(checkDayTime(12, true));


//!==========================================================================================

// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). 
// Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти",
//  в іншому випадку поверніть "Можна їсти".

// function checkGluten(hasGlutenAllergy, containsGluten) {
//     return hasGlutenAllergy && containsGluten ? "Не можна їсти" : "Можна їсти";
// };

// console.log(checkGluten(true, true));
// console.log(checkGluten(false, true));
// console.log(checkGluten(true, false));


//!==========================================================================================

// Задача-15
// Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть "Не можна купувати алкоголь", 
// якщо 18 або більше, поверніть "Можна купувати алкоголь".

// function canBayAlcohol(age) {
//     return age < 18 ? "Не можна купувати алкоголь" : "Mожна купувати алкоголь";
// };

// console.log(canBayAlcohol(18));
// console.log(canBayAlcohol(14));
// console.log(canBayAlcohol(48));

 
//!==========================================================================================

// Задача-16
// Напишіть функцію, яка приймає один параметр isSunny (булевий). 
// Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".

// function checkWeather(isSunny) {
//     return isSunny === true ? "Вийдемо на прогулянку" : "Залишимося вдома";
// };

// console.log(checkWeather(true));
// console.log(checkWeather(false));


//!==========================================================================================

// Задача-17
// Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть "Парне", 
// якщо непарне, поверніть "Непарне".


// function isEvenNumber(number) {
//     return number % 2 === 0 ? "Парне" : "Непарне";
// };

// console.log(isEvenNumber(154965956443));
// console.log(isEvenNumber(456));
// console.log(isEvenNumber(9));
// console.log(isEvenNumber(4));


//!==========================================================================================

// Задача-18
// Напишіть функцію, яка приймає два параметри: password та confirmPassword. 
// Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".

// function matchedthPassword(password, confirmPassword) {
//     return password === confirmPassword ? "Паролі збігаються" : "Паролі не збігаються";
// }

// console.log(matchedthPassword('maryna', 'Maryna'));
// console.log(matchedthPassword('maryna01', 'maryna01'));


//!==========================================================================================

// Задача-19
// Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. 
// Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, 
// поверніть "Літо", якщо більше 25, поверніть "Осінь".

// function checkSeason(temperature) {
//     if (temperature < 0) {
//         return "Зима"
//     } else if (temperature >= 0 && temperature <= 15) {
//         return "Весна";
//     } else if (temperature >= 16 && temperature <= 25) {
//         return "Осінь";
//     } else {
//         return "Літо";
//     }
// };

// console.log(checkSeason(-5));
// console.log(checkSeason(10));
// console.log(checkSeason(20));
// console.log(checkSeason(30));
// console.log(checkSeason(25));

//!==========================================================================================

// Задача-20
// Напишіть функцію, яка приймає два параметри: number1 та number2. 
// Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, 
// поверніть "Рівні".

// function foo(number1, number2) {
//     if (number1 > number2) {
//         return "Перше більше";
//     } else if (number1<number2) {
//         return "Перше менше";
//     } else {
//         return "Рівні"
//     }
// }

// console.log(foo(23, 23));
// console.log(foo(2, 5));
// console.log(foo(17, 0));


//!==========================================================================================

// Задача-21
// Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). 
// Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати".

// function checkBattery (isBatteryFull) {
//     return isBatteryFull === true ? "Не потрібно заряджати" : "Заряджати"
// };
// console.log(checkBattery(true));
// console.log(checkBattery(false));

//!==========================================================================================

// Задача-22
// Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). 
// Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено".

function hasAccessed(isStudent, hasID) {
    return isStudent && hasID ? "Вхід дозволено" : "Вхід заборонено";
}

console.log(hasAccessed(true, true));
console.log(hasAccessed(true, false));
console.log(hasAccessed (false, false));

//!==========================================================================================

// Задача-23
// Напишіть функцію, яка приймає два параметри: temperature та isRaining. 
// Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легка одяг".

function checkWeather(temperature, isRaining) {
    return temperature < 0 || isRaining ? "Потрібно носити теплий одяг" : "Легка одяг"; 
}

console.log(checkWeather(15, false));
console.log(checkWeather(0, true));
console.log(checkWeather(-1, false));
console.log(checkWeather(-1, true));



//!==========================================================================================

// Задача-24
// Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). 
// Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено".

//!==========================================================================================

// Задача-25
// Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). 
// Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено".

//!==========================================================================================

// Задача-26
// Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). 
// Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".

//!==========================================================================================

// Задача-27
// Напишіть функцію, яка приймає два параметри: hoursWorked та overtime.
// Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу".

//!==========================================================================================

// Задача-28
// Напишіть функцію, яка приймає два параметри: number та isPositive. 
// Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число".

//!==========================================================================================

// Задача-29
// Напишіть функцію, яка приймає два параметри: temperature та isSunny. 
// Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому випадку поверніть "Залишимося вдома".

//!==========================================================================================

// Задача-30
// Напишіть функцію, яка приймає два параметри: weight та height. 
// Якщо вага більше 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми".

//!==========================================================================================

// Задача-31
// Напишіть функцію, яка приймає два параметри: year та isLeapYear (булевий). 
// Якщо рік ділиться на 4 і isLeapYear є true, поверніть "Це високосний рік", в іншому випадку поверніть "Звичайний рік".

//!==========================================================================================

// Задача-32
// Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), і isSeniorCitizen (булевий). 
// Якщо вік менший за 18 або є студентом, або якщо старший за 65 і є пенсіонером, поверніть "Знижка на квиток", 
// в іншому випадку поверніть "Повна вартість квитка".

//!==========================================================================================

// Задача-33
// Напишіть функцію, яка приймає три параметри: temperature, isRaining, і hasUmbrella (булевий). 
// Якщо температура більше 25 і йде дощ, і у вас є парасоля, поверніть "Візьміть парасолю та одягніться легше", 
// якщо немає парасолі, поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку".

//!==========================================================================================

// Задача-34
// Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon (булевий), і purchaseAmount. 
// Якщо ви є членом клубу або маєте купон, і сума покупки більше 100, поверніть "Отримаєте знижку", 
// в іншому випадку поверніть "Знижка не доступна".

//!==========================================================================================

// Задача-35
// Напишіть функцію, яка приймає два параметри: password і confirmPassword. 
// Якщо password містить як мінімум одну цифру і збігається з confirmPassword, поверніть "Пароль прийнято", 
// в іншому випадку поверніть "Пароль не відповідає вимогам".

//!==========================================================================================

// Задача-36
// Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera (булевий), і hasMicrophone (булевий). 
// Якщо ви онлайн і маєте камеру або мікрофон, поверніть "Готові до відеоконференції", 
// якщо ви не онлайн або не маєте жодного з них, поверніть "Немає можливості для відеоконференції".

//!==========================================================================================

// Задача-37
// Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday. 
// Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро час на роботу", 
// в іншому випадку поверніть "Вільний час".

//!==========================================================================================

// Задача-38
// Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater (булевий). 
// Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть "Тепло та затишно", 
// якщо обігрівача немає, поверніть "Потрібно зігрітися", в іншому випадку поверніть "Погода нормальна".

//!==========================================================================================

// Задача-39
// Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і isInsured (булевий). 
// Якщо ви старше 18 років, маєте водійське посвідчення і страховку, поверніть "Можна керувати автомобілем", 
// в іншому випадку поверніть "Не можна керувати автомобілем".

//!==========================================================================================

// Задача-40
// Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і isHoliday. 
// Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", 
// в іншому випадку поверніть "Немає зустрічі".

//!==========================================================================================

// Задача-41
// Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), і discountAmount. 
// Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Скидка доступна", 
// в іншому випадку поверніть "Скидка не доступна".

//!==========================================================================================

// Задача-42
// Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", 
// "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). 
// Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".

//!==========================================================================================

// Задача-43
// Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, поверніть "Відмінно", "Добре", "Задовільно", 
// "Незадовільно" в залежності від оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - "Незадовільно".

//!==========================================================================================

// Задача-44
// Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, поверніть "Цитрус", "Яблуко", 
// "Груша", або "Ягода" в залежності від введеного фрукта. Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", 
// "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода".

//!==========================================================================================

// Задача-45
// Напишіть функцію, яка приймає один параметр vehicleType. 
// Використовуючи switch, поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в залежності від введеного типу 
// транспортного засобу. Наприклад, "Car" - "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші випадки - "Інше".

//!==========================================================================================

// Задача-46 Напишіть функцію, яка приймає один параметр animal. 
// Використовуючи switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від введеної тварини. 
// Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб", "Орлан", "Горобець" - "Птах", "Лосось", "Тунець", 
// "Тріска" - "Риба", "Ящірка", "Черепаха", "Змія" - "Рептилія".

//!==========================================================================================

// Задача-47
// Напишіть функцію, яка приймає один параметр weather. 
// Використовуючи switch, поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу погоди. 
// Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", "Snowy" - "Сніг".

// //!==========================================================================================

// Задача-48
// Напишіть функцію, яка приймає один параметр mood. 
// Використовуючи switch, поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від введеного настрою. 
// Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - "Злий", "Surprised" - "Здивований".

//!==========================================================================================

// Задача-49
// Напишіть функцію, яка приймає один параметр month. 
// Використовуючи switch, поверніть назву сезону ("Весна", "Літо", "Осінь", "Зима") в залежності від місяця. 
// Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", "Серпень" - "Літо", 
// "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", "Січень", "Лютий" - "Зима".

//!==========================================================================================

// Задача-50
// Напишіть функцію, яка приймає один параметр color. 
// Використовуючи switch, поверніть "Теплий колір" або "Холодний колір" в залежності від кольору. 
// Наприклад, "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - "Холодний колір".

//!==========================================================================================

// Задача-51
// Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, поверніть назву континенту 
// або "Невідомий континент" в залежності від введеного значення. Наприклад, "Africa", "Europe", "Asia", 
// "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент".



// Task 1
// Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// console.log(1 && 5);
// console.log(5 && 1);
// console.log(0 && 2);
// console.log(2 && 0);
// console.log('' && 'Mango');
// console.log('Mango' && '');
// console.log('Mango' && 'Poly');
// console.log('Poly' && 'Mango');
// console.log(true || false);
// console.log(false || true);
// console.log(true || true);

// console.log(3 || false);
// console.log(false || 3);
// console.log(3 || true);
// console.log(true || 3);
// console.log(!true);
// console.log(!false);
// console.log(!3);
// console.log(!'Mango');
// console.log(!0);
// console.log(!'');

//!==========================================================================================
    
// let isOnline = true;
// const isNotOnline = !isOnline;  
    
// console.log(isNotOnline); // false
    
//!==========================================================================================

// console.log(true && false);
// console.log(false && true);
// console.log(true && true);
// console.log(false && false);

// console.log(true || false);
// console.log(false || true);
// console.log(true || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);
// console.log(!!true);
// console.log(!!false);

// console.log(1 === 1 && 2 === 2);
// console.log(1 === 2 && 2 === 2);
// console.log(1 === 1 || 2 === 2);
// console.log(1 === 2 || 2 === 2);

// console.log(1 > 2 && 2 < 3);
// console.log(1 < 2 && 2 < 3);
// console.log(1 > 2 || 2 < 3);
// console.log(1 < 2 || 2 < 3);

// console.log(0 && 3);
// console.log(3 && 0);
// console.log(0 || 3);
// console.log(3 || 0);

// console.log('' || 'apple');
// console.log('orange' || '');
// console.log('' && 'banana');
// console.log('grape' && '');

// console.log(0 || false);
// console.log(false || 0);
// console.log(1 && 'cherry');
// console.log('banana' && 1);
// console.log(null && 'pear');
// console.log('peach' && undefined);
// console.log(undefined || 'plum');
// console.log('melon' || null);
// console.log(undefined && false);
// console.log(true || 'watermelon');
// console.log('watermelon' || true);
// console.log(false && 'pineapple');
// console.log('pineapple' && false);
// console.log(NaN || 'kiwi');
// console.log('kiwi' || NaN);
// console.log(NaN && 'mango');
// console.log('mango' && NaN);
// console.log(Infinity || 'apricot');
// console.log('apricot' || Infinity);
// console.log(Infinity && 'blueberry');
// console.log('blueberry' && Infinity);
// console.log(null || undefined);