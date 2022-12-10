const express = require('express');

const app = express();

const cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};
const cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};
app.get(
  '/example/d',
  [cb0, cb1],
  function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
  },
  function (req, res) {
    res.send('Hello from D!');
  }
);

app.listen(3000, () => console.log('server is running'));
