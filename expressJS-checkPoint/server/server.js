const express = require('express');
const app = express();

const path = require('path');
// const cors = require('cors');

// const appFront = require('../client/src/App.js');

app.use(express.static('build'));

// console.log(path.join(__dirname, '../client/src/App.js'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/src/App.js'));
});
app.get('/service', (req, res) => {
  res.send('<h1>Services Page</h1>');
});
app.get('/Contact', (req, res) => {
  res.send('<h1>Contact Page</h1>');
});

app.listen(3000, () => {
  console.log('Server is running at port ' + 3000);
});
