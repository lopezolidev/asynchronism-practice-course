//generators return an interable object that "remembers" it's value. Hence it's a function that we can access, leave and come back to it later.

function* gen(i){
    yield i;        //we return values with 'yield'
    yield i + i;
    yield i + i * i;
    yield i + i * i / i;
}

const g = gen(2);  //assign values for the iterator when initializing

console.log(g.next().value); //2  //next() shows the next element, value only shows the value itself 
console.log(g.next().value); //4

console.log(g.next());//{ value: 6, done: false } //'done' is a boolean referring completion  of yield
console.log(g.next());      //{ value: 4, done: false } 

console.log(g.next().value); //undefined //there're no more yields to the function


function* iterable(array){
    for (let value of array){
        yield value;
    }
}

const anyArray = [2, 4, 2, 5, 3, 6, 7];

const it = iterable(anyArray);

console.log(it.next().value); //2
console.log(it.next().value); //4
console.log(it.next().value); //2
console.log(it.next().value); //5
console.log(it.next().value); //3
console.log(it.next().value); //6
console.log(it.next().value); //7
console.log(it.next().value); //undefined

//a generator can call another generator

function* anothergen(i){
    yield i + i;
    yield i + i + i;
    yield i * 4;
}

function* gen1(i){
    yield i;
    yield* anothergen(i);
    yield i * i;
}

const gengen = gen1(5);

console.log(gengen.next().value); // 5
console.log(gengen.next().value); // 10
console.log(gengen.next().value); // 15
console.log(gengen.next().value); // 20
console.log(gengen.next().value); // 25
console.log(gengen.next().value); // undefined
