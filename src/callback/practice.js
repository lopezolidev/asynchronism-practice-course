//Here are a series of exercises of callbacks to improve my understanding of such elements in JavaScript

//1- Is this number odd?
//Write a function that returns true or false for a given number. We will reuse this function, so make it reusable.
//Function calls
  // isOdd(4);
  // isOdd(5);
//Result
  // false
  // true

  function odd(value){
    if(value % 2 == 0){
      return false
    }
    else{
      return true
    }
  }

  function isOdd(value){
    return console.log(odd(value));
  }

  isOdd(4); //false
  isOdd(5); //true

//2- Exclaim
//Write a function that returns the given string with a concatenated exclamation ! at the end. We will reuse this function, so make it reusable

//Function calls
//      exclaim('Adrian');
//      exclaim(exclaim('Adrian'));
// Result
//      "Adrian!"
//      "Adrian!!"


console.log(exclaim('Adrian')); //Adrian!
console.log(exclaim(exclaim('Adrian')));

//3- Double the chars!
//Write a function that duplicates each char in a string. If I pass 'abc' to the function, it should return 'aabbcc'. We will reuse this function, so make it reusable.

// Function calls
//   doubleChars('Adrian');
//   doubleChars('ssssnake');
// Result
//   "AAddrriiaann"
//   "ssssssssnnaakkee"

function doubleChars(value){
  const splitted = value.split('');
  const mapped = splitted.map( a => `${a}${a}`)
  const joined = mapped.join('');
  console.log(joined);
}
doubleChars('abc');
doubleChars('Adrian');
doubleChars('ssssnake');

//4- At least two elements
// Write a function called atLeastTwo that receives an array and a callback as its arguments. If at least two elements from the array return a truthy value when passed as an argument to the callback, atLeastTwo should return true. If there aren't at least two elements from the array that return a truthy value when passed as arguments to the callback, atLeastTwo should return false.

// Function calls
//   atLeastTwo([1, 2, 3, 4, 5], isOdd);
//   atLeastTwo([2, 4, 6], isOdd);
//   atLeastTwo([1, 2, 3, 4, 5], t => t > 3)
// Result
//   true
//   false
//   true


function atLeasTwo(array, callback){
  let counter = 0;
  array.map((a) => (callback(a)) ? counter+=1 : counter);
  return (counter >= 2) ? true : false;
}

console.log(atLeasTwo([1, 2, 4], isOdd2));



//5- Group by
// Write a groupBy function that groups elements from an array by the returned value from the callback when an element from the array is passed as an argument.

// This is a really common pattern when manipulating arrays.
// Function calls
  // const input = [
  //   {
  //     name: 'John',
  //     yearOfBirth: 1988,
  //     placeOfBirth: 'New York',
  //   },
  //   {
  //     name: 'Nancy',
  //     yearOfBirth: 1963,
  //     placeOfBirth: 'New York',
  //   },
  //   {
  //     name: 'John',
  //     yearOfBirth: 1980,
  //     placeOfBirth: 'Toronto',
  //   },
  // ];

//   // 1
//   groupBy(input, t => t.name);

//   // 2
//   groupBy(input, t => isOdd(t.yearOfBirth));
// Result
//   // 1
//   {
//     John: [
//       {
//         name: 'John',
//         yearOfBirth: 1988,
//         placeOfBirth: 'New York',
//       },
//       {
//         name: 'John',
//         yearOfBirth: 1980,
//         placeOfBirth: 'Toronto',
//       }
//     ],
//     Nancy: [
//       {
//         name: 'Nancy',
//         yearOfBirth: 1963,
//         placeOfBirth: 'New York',
//       }
//     ]
//   }

//   // 2
//   {
//     false: [
//       {
//         name: 'John',
//         yearOfBirth: 1988,
//         placeOfBirth: 'New York',
//       },
//       {
//         name: 'John',
//         yearOfBirth: 1980,
//         placeOfBirth: 'Toronto',
//       }
//     ],
//     true: [
//       {
//         name: 'Nancy',
//         yearOfBirth: 1963,
//         placeOfBirth: 'New York',
//       }
//     ]
//   }

// function selection(value){
//   return Object.entries(value).map( a => (a[0] == 'name') ? a[1] : null);
// }
// console.log(selection(input));

// function groupBy(input, callback){
//   return input.reduce( (a, b) => {
//     callback(a) + callback(b);
//   })
// }
// groupBy(input, selection);

//solution:
const input = [
  {
    name: 'John',
    yearOfBirth: 1988,
    placeOfBirth: 'New York',
  },
  {
    name: 'Nancy',
    yearOfBirth: 1963,
    placeOfBirth: 'New York',
  },
  {
    name: 'John',
    yearOfBirth: 1980,
    placeOfBirth: 'Toronto',
  },
];

