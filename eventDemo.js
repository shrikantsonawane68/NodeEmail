var events = require('events');
var eventEmitter = new events.EventEmitter();

  var myEventHandler = function () {
    console.log('\n I hear a scream!');
  }
  eventEmitter.on('scream',myEventHandler);
  eventEmitter.emit('scream');
