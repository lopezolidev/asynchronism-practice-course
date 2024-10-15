// A promise is an object that represents the potential fulfillment or failure of an asynchronous operation

const promise1 = new Promise(function (resolve, reject)  {
    resolve('hey!')
}) // ' resolve ' and ' reject ' act somewhat like a return statement, represents what will happen with the code after the promise gets called with ' then ' method. ' then ' calls the resolve case, ' catch ' calls the reject case

promise1.then(response => console.log(response))
// hey!

const computers = 3

const farm = new Promise (function (resolve, reject) {
    if (computers > 5) {
        resolve(`We have ${computers} computers available`)
    } reject(`Sorry, ${computers} is not enough`)
})

farm
    .then(res => console.log(res))
    .catch(e => console.error(e))
    .finally( () => console.log("Finally! There's nothing to do here! "))
// We have 7 computers available
// Sorry, 3 is not enough
// Finally! There's nothing to do here!