const isOdd = (num) => {
  return num % 2 === 1;
};

const groupBy = (array, callback) => array.reduce(
  (accumulator, currentValue) => {
    const key = callback(currentValue);
    
    if(accumulator[key]) {
      accumulator[key].push(currentValue);
    } else {
      accumulator[key] = [currentValue];
    }

    return accumulator;
  },
  {},
);

groupBy(input, t => t.name);

groupBy(input, t => isOdd(t.yearOfBirth));

//6- Repeat the function x times
// Write a repeat function that receives 3 arguments: a string, number of repetitions, and a callback that will be repeated. The repeat function should pass the string to the callback as an argument and repeat the callback x times, with the result of the previous repetition as an argument.

// console.log(exclaim(exclaim('infinite power')));

const isOdd2 = (a) => (a % 2) ? true : false;

function doubleChars(value){
  const splitted = value.split('');
  const mapped = splitted.map( a => `${a}${a}`)
  const joined = mapped.join('');
  return joined;
}

// console.log(doubleChars(doubleChars('triple')));
function exclaim(value){
  return `${value}!`;
}


function repeat(string, repetitions, callback){
  if (repetitions === 0) {return string}; //in this case the string when repetitions === 0 will be the output from callback(string)

  return repeat(callback(string), repetitions - 1, callback); //in order to return a function inside another recursively you have to call it using a return 
}

console.log(repeat('Adrian', 3, exclaim));
console.log(repeat('triple', 2, doubleChars));
console.log(repeat('trogdor', 3, t => `°${t}°`));
// Function calls
//   repeat('infinite power', 3, exclaim);
//   repeat('triple', 2, doubleChars);
//   repeat('trogdor', 3, t => `°${t}°`);
// Result
//   "infinite power!!!"
//   "tttrrriiipppllleee"
//   "°°°trogdor°°°"



//Other exercises
// Exercise 1
// Create a function addTwo that accepts one input and adds 2 to it.

// console.log(addTwo(3)) should output 5
// and
// console.log(addTwo(10))
// should output 12


console.log(addTwo(3))

// Exercise 2
// Create a function addS that accepts one input and adds an "s" to it.

// console.log(addS("pizza")); should output pizzas and console.log(addS("bagel")); should output bagels

function addS(value){
  return `${value}s`;
}
console.log(addS('pizza'))

// Exercise 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

// console.log(map([1, 2, 3], addTwo)); should output [ 3, 4, 5 ]


function map(array, callback){
  return array.map(a => callback(a));
}
console.log(map([1, 2, 3], addTwo));

// Exercise 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

function addTwo(number){
  return number + 2;
}

let arr = ["a", "b", "c", "d"];

let copy = "";

function returningForEach(array){
  copy += array.forEach( (char) => char); //I'm trying to return something inside the function. But the exercise asks to not return anything. 
}

console.log(returningForEach(arr));
console.log(copy);


// Solution 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);  
  }
}

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet);

// Exercise 5
// Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. Call this new function mapWith.

// console.log(mapWith([1, 2, 3], addTwo)); should output [ 3, 4, 5 ]

function addTwo (a){
  return a + 2
}


function mapWith(array, callback){
  return array.map(callback)
}

console.log(mapWith([1, 2, 3], addTwo));

// Exercise 6
// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0))

function add(a, b){
  return a + b;
}

function reduce(num, callback, int){
  return num.reduce(callback);
}

console.log(reduce([1, 4, 3], add, 0));

// Exercise 7
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );
// Should output [5, 15]

let arreglo = [5, 10, 15, 20]; 
let arreglo2 = [15, 88, 1, 5, 7];
let arreglo3 = [1, 10, 15, 5, 20];

function cycles(arr1, arr2, arr3){
  let numbers = [];
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      for (let k = 0; k < arr3.length; k++){
        if(arr1[i] == arr2[j] == arr3[k]){ //the "===" compares the value and type of only 2 elements, "==" allows for multiple elements
          if(!(arr1[i] == undefined)){
            numbers.push(arr1[i]);      
          }
        }
      }       
    }
  }
  console.log(numbers);
  return numbers;
}

cycles(arreglo, arreglo2, arreglo3);


// Teacher's solution:

// Solution 7
function intersection(...arrays) { //rest parameter, is used when we don't know how many parameters will be supplied to the function
  return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}
// Combining reduce and filter results in a powerful function. Here, if acc is not provided as a param, it is set to the first array, and we are not providing it as an argument. So in subsequent calls we just filter the arrays to return items that were also included in the acc` array.

// Notice the use of ...arrays, here we are using the rest parameters because we don't know how many arguments will be supplied to the function.