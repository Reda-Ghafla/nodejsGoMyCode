const fs = require('fs');
// var buf = new Buffer(1024);

// fs.appendFile('movies.txt', 'Titatnic', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// console.log('End of code');

fs.readFile('movies.txt', function (err, data) {
  if (err) throw err;
  console.log(data);
});

// fs.readdir('./test', (err, data) => {
//   if (err) console.log(err);
//   data.forEach((file) => {
//     console.log(data.length, file);
//   });
// });

// fs.open('./input.txt', 'r+', (err, data) => {
//   if (err) console.log(err);
//   console.log('file opened succefully');
//   // console.log(data);
//   fs.read(data, buf, 0, buf.length, 0, (err, bytes) => {
//     if (err) console.error(err);
//     console.log(bytes + ' bytes read');
//     if (bytes > 0) {
//       console.log(buf.slice(0, bytes).toString());
//     }
//   });
// });

/*

fs.stat('./input.txt', (err, stats) => {
  if (err) return err;
  console.log();
  console.log(stats.isFIFO());
});

*/
// const stats = new fs.Stats();

// stats.isFile('./input.txt', (err, data) => {
//   if (err) return err;

//   console.log(data);
// });
