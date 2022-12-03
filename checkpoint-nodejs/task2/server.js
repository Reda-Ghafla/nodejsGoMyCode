const http = require('http');

const port = 3000;
const hosting = 'localhost';

const server = http.createServer((req, res) => {
  res.write(`<h1> Hello Node!!!!</h1>\n`);
  res.end();
});

server.listen(port, hosting, () => {
  console.log(
    `Server is running at ${port} \nLocal ===>  http://${hosting}:${port}`
  );
});
