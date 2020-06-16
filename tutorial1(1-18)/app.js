var module = require("./modules");
// var time = 0;

// var timer = setInterval(() => {
//   time += 2;
//   console.log(time + " Seconds have passed");

//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log(__dirname, __filename);

// //Function Expression
// //Function can be called as a parameter in function
// function callFunction(fun) {
//   fun();
// }

// //Function as variable
// var sayBye = function () {
//   console.log("Bye from expression");
// };

// callFunction(sayBye);
// sayBye();

console.log(module.counter(["Shaun", "Hosea", "Tirtajaya"]));
console.log(module.adder(3, 5));
console.log(module.adder(module.pi, 5));
