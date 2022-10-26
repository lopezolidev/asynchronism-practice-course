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

function exclaim(value){
   return `${value}!`;
}

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
  const arrayed = Array(value);
  
  console.log(concated);
}
doubleChars('abc');

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


//5- Group by
// Write a groupBy function that groups elements from an array by the returned value from the callback when an element from the array is passed as an argument.

// This is a really common pattern when manipulating arrays.
// Function calls
//   const input = [
//     {
//       name: 'John',
//       yearOfBirth: 1988,
//       placeOfBirth: 'New York',
//     },
//     {
//       name: 'Nancy',
//       yearOfBirth: 1963,
//       placeOfBirth: 'New York',
//     },
//     {
//       name: 'John',
//       yearOfBirth: 1980,
//       placeOfBirth: 'Toronto',
//     },
//   ];

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

//6- Repeat the function x times
// Write a repeat function that receives 3 arguments: a string, number of repetitions, and a callback that will be repeated. The repeat function should pass the string to the callback as an argument and repeat the callback x times, with the result of the previous repetition as an argument.

// Function calls
//   repeat('infinite power', 3, exclaim);
//   repeat('triple', 2, doubleChars);
//   repeat('trogdor', 3, t => `°${t}°`);
// Result
//   "infinite power!!!"
//   "tttrrriiipppllleee"
//   "°°°trogdor°°°"

