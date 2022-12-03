var fs = require('fs');

// Asynchronous - Opening File
console.log('Going to open file!');
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log(typeof fd);
  console.log('File opened successfully!');
});

// var fs = require('fs');

// // Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('Asynchronous read: ', data.toString());
// });

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log('Synchronous read: ' + data.toString());

// console.log('Program Ended');
