import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, { 
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

function updateData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

const product = {
    "title": "238",
    "price": 238,
    "description": "An awesome description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

const updatedProduct = {
        "title": "Change title",
        "price": 100
      }

postData(`${API}/products`, product)
      .then( response => response.json())
      .then(message => console.log(message))
      .catch( err => console.error(err))
      .finally( () => console.log('finally'));

updateData(`${API}/products/239`, updatedProduct)
    .then( response => response.json())
    .then(message => console.log(message))
    .catch( err => console.error(err))
    .finally( () => console.log('finally'));

    