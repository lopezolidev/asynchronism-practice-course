// A promise is an object that represents the eventual completion (fulfilling) or failure or an asynchronous operation

const url = "https://api.escuelajs.co/api/v1/products"

const fetchPromise = fetch(`${url}/4`); // ' fetch ' API returns a promise, that must be resolved in order to interact with the object that represents its fulfillment
  
  console.log(fetchPromise); // shows the status of our promise
  
  fetchPromise
    .then((response) => response.json()) // parsing in JSON format the response of the promise
    .then((res) => console.log(res.description)) // displaying in the console the description of the article
    .catch( (e) => console.error(e)) // displaying a possible error
  
  console.log("Started request…"); // prints first this message, due to the asynchronous nature of the promise

const fetchPromise1 = fetch(
    `${url}/1`,
  );
  const fetchPromise2 = fetch(
    `${url}/2`,
  );
  const fetchPromise3 = fetch(
    `${url}/3`,
  );
  
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (let response of responses){
            console.log(`${response.url}: ${response.status}`);
        } // for every promise, we'll print its url and status
    }) // executing all of the fetched promises in our array.
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });