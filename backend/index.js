const logEvents = require('./logEvents');

const EvenEmitter = require('events');

class MyEmitter extends EvenEmitter {};

// initialize Object
const myEmitter = new MyEmitter();

const captureEvent = (event) => {
    console.log("event.action", event)
}

myEmitter.addListener('log', captureEvent)

// add listener for the log event
myEmitter.on(
    'log', 
    captureEvent
)

module.exports = { 
    captureEvent : captureEvent()
}
