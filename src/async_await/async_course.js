const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!!'), 2000)
        : reject(new Error('Error!!!'))
    })
} // this function returns a promise. Therefore we'll simulate the functionality of async / await by a function that returns a promise

const anotherFn = async () => {
    const res = await fnAsync()
    console.log(res)
    console.log('Hi')
}

console.log('Before')
anotherFn()
console.log('After')
/*

Before
After           
    
        ←← async / await functions do not block the course of the program, instead they're sent to the WebAPI's section of the JS engine

Async!!!    ←← now the async function gets executed with its timeout and finally the log at the bottom of anotherFn 
Hi

*/