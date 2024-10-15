// async / await is syntax sugar to treat promises.That way we'll use promises inside functions that itself return a Response object itself, making it easier to handle the operation

const urlAPI = "https://api.escuelajs.co/api/v1/products"

async function fetchData (url) {
    const response = await fetch(url)   // keyword ' await ' after we used ' async ' keyword in the function declaration

    if (!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
    } // in case the fetch failed

    const data = await response.json()  // parsing the response in json format. Also goes with ' await ' keyword

    return data
} // this function returns a response object, that's a promise, therefore we need to resolve it

const response_promise = fetchData(urlAPI)
// recieving the promise like a synchronous function!

response_promise    
    .then(data => console.log(data[0]))
    .catch(e => console.error(e))
// resolving response_promise object as a promise, handling the errors at the end, that in itself frees us from using try...catch blocks inside the asynchronous function 

const someAsync = async (urlApi) => {
    try{
        const products = await fetchData(urlApi)
        const title = await fetchData(`${urlApi}/${products[0].id}`)
        const category = (await fetchData(`${urlApi}/${products[0].id}`)).category.name

        console.log(products)
        console.log(title)
        console.log(category)
    }catch (e) {
        console.error(e)
    }
}

someAsync(urlAPI)