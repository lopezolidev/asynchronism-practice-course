//To use fetch we must install it with: npm i node-fetch
//Then here we must import that package, and in the package.json we must type "type":"module"

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
    //fetch returns an object from the url, it must be inside a function or assigned to a variable, just like an object or promise
};

fetchData(`${API}/products`)
    .then( response => response.json())
    .then( function (products){
        return fetchData(`${API}/products/${products[0].id}`);
        //using the function here again will return an object, but now will be the id of the first object in the parsed array of objects
    })
    .then( response => response.json()
    //the output from the previous then will output "raw" information, which we must turn into an object
    )
    .then( product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
        //we want the specific id from the product we had before and find it in the categories section of the API, that way we'll have the "raw" version of a specific product
    })
    .then( response => response.json()) //now we have the specific product parsed as an object
    .then( category => {
        console.log(category)
    })
    .catch( (error) => console.log(error))    
    .finally( () => console.log("finally"));


fetchData(`${API}/products`)
    .then(function (response){
        return response.json();
        //must be parsed into an object to know what response contains. It works inside like a promise, so resolve and reject both return objects.
        //the fetch method returns a promise on each .then
    })
    .then(function (products){
        //second "resolve"
        console.log(products);
    })
    .then( () => console.log('Hi'))
    .catch( (error) => console.log(error));