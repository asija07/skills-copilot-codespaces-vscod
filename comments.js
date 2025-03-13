// Create web server
// Create a new web server using the express.js framework and the body-parser middleware.
// The server should listen on port 3000 and respond to GET and POST requests to the /comments URL.
// The server should store the comments data in a global variable and return it as a JSON response when a GET request is made to the /comments URL.
// The server should accept a JSON object with a comment property in POST requests to the /comments URL. The server should add the comment object to the comments data and return it as a JSON response.
// The server should return a 400 status code if the request body is not a valid JSON object with a comment property.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  if (req.body && req.body.comment) {
    comments.push(req.body.comment);
    res.json(req.body.comment);
  } else {
    res.status(400).send('Invalid request');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});