//Simple example of a callback function

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){ //"callback" can be any name you like
    return callback(num1, num2); //it's important to return our callback function, if not the result yields "undefined"
}

console.log(calc(2, 2, sum)); 
//we don't call the callback with "()", if so we'd incur in invoking the function right away, which may cause an error

//Another example using setTimeOut

setTimeout( () =>{
    console.log("Hello Javascript!");  //using an arrow function directly inside the argument
}, 5000);
// Hello Javascript!

setTimeout(greeting, 3000, message); //using a callback properly in this function

function greeting(callback){
    return callback();
}

function message(){
    console.log('Hello Javier');
}
// Hello Javier
