const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  const url =  "https://api.thecatapi.com/v1/breeds/search" + "?q=" + breedName;
  request((url), (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback("Error in url",null);
    } else if (data[0] === undefined) {
      callback("The bird name is not found", null);
    } else {
      callback(null, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };
