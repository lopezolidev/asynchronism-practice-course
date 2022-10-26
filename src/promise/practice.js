//practice file to exercise Promises

// 1. Create a promise that resolves in 3 seconds and returns "Success!"
// 2. Create a promise that resolves in 3 seconds and returns an error after 1 second
//    stating the error is "Too bad, this one failed"
// 3. Chain your promises together to return either success or failure after 4 seconds


const p1 = new Promise((resolve, reject) => { setTimeout(() => resolve('Success!'), 3000); });  //p1: Success! after 3s   (3s+3s=6s)
const p2 = new Promise((resolve, reject) => { setTimeout(() => reject('Too bad, this one failed'), 1000); });  //p2: Too bad, this one failed after 1s   (4s+1s=5s)

    Promise.all([p1, p2]).then(function(values){ console.log("Promise all values: ", values); }) // [ 'Success!', 'Too bad, this one failed' ]
