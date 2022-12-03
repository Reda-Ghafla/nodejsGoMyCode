const fs = require('fs');

fs.readFile('./welcome.txt', 'utf8', (err, data) => {
  if (err) console.log('Error : ', err);
  console.log(data);
});
