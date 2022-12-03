///const fs = require('fs');
const events = require('events');

// Basic exemples of Events
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
  console.log('connection succesful.');

  // Fire the data_received event
  eventEmitter.emit('data_received');
};

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

/*

// Ex : 1

const eventEmitter = new events.EventEmitter();

eventEmitter.on('response', () => {
  console.log('Listning to the event');
});

eventEmitter.emit('response');

*/

// Synchronisation

/*
const data = fs.readFileSync('./input.txt');

console.log(data.toString());
console.log('Program Ended');
*/

// Asynchronisation
/*

fs.readFile('./input.txt', 'utf-8', (data, err) => {
  if (err) console.log(err);
  console.log(data);
});

console.log('End request');
*/
