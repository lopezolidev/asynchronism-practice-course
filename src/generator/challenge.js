import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';


async function fn(urlApi){

    return await fetch(urlApi)
    .then( (response) => {
        return response.json();
    })

}

 async function* anotherFn(urlApi){
    try {
        const products = await fn(`${urlApi}/products`);
        yield console.log(products);

        const product = await fn(`${urlApi}/products/${products[0].id}`);
        yield console.log(product.title);

        const category = await fn(`${urlApi}/categories/${product.category.id}`);
        yield console.log(category.name);

    }catch (e){
        throw new Error(`Error ${e}`);
    }
}

const lastFn = anotherFn(API);

lastFn.next().value;
lastFn.next().value;
lastFn.next().value;