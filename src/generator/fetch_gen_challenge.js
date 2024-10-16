// in this challenge we'll implement async / await with a generator function

const url = "https://api.escuelajs.co/api/v1/products"

async function fetchAPIData(urlAPI) {
    try{
        const response = await fetch(urlAPI)

        if(!response.ok){
            console.error(`HTTP error: ${response.status}`)
        }

        const data = await response.json()

        return data

    } catch (e) {
        console.error(e)
    }
} // asynchronous function that returns a resolved promise from the fetched API

async function* fetchGen(urlAPI) {
    yield await fetchAPIData(urlAPI) // first product
    
    yield await fetchAPIData(`${urlAPI}/1`) // second product

    const firstProduct = await fetchAPIData(`${urlAPI}/1`)
    
    if (firstProduct && firstProduct.category) {
    
        yield firstProduct.category.name
    
    } else {
       
        yield "Category not found"
    
    }  // yielding category name of first product

} // asynchronous generator function

async function fetchData(urlAPI) {
    const dataGenerator = fetchGen(urlAPI) // we don't need an ' await ' statement here, due to the nature of the returned value of the generator

    for await (const data of dataGenerator) {
        console.log(`Recieved data: ${JSON.stringify(data, null, 2)}`)
    } //stringyfying in JSON format the data recieved, that way we can output it in the console

}

fetchData(url)