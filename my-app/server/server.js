const express = require('express');
const app = express();
const port = 3000;

// create a GET route
app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000);