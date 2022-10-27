const fnAsync = () => {
    return new Promise( (resolve, reject) => {
        (true)
        ? setTimeout( () => resolve('Async!!!'), 2000)
        : reject(new Error('Error!'));
        //ternary if
    })
}

//outside we use the reserved word "async", inside the function we use "await". It's another way to handle asynchronism.
//async function returns an object. Therefore the app doesn't stop
const anotherAsync = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('After async');
}

console.log('Before');
anotherAsync();
console.log('After');

// Before
// After
    // 2s later
// Async!!!
// After async



