import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, { //this object is a set of configuration settings for the request
        method: 'POST',
        //There're 4 verbs for the request:
        // GET → retrieve
        // POST → send
        // PUT → update
        // DELETE → eliminate
        
        mode: 'cors', // client-server security configuration system 
        //it allows cross-origin requests and communication between domains. 
        //The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers.
        
        //Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
            //value of information to be sent, this case is json
        },
        body: JSON.stringify(data)
        //the information to be sent will be sent as text. It's recieved as an object but will be sent as json text. This case will be the argument 'data' in the main function
    })
    return response;
}

//Before sending the new product we must know through the docs which is the url we'll be using and also which are the specs of such product

const data = {
    "title": "238",
    "price": 238,
    "description": "An awesome description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${API}/products`, data)   //we want to know which is the response from the server 
  .then( response => response.json())
  .then(message => console.log(message))
  .catch( err => console.error(err))
  .finally( () => console.log('finally'));