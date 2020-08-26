const request = require('request');
request(('https://api.thecatapi.com/v1/breeds/search' + "?q=" + process.argv[2]), (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  const data = JSON.parse(body);
  if (process.argv.length === 2) {
    console.log('please enter a bird name');
  } else {
    if (data[0] === undefined) {
      console.log('The bird name is not found');
    } else {
      console.log(data[0].description);
    }

  }
});
