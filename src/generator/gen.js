// generators are a special type of functions where we can obtain multiple returns, and the function ' recalls ' its context of execution, therefore ' remembers ' it's last step


function* gen() {
    yield 'a'
    yield 'b'
    yield 'c'
}

const generated = gen() // must be equal to a variable for it to remember the context of execution

console.log(generated.next())
// { value: 'a', done: false }

console.log(generated.next().value)
// b

console.log(generated.next().value)
// c

// we can use generators to iterate over an array

function* iterate (array) {
    for (let element of array) {
        yield element
    }
} // eterating element by element of the array

const it = iterate([1, 2, 3, 4, 5, 6, 7])

console.log(it.next().value) // 1
console.log(it.next().value) // 2
console.log(it.next().value) // 3
console.log(it.next().value) // 4
console.log(it.next().value) // 5
console.log(it.next().value) // 6
console.log(it.next().value) // 7

console.log(it.next().value)
// undefined





