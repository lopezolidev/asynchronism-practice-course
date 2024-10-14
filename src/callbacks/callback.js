function bar (r) {
    return `bar said: ${r}`
}

function baz (z, arg) {
    return `baz said: ${z(arg)}`
}

function caller(func, func2, arg) {
    return func(func2, arg)
}

console.log(caller(baz, bar, 'hello'))