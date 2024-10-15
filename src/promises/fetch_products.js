const URL = "https://api.escuelajs.co/api/v1"

function fetchData(url) {
    return fetch(url)
} // this function returns a promise

// fetchData(`${URL}/1`)
//     .then(r => r.json())
//     .then(r => console.log(r))
//     .catch(e => console.error(e))

    // after calling the functon, we resolve the promise, parse it in json format, display it in the console and handle the possible error

// making multiple calls => AKA: callback hell with fetch

fetchData(`${URL}/products`)
    .then(response => response.json())
    .then(res => {
        console.log(res)
        return fetchData(`${URL}/products/${res[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${URL}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(e => console.error(e))
    .finally( () => console.log('Everything finished!'))