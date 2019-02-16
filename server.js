'use strict';
// Load dotenv to manage variables
require('dotenv').config(); // Chaining; runs this right away

// Load express.js to do heavy lifting for server / Express offers us full CRUD capabilities
const express = require('express'); // Normal syntax for setting up express requirement
const app = express(); // Saves us having to use express() longhand function every time

// Establish port number
const PORT = process.env.PORT || 3000; // Port no. will also recorded be in .env file (the canonical place where PORT no. is listed)

// Tell express where to load our html files from
app.use(express.static('./public'));

// Listen for
app.get('/hello', (request, response) => { // Means server is listening for so. to go to the /hello path and respond
  response.status(200).send('Hello');
}) 

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }

  response.status(200).json(airplanes); // Sends back an object converted to JSON
});

app.get('/', (request, response) => {
  response.status(200).redirect('index.html');
});

// Add catch-all to get routes that don't exist (without waiting for 404)
app.use('*', (request, response) => response.send(`Sorry, that route does not exist`)); // We use .use() instead of .get() here b/c Express.js docs say to

// Turn the server on
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
