const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//calling the resource

const API = 'https://api.escuelajs.co/api/v1'; 
//here's the reference to our "root" of the API that we want to extract information. Its a relative path
//Its uppercase because we won't alter this value in the future

//With XMLHttpRequest we have full control over the workflow of calling the API. It's an older way to handle requests to the server. There's a simpler and more recent form that is fetch.



function fetchData(urlApi, callback){
//beware not calling "API" because its the value in line 4

let xhttp = new XMLHttpRequest();
//making a reference to out XMLHTTPRequest object instanciated earlier

xhttp.open('GET', urlApi, true); 
//method to start the opening of communication with the server ('GET'), recieve the URL and if it's asynchronous (true or false)

xhttp.onreadystatechange = function (event){
//this is an event handler. Here the method will listen the state of the xhttp object and validate its different states 

        if (xhttp.readyState === 4) { // "===" → same value and same type of data
            // 4 = if the state of the request is "completed"
            // 0 = not initialized
            // 1 = loading
            // 2 = executing
            // 3 = interacting 

            //that value will change continuously. Therefore we have to insert the possible error inside this if, as the xhttp.status may not be 200

            if(xhttp.status === 200){
                //HTTP response status codes. 200 = success
                
                callback(null, JSON.parse(xhttp.responseText)); 
                //2nd value is a transformation to the incoming text from the API, we want it in JSON format (an object)
            }  else {
                let error = new Error('Error: ' + urlApi); //throw an error pointing the API
                return callback(error, null);
                //callback will display the error and we'll not make any transformation
                //it's important to return our callback to have a value at the end of the conditional when an error in the response is detected
            }
        }
    }

xhttp.send();
//this method will send the request to the server
}

//Now it's time to call the function

fetchData(`${API}/products/`, function(error1, data1){
    //calling the url from the API in 'products' section
    //passing as callback an anonymous function, with 2 parameters defined in the fetchData function, an erro and a transformation.

    if (error1) return console.error(error1);
    //executing the error part

    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
    //fetchData again, now with the product parsed as an array (data1 is parsed as an array of objects that have 'id' property), sent as the url
    // another anon function sent as callback and triggering error if it happens in this object in position [0]
        if(error2) return console.error(error2);
        
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
            //inside categories we're going to look for the id of certain product inside a category. Using optional chaining (<property>?) will throw an undefined in the property that doesn't exists and won't stop the application
            if (error3) return console.error(error3); 
            
            console.log(data1[0]);
            //displaying the object in this position
            
            console.log(data2.title);
            //title of object in data2

            console.log(data3.name);
            //name of the object in data3 (inside the categories)
        })
    })
})
//this is a callback hell. It's overengineering. Using the first request we could have accesed the information we want


//First output: data1[0] = data2
// {
//     id: 12,
//     title: 'Licensed Granite Towels',
//     price: 271,
//     description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
//     category: {
//       id: 3,
//       name: 'Furniture',
//       image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4090'
//     },
//     images: [
//       'https://api.lorem.space/image/furniture?w=640&h=480&r=2965',
//       'https://api.lorem.space/image/furniture?w=640&h=480&r=5564',
//       'https://api.lorem.space/image/furniture?w=640&h=480&r=2484'
//     ]
//   }

// Second output: data1[0].title = data2.title
// Licensed Granite Towels

// Third output: data1[0].category.name  = data2.category.name
// Furniture

//To execute this code in the terminal we type: node src/callback/challenge.js (type folders and files)
//How to turn it into a script?
// 1- Go to package.json
// 2- in "scripts" type the name of the script and = to the path of the file, 
// eg: "callback": "node src/callback/challenge.js"