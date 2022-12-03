const express = require('express');

const app = express();

const port = 3000;

// app.get('/', (req, res) => {
//   res.end('<h1>Hello Express</h1>');
// });
// app.get('/:user_name', (req, res) => {
//   res.status(200);
//   res.set('Content-type', 'text/html');
//   res.end(`<h1>Hello ${req.params.user_name}, You are welcome</h1> `);
// });

// const server = app.listen(3000, function (err) {
//   if (err) console.log('server not running');
//   else console.log("Calling app.listen's callback function.");
// });

//app.all() exemple

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app
  .get('/', function (req, res) {
    res.send('GET request to the homepage');
  })
  .post('/', function (req, res) {
    res.send('POST request to the homepage');
  })
  .all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  })
  .use(function (req, res, next) {
    res.status(404).send('Page introuvable !');
  });

/*

app.get('/home', function (req, res) {
  res.send('hello world');
});

*/

app.listen(port, () => {
  console.log(
    `The server is running at port ${port}  at host http://localhost:${port}`
  );
});
