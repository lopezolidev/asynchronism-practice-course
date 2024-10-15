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
// baz said: bar said: hello

function difference (n1, n2) {
    if (n1 >= n2) return n1 - n2
    return n2 - n1
}

function calc (n1, n2, callback) {
    return callback(n1, n2)
}

console.log(calc(19, 27, difference))
// 8

// using setTimeout as a JS API to execute time-delayed code
// this API recieves a callback, being directly defined as one of its arguments or already defined somewhere else and sent with its arguments in the parameters of the function

setTimeout( () => {
    console.log('Greetings Elixir developers')
}, 2000)
// Greetings Elixir developers

function sayYourNameInTrinary (name) {
    let tri = ''

    name = name.toUpperCase()

    for (const char of name) {
        switch(char){
            case 'A':
                tri += '001'
                break;
            case 'B':
                tri += '002'
                break;	
            case 'C':
                tri += '010'
                break;
            case 'D':
                tri += '011'
                break;	
            case 'E':
                tri += '012'
                break;
            case 'F':     	
                tri += '020'
                break;
            case 'G':
                tri += '021'
                break;
            case 'H':
                tri += '022'	
            case 'I':
                tri += '100'
                break;
            case 'J':
                tri += '101'
                break;
            case 'K':
                tri += '102'
                break;
            case 'L':
                tri += '110'
                break;
            case 'M':
                tri += '111'
                break;
            case 'N':
                tri += '112'
                break;    	
            case 'O':
                tri += '120'
                break;
            case 'P':
                tri += '121'
                break;
            case 'Q':
                tri += '122'
                break;
            case 'R':
                tri += '200'
                break;
            case 'S':
                tri += '201'
                break;
            case 'T':
                tri += '202'
                break;
            case 'U':
                tri += '210'
                break;
            case 'V':
                tri += '211'
                break;
            case 'W':
                tri += '212'
                break;
            case 'X':
                tri += '220'
                break;
            case 'Y':
                tri += '221'
                break;
            case 'Z':
                tri += '222'
                break;
            default:
                tri += '000'
        }
    };

    console.log(tri)
}

// this time, we're sending the callback already defined with an argument of it placed as another argument for the callback, right after the time delation

setTimeout(sayYourNameInTrinary, 3000, 'xavier')
// 220001211100012200
