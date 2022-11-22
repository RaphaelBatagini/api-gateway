
require('dotenv').config();
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/health', function(req, res) {
  res.send('teje saudavel');
});

app.listen(+process.env.API_PORT,  () => {
  console.log(`Listening on port ${process.env.API_PORT}`);
});