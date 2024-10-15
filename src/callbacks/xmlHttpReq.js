// creating an XMLHttpRequest from scratch

const XMLHttpRequest  = require('xmlhttprequest').XMLHttpRequest

// after we installed it with npm in this local environment, we need to require the package, and we do it so by appending suffix ' .XMLHttpRequest ' 

const url  = "https://api.escuelajs.co/api/v1"

const DONE = 4

const OK = 200


function xmlhttpreq (url, callback) {
    try{


        const xhr = new XMLHttpRequest(); 
        // instantiating the class 


        xhr.open("GET" , url, true) 
        // opening our request with 'GET' verb in our URL and the method is asynchronous (TRUE as third parameter)

        xhr.onreadystatechange = function (event) {
            if (xhr.readyState === DONE) {
                
                if (xhr.status === OK) {

                    callback(null, JSON.parse(xhr.responseText))
                    // we'll leave our callback ready to process the JSON parsed text obtained from the xhr.responseText

                    // if the request of the xhr object (4) and the HTTP status code results in 200, we'll use our callback to parse the response of the xhr request in JSON format
                }
                else {
                    const error = new Error('Error: ' + url)
                    return callback(error, null)
    
                    // in case the information couldn't be downloaded, we'll throw an error and return our callback with the created error
                }
            // ' .onreadystatechange ' will trigger this anonymous function every time thete ' .readyState ' code changes 
            } 
        }

        xhr.send()

    }catch (error) {
        console.error(error)
    }
}

xmlhttpreq(`${url}/products`, function (error1, data1) {
    if (error1) return console.error(error1)
    
    xmlhttpreq(`${url}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2)

        xmlhttpreq(`${url}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3)

            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
}) // using multiple callbacks related to the same data. We return console errors whenever an error in the URL may appear. Then ath the third call of ' xmlhttpreq ' we use optional chaining (in order to handle any upcoming error when accessing an inexisten URL), and logging in console the response from data1, data2 and data3

/*
{
  id: 1,
  title: 'Majestic Mountain Graphic T-Shirt',
  price: 44,
  description: 'Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.',
  images: [
    'https://i.imgur.com/QkIa5tT.jpeg',
    'https://i.imgur.com/jb5Yu0h.jpeg',
    'https://i.imgur.com/UlxxXyG.jpeg'
  ],
  creationAt: '2024-10-14T22:25:38.000Z',
  updatedAt: '2024-10-14T22:25:38.000Z',
  category: {
    id: 1,
    name: 'Clothes',
    image: 'https://i.imgur.com/QkIa5tT.jpeg',
    creationAt: '2024-10-14T22:25:38.000Z',
    updatedAt: '2024-10-14T22:25:38.000Z'
  }
}  ←←← data1[0]

Majestic Mountain Graphic T-Shirt  ←←← data2.title

Clothes  ←←← data3.name

*/



function getData () {
    const xhr = new XMLHttpRequest()

    xhr.responseType = 'json'

    xhr.open('GET', url, true)


    xhr.onload = (event) => {

        const data = xhr.response

        console.log(data)
    }

    xhr.send()
}

// getData()