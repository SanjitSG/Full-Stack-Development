const EventEmitter = require('events');
const { Agent } = require('http');

const customEmitter = new EventEmitter();

// console.log(customEmitter);

// on() => create an event
// emit() =>emit/execute the event

customEmitter.on('response', (id, userName, age) => {
  console.log(`User Id: ${id}`);
  console.log(`UserName: ${userName}`);
  console.log(`User Age: ${age}`);
});

// customEmitter.on('response', (city) => {
//   console.log(`City: ${city}`);
// });

customEmitter.emit('response', 10001, 'John', 20);
// customEmitter.emit('response', 'Chennai');
