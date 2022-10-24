//a promise is an object that may or may not return a certain value in the future 
const promise = new Promise(function (resolve, reject){ //we pass a callback
    //instacing the promise

    resolve('hey!');
    //resolve is like a "return" but for the successful case, "reject" is for the failure case
})

const cows = 9;

const cowsCounter = new Promise(function (resolve, reject){
    if (cows > 10){
        resolve(`We've got ${cows} cows in the farm!`);
        //executing the promise in the fulfilling state (success)
    } else {
        reject(`There're not enough cows in the farm`);
        //executing the promise in the rejected state (failure)
    }
})

//invoking the promise using "then", which will return the value of the promise. 
//we pass a function inside the .then (callback)
cowsCounter.then( (result) => {
    console.log(result); 
    //the promise will return a result, which we'll use it as we like

    //We've got 15 cows in the farm!
})
    .catch((error) => { //this will "catch" the reject and show the error, if not there's an unhandled rejection error = you didn't create a catch to handle the error
    console.log(error);

    //There're not enough cows in the farm
}).finally(() => console.log('Finally'));
//finally tells us if the promise executed, no matter if it was fulfilled or rejected


//playground challenge
function delay(time, message) {
        return new Promise(function (resolve, reject) {
                    setTimeout( () => {resolve(message)}, time);
                    //first argument is an anon function, it will execute the resolve. resolve is like a return
                })
  }
  
  delay(2000, "Hello after 2s")
  .then((result)=> console.log(result))
  