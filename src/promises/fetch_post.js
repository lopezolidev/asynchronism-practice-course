// we'll make a post request using fetch, entirely based on promises

const URL = "https://api.escuelajs.co/api/v1/products/"

function postData (urlAPI, data) {

    const request = fetch(urlAPI, {
        method: 'POST', // method to send data from this client to the server
        
        mode: 'cors', // certain permissions needed to post in this particular API

        credentials: 'same-origin',     // if we need some additional permission related with a user based authentication of the API 

        headers: {
            'Content-Type': 'application/json'
        },  // the way we're sending the information, in this case, json format

        body: JSON.stringify(data)  // the actual information we're sending to the server
    })

    return request

}


const product = {
    "title": "ADFAD ADFVAWRDV AWFW ",
    "price": 99999999999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(URL, product)
  .then(response => response.json())
  .then(data => console.log(data))


/* RESPONSE MESSAGE:
{
  title: 'ADFAD ADFVAWRDV AWFW ',
  price: 99999999999,
  description: 'A description',
  images: [ '["https://placeimg.com/640/480/any"]' ],
  category: {
    id: 1,
    name: 'Gucci Clothes',
    image: 'https://i.imgur.com/QkIa5tT.jpeg',
    creationAt: '2024-10-14T22:25:38.000Z',
    updatedAt: '2024-10-15T15:56:29.000Z'
  },
  id: 311,
  creationAt: '2024-10-15T20:16:41.000Z',
  updatedAt: '2024-10-15T20:16:41.000Z'
}
  */