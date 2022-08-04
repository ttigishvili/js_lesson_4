ინსტრუქცია (1).docxინსტრუქცია (1).docx//  Exercise 1

// let numbers = ['html', 'css', 'javascript', 'python']

// numbers.shift();
// numbers.pop();
// numbers.unshift('nodejs');
// numbers.push('atom');

// console.log(numbers.length);

// for(let x = 0; x < numbers.length; x++){

//     console.log(numbers[x]);

// }






//  Exercise 2

// let fruits = ["orange", "banana", "pear"];

// console.log(
//   "In our array called Fruits there is",
//   fruits.length,
//   "element. Elements are :"
// );

// for (let x = 0; x < fruits.length; x++) {
//   console.log(fruits[x]);
// }

// fruits.unshift("whatermelon");
// fruits.push("apple", "ananas");

// console.log(
//   "Our Array called Fruits updated",
//   fruits.length,
//   "elements are presented. Elements are :"
// );

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.splice(2, 0, 'mango');

// console.log(
//   "Our Array called Fruits updated",
//   fruits.length,
//   "elements are presented. Elements are :"
// );

// for (let y = 0; y < fruits.length; y++) {
//   console.log(fruits[y]);
// }

// fruits.shift();
// fruits.pop();
// console.log(
//   "Our Array called Fruits updated",
//   fruits.length,
//   "elements are presented. Elements are :"
// );

// for (let z = 0; z < fruits.length; z++) {
//   console.log(fruits[z]);
// }






//  Exercise 3


// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray = array.map(function(y) {

//     return y / 3;

// });

// console.log(newArray);






//Exercise 4

// let array = [
//   "hello",
//   125,
//   "javascript",
//   "html",
//   43,
//   "css",
//   "scss",
//   "bootstrap",
//   88,
//   59,
//   "python",
// ];

// let newArray = array.filter(function (item) {
           
//     return typeof item == 'number'
// });

// console.log(newArray);






// Exercise 5

// let languages = ["html", "css", "javascript", "python", 'php'];

// let newArray = languages.filter(function (item) {
//   return  item.length > 3;
// });

// console.log(newArray);






//Exercise 6   

// let array = ["academy", "of", "digital", "industries"].reduce(function(accumulator,currentValue){

//     return accumulator.concat(currentValue)

// }, 
// []
// );

// console.log(array.toString());






// Exercise 7






// Exercise 8

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newArray = words.filter(function (item) {
//   return  words.item == 'M' || 'm'
// });

// console.log(newArray);






// Exercise 9

// let array1 = [1, 2];
// let array2 = [3, 4];
// let array3 = [5, 6];

// let newArray = array1.concat(array2);
// let newArray1 = newArray.concat(array3);
// console.log(newArray1);





// Exercise 10

// let arr = [1, 2, 3, 4, 5];


// arr.forEach(myFunction);

// function myFunction(item) {
//   arr += item;

// }






// Exercise 11

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// let newArray = numbers.filter(function(item){
//     return item > 0;
// })

// console.log(newArray)





// Exercise 12

// let arr = [-1, -2, -3, 4].some(function(x){
//     return x > 0 
// })
// console.log(arr)





// Exercise 13

// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]].reduce(function(accumulator,currentValue){
//     return accumulator.concat(currentValue)
//     },
//     []
// )






// Exercise 14

// let array = [23, 45, 32, 5, 87, 7, 3, 98];

// let result = array.sort( (x, y) => y - x)[7];

// console.log(result);