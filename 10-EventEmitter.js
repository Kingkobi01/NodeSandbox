const EventEmitter = require('events');
const CustomEmitter = new EventEmitter();

CustomEmitter.on('Response', (name, age) => {
  console.log(`Data recieved from ${name}\nage: ${age}`)
});
CustomEmitter.on('Response', () => {
  console.log("Another Logic here");
})

CustomEmitter.emit('Response', 'Kwabena', 20);

