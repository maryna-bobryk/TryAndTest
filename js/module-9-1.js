// console.log(window.localStorage);
// console.log(localStorage);

// ! ==============================
// localStorage.setItem('ui-theme', 'light');
// console.log(localStorage);

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));
// console.log(localStorage);

// ! ==============================
const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem('settings', JSON.stringify(settings));

const savedSettings = localStorage.getItem('settings');
console.log(savedSettings);
// {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);
// {theme: 'dark', isAuthenticated: true, options: Array(3)}

// ! ==============================

sessionStorage.setItem('user-id', '123');
sessionStorage.setItem(
  'tickets',
  JSON.stringify({ from: 'Lviv', to: 'Kyiv', quantity: 2 })
);
console.log(sessionStorage);
