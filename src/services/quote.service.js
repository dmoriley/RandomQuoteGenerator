import fetch from '../resources/quotes';

export default (() => {
  const url = 'somewebsiteurl';

  //Method to get change response object to useable json                  
  const toJson = (response) => response.json();

  // IIFE variations
  /*
    // short es6 IIFE function, can't pass arguments to this version or return a value. Useful for
    // creating closure to hide variables from the outside or do some simple operation.
    // {
    //   data = fetch(url).then(toJson);
    // }

    // const data = (function() {
    //   return fetch(url).then(toJson);
    // })()

    // const data = (() => {
    //   return fetch(url).then(toJson);
    // })()
  */

  const data = (() => fetch(url).then(toJson))()

  const random = (max, min = 0) => Math.floor(Math.random() * (max+1-min) + min);

  // get a single quote
  const get = async () => {
    const {quotes} = await data;
    return Promise.resolve(quotes[random(0, quotes.length-1)]);
  };

  return Object.freeze({get});
})();