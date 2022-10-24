import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';


  


//two forms to write async functions

async function fetchData(urlApi){ //"async" out of the function
    const response = await fetch(urlApi); //"await" inside the function
    const data = await response.json(); //"await" where we want the asynchronicity
    return data;
}

const anotherFn = async (urlApi) => {
    //using try/catch to handle errors better when an exception inside our catch is triggered.
    try{
        //here goes the code we want to run
        const products = await fetchData(`${urlApi}/products`);
        //first we want all the products parsed as an array of objects

        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        //now we want a single product from our array of products, to look it up in categories
        //it uses "id" as a numerical parameter to access a single product

        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        //here we look for the category of the first product in the array of products

        console.log(products);
        console.log(product);
        console.log(category);
    } catch (err){
        //here the exception appears as the cause of incompletion of our "try" block
        console.error(err);
    }
}

anotherFn(`${API}`);


//playground challenge. My solution:
export function runCode() {
    const url = 'https://domain-api-com';
    const asyncFn = async (url) => {
        try {
            const returned = await fetch(url);
            return returned;
        }
        catch (err) {
            console.error(err);
        }
    }
    asyncFn(url);
  }

  await runCode();

//playground solution. There's no need to call the function, and the input had nothing to do with how the function is called
export async function runCode() {
    const url = 'https://domain-api-com';
    try {
      await fetch(url)
    } catch (error) {
      throw new Error('API Not Found');
    }
  }
  